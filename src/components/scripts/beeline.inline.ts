const STORAGE_KEY = "beeline-reader";
const ROOT_ATTRIBUTE = "data-beeline-reader";
const ARTICLE_SELECTOR = ".center article";
const BLOCK_SELECTOR = "p, li, blockquote, td, th, dd, dt";
const BUTTON_SELECTOR = ".beeline-reader";
const ENABLE_LABEL = "Enable BeeLine reader";
const DISABLE_LABEL = "Disable BeeLine reader";
const LIGHT_MODE_START_COLOR = "#c62828";
const LIGHT_MODE_END_COLOR = "#1565c0";
const DARK_MODE_START_COLOR = "#ff8a80";
const DARK_MODE_END_COLOR = "#82b1ff";
const LIGHT_MODE_GUIDE_STRENGTH = 42;
const DARK_MODE_GUIDE_STRENGTH = 38;
const WORD_REGEX = /([\p{L}\p{N}][\p{L}\p{N}'_-]*)/gu;
const SKIP_SELECTOR =
  "code, pre, script, style, textarea, svg, math, mjx-container, .katex, .mermaid";

let isBeelineMode = localStorage.getItem(STORAGE_KEY) === "on";
let resizeFrame = 0;

function createToken(word: string) {
  const token = document.createElement("span");
  token.className = "beeline-token";
  token.dataset.beelineToken = "true";
  token.textContent = word;
  return token;
}

function transformTextNode(node: Text) {
  const text = node.textContent ?? "";
  WORD_REGEX.lastIndex = 0;

  let match: RegExpExecArray | null;
  let lastIndex = 0;
  let changed = false;
  const fragment = document.createDocumentFragment();

  while ((match = WORD_REGEX.exec(text)) !== null) {
    changed = true;
    const [word] = match;
    const start = match.index;

    if (start > lastIndex) {
      fragment.append(text.slice(lastIndex, start));
    }

    fragment.appendChild(createToken(word));
    lastIndex = start + word.length;
  }

  if (!changed) {
    return null;
  }

  if (lastIndex < text.length) {
    fragment.append(text.slice(lastIndex));
  }

  return fragment;
}

function shouldProcessTextNode(node: Text) {
  if (!node.textContent?.trim()) return false;

  const parent = node.parentElement;
  if (!parent) return false;
  if (parent.closest(SKIP_SELECTOR)) return false;
  if (parent.closest(".beeline-token")) return false;

  return true;
}

function tokenizeContainer(container: HTMLElement) {
  if (container.dataset.beelineProcessed === "true") return;

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  let currentNode = walker.nextNode();
  while (currentNode) {
    if (currentNode instanceof Text && shouldProcessTextNode(currentNode)) {
      textNodes.push(currentNode);
    }

    currentNode = walker.nextNode();
  }

  for (const textNode of textNodes) {
    const fragment = transformTextNode(textNode);
    if (!fragment) continue;
    textNode.replaceWith(fragment);
  }

  container.dataset.beelineProcessed = "true";
}

function tokenizeArticles() {
  for (const article of document.querySelectorAll<HTMLElement>(ARTICLE_SELECTOR)) {
    for (const block of article.querySelectorAll<HTMLElement>(BLOCK_SELECTOR)) {
      tokenizeContainer(block);
    }
  }
}

function syncButtonState() {
  const label = isBeelineMode ? DISABLE_LABEL : ENABLE_LABEL;

  for (const button of document.querySelectorAll<HTMLButtonElement>(BUTTON_SELECTOR)) {
    button.setAttribute("aria-pressed", isBeelineMode ? "true" : "false");
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  }
}

function getGuideColors() {
  const isDarkMode = document.documentElement.getAttribute("saved-theme") === "dark";

  return isDarkMode
    ? {
        start: DARK_MODE_START_COLOR,
        end: DARK_MODE_END_COLOR,
        strength: DARK_MODE_GUIDE_STRENGTH,
      }
    : {
        start: LIGHT_MODE_START_COLOR,
        end: LIGHT_MODE_END_COLOR,
        strength: LIGHT_MODE_GUIDE_STRENGTH,
      };
}

function paintContainer(container: HTMLElement) {
  const tokens = [...container.querySelectorAll<HTMLElement>(".beeline-token")];
  if (tokens.length === 0) return;
  const { start, end, strength } = getGuideColors();

  const lines: HTMLElement[][] = [];
  let currentLine: HTMLElement[] = [];
  let previousTop: number | null = null;

  for (const token of tokens) {
    const top = Math.round(token.getBoundingClientRect().top);

    if (previousTop === null || Math.abs(top - previousTop) <= 2) {
      currentLine.push(token);
    } else {
      lines.push(currentLine);
      currentLine = [token];
    }

    previousTop = top;
  }

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  for (const [lineIndex, line] of lines.entries()) {
    const lineLength = line.length;

    for (const [tokenIndex, token] of line.entries()) {
      const progress = lineLength <= 1 ? 0.5 : tokenIndex / (lineLength - 1);
      const direction = lineIndex % 2 === 0 ? progress : 1 - progress;
      token.style.setProperty(
        "--beeline-token-color",
        `color-mix(in srgb, var(--darkgray) ${100 - strength}%, color-mix(in srgb, ${start} ${Math.round(
          (1 - direction) * 100,
        )}%, ${end} ${Math.round(direction * 100)}%) ${strength}%)`,
      );
      token.dataset.beelineLine = lineIndex % 2 === 0 ? "even" : "odd";
    }
  }
}

function paintArticles() {
  for (const article of document.querySelectorAll<HTMLElement>(ARTICLE_SELECTOR)) {
    for (const block of article.querySelectorAll<HTMLElement>(BLOCK_SELECTOR)) {
      paintContainer(block);
    }
  }
}

function schedulePaint() {
  if (!isBeelineMode) return;

  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    paintArticles();
  });
}

function applyBeelineState() {
  document.documentElement.setAttribute(ROOT_ATTRIBUTE, isBeelineMode ? "on" : "off");

  if (isBeelineMode) {
    tokenizeArticles();
    schedulePaint();
  }

  syncButtonState();
}

document.addEventListener("nav", () => {
  const toggleBeelineMode = () => {
    isBeelineMode = !isBeelineMode;
    localStorage.setItem(STORAGE_KEY, isBeelineMode ? "on" : "off");
    applyBeelineState();
  };

  const handleResize = () => {
    schedulePaint();
  };

  for (const button of document.querySelectorAll<HTMLButtonElement>(BUTTON_SELECTOR)) {
    button.addEventListener("click", toggleBeelineMode);
    window.addCleanup(() => button.removeEventListener("click", toggleBeelineMode));
  }

  window.addEventListener("resize", handleResize);
  window.addCleanup(() => window.removeEventListener("resize", handleResize));

  document.addEventListener("readermodechange", handleResize);
  window.addCleanup(() => document.removeEventListener("readermodechange", handleResize));

  applyBeelineState();
});
