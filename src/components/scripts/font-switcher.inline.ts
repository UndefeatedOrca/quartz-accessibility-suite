const FONT_STORAGE_KEY = "quartz-accessibility-suite:accessibility-font";
const FONT_ATTRIBUTE = "data-accessibility-font";
const FONT_SWITCHER_SELECTOR = ".accessibility-font-switcher select";
const VALID_FONTS = new Set(["default", "comic-sans", "atkinson-hyperlegible", "opendyslexic"]);

function normalizeFont(value: string | null | undefined) {
  if (value && VALID_FONTS.has(value)) return value;
  return "default";
}

function getConfiguredFont(select: HTMLSelectElement) {
  return normalizeFont(select.dataset.defaultFont);
}

function getStoredFont(select: HTMLSelectElement) {
  return normalizeFont(localStorage.getItem(FONT_STORAGE_KEY) ?? getConfiguredFont(select));
}

function applyFont(font: string) {
  document.documentElement.setAttribute(FONT_ATTRIBUTE, font);
}

function syncSelects(font: string) {
  for (const select of document.querySelectorAll<HTMLSelectElement>(FONT_SWITCHER_SELECTOR)) {
    select.value = font;
  }
}

document.addEventListener("nav", () => {
  const selects = [...document.querySelectorAll<HTMLSelectElement>(FONT_SWITCHER_SELECTOR)];
  const firstSelect = selects[0];
  if (!firstSelect) return;

  const initialFont = getStoredFont(firstSelect);
  applyFont(initialFont);
  syncSelects(initialFont);

  for (const select of selects) {
    const handleChange = () => {
      const font = normalizeFont(select.value);
      localStorage.setItem(FONT_STORAGE_KEY, font);
      applyFont(font);
      syncSelects(font);
    };

    select.addEventListener("change", handleChange);
    window.addCleanup(() => select.removeEventListener("change", handleChange));
  }
});
