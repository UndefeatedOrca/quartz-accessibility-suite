import { createRequire } from 'module';

createRequire(import.meta.url);

// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/styles/accessibilityControls.scss
var accessibilityControls_default = '.beeline-reader {\n  cursor: pointer;\n  padding: 0;\n  position: relative;\n  background: none;\n  border: none;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  text-align: inherit;\n  flex-shrink: 0;\n}\n.beeline-reader svg {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n  stroke: var(--darkgray);\n  transition: stroke 0.15s ease, opacity 0.15s ease;\n}\n.beeline-reader[aria-pressed=true] svg {\n  stroke: var(--secondary);\n}\n\n:root[data-beeline-reader=on] .center article .beeline-token {\n  color: var(--beeline-token-color, var(--darkgray));\n  transition: color 0.15s ease;\n}\n\n@font-face {\n  font-family: "Atkinson Hyperlegible";\n  src: local("Atkinson Hyperlegible"), url("/accessibility-fonts/AtkinsonHyperlegible-Regular.ttf") format("truetype");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n@font-face {\n  font-family: "Atkinson Hyperlegible";\n  src: local("Atkinson Hyperlegible Bold"), url("/accessibility-fonts/AtkinsonHyperlegible-Bold.ttf") format("truetype");\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n}\n@font-face {\n  font-family: "Atkinson Hyperlegible";\n  src: local("Atkinson Hyperlegible Italic"), url("/accessibility-fonts/AtkinsonHyperlegible-Italic.ttf") format("truetype");\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n}\n@font-face {\n  font-family: "Atkinson Hyperlegible";\n  src: local("Atkinson Hyperlegible Bold Italic"), url("/accessibility-fonts/AtkinsonHyperlegible-BoldItalic.ttf") format("truetype");\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic";\n  src: local("OpenDyslexic"), url("/accessibility-fonts/OpenDyslexic-Regular.otf") format("opentype");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic";\n  src: local("OpenDyslexic Bold"), url("/accessibility-fonts/OpenDyslexic-Bold.otf") format("opentype");\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic";\n  src: local("OpenDyslexic Italic"), url("/accessibility-fonts/OpenDyslexic-Italic.otf") format("opentype");\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic";\n  src: local("OpenDyslexic Bold Italic"), url("/accessibility-fonts/OpenDyslexic-BoldItalic.otf") format("opentype");\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n}\n.accessibility-font-switcher {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--darkgray);\n  font-size: 0.9rem;\n  line-height: 1.2;\n}\n.accessibility-font-switcher select {\n  max-width: 12rem;\n  border: 1px solid var(--lightgray);\n  border-radius: 4px;\n  background: var(--light);\n  color: var(--darkgray);\n  padding: 0.2rem 1.5rem 0.2rem 0.4rem;\n  font: inherit;\n}\n\n:root[data-accessibility-font=comic-sans] body,\n:root[data-accessibility-font=comic-sans] button,\n:root[data-accessibility-font=comic-sans] input,\n:root[data-accessibility-font=comic-sans] select,\n:root[data-accessibility-font=comic-sans] textarea {\n  font-family: "Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif !important;\n}\n\n:root[data-accessibility-font=atkinson-hyperlegible] body,\n:root[data-accessibility-font=atkinson-hyperlegible] button,\n:root[data-accessibility-font=atkinson-hyperlegible] input,\n:root[data-accessibility-font=atkinson-hyperlegible] select,\n:root[data-accessibility-font=atkinson-hyperlegible] textarea {\n  font-family: "Atkinson Hyperlegible", "Segoe UI", sans-serif !important;\n}\n\n:root[data-accessibility-font=opendyslexic] body,\n:root[data-accessibility-font=opendyslexic] button,\n:root[data-accessibility-font=opendyslexic] input,\n:root[data-accessibility-font=opendyslexic] select,\n:root[data-accessibility-font=opendyslexic] textarea {\n  font-family: "OpenDyslexic", "Segoe UI", sans-serif !important;\n}\n\n.accessibility-controls {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}';

// src/components/scripts/beeline.inline.ts
var beeline_inline_default = 'var _="quartz-accessibility-suite:beeline-reader",M="data-beeline-reader",g=".center article",b="p, li, blockquote, td, th, dd, dt",h=".beeline-reader",O="Enable BeeLine reader",R="Disable BeeLine reader",k="#c62828",S="#1565c0",D="#ff8a80",C="#82b1ff";var T=/([\\p{L}\\p{N}][\\p{L}\\p{N}\'_-]*)/gu,H="code, pre, script, style, textarea, svg, math, mjx-container, .katex, .mermaid",c=localStorage.getItem(_)==="on",L=0;function N(t){let e=document.createElement("span");return e.className="beeline-token",e.dataset.beelineToken="true",e.textContent=t,e}function I(t){let e=t.textContent??"";T.lastIndex=0;let o,n=0,l=!1,r=document.createDocumentFragment();for(;(o=T.exec(e))!==null;){l=!0;let[s]=o,i=o.index;i>n&&r.append(e.slice(n,i)),r.appendChild(N(s)),n=i+s.length}return l?(n<e.length&&r.append(e.slice(n)),r):null}function v(t){if(!t.textContent?.trim())return!1;let e=t.parentElement;return!(!e||e.closest(H)||e.closest(".beeline-token"))}function B(t){if(t.dataset.beelineProcessed==="true")return;let e=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),o=[],n=e.nextNode();for(;n;)n instanceof Text&&v(n)&&o.push(n),n=e.nextNode();for(let l of o){let r=I(l);r&&l.replaceWith(r)}t.dataset.beelineProcessed="true"}function y(){for(let t of document.querySelectorAll(g))for(let e of t.querySelectorAll(b))B(e)}function G(){let t=c?R:O;for(let e of document.querySelectorAll(h))e.setAttribute("aria-pressed",c?"true":"false"),e.setAttribute("aria-label",t),e.setAttribute("title",t)}function w(){return document.documentElement.getAttribute("saved-theme")==="dark"?{start:D,end:C,strength:38}:{start:k,end:S,strength:42}}function q(t){let e=[...t.querySelectorAll(".beeline-token")];if(e.length===0)return;let{start:o,end:n,strength:l}=w(),r=[],s=[],i=null;for(let a of e){let d=Math.round(a.getBoundingClientRect().top);i===null||Math.abs(d-i)<=2?s.push(a):(r.push(s),s=[a]),i=d}s.length>0&&r.push(s);for(let[a,d]of r.entries()){let u=d.length;for(let[x,f]of d.entries()){let E=u<=1?.5:x/(u-1),m=a%2===0?E:1-E;f.style.setProperty("--beeline-token-color",`color-mix(in srgb, var(--darkgray) ${100-l}%, color-mix(in srgb, ${o} ${Math.round((1-m)*100)}%, ${n} ${Math.round(m*100)}%) ${l}%)`),f.dataset.beelineLine=a%2===0?"even":"odd"}}}function z(){for(let t of document.querySelectorAll(g))for(let e of t.querySelectorAll(b))q(e)}function A(){c&&(cancelAnimationFrame(L),L=requestAnimationFrame(()=>{z()}))}function p(){document.documentElement.setAttribute(M,c?"on":"off"),c&&(y(),A()),G()}document.addEventListener("nav",()=>{let t=()=>{c=!c,localStorage.setItem(_,c?"on":"off"),p()},e=()=>{A()};for(let o of document.querySelectorAll(h))o.addEventListener("click",t),window.addCleanup(()=>o.removeEventListener("click",t));window.addEventListener("resize",e),window.addCleanup(()=>window.removeEventListener("resize",e)),document.addEventListener("readermodechange",e),window.addCleanup(()=>document.removeEventListener("readermodechange",e)),p()});\n';

// src/components/scripts/font-switcher.inline.ts
var font_switcher_inline_default = 'var a="quartz-accessibility-suite:accessibility-font",d="data-accessibility-font",u=".accessibility-font-switcher select",f=new Set(["default","comic-sans","atkinson-hyperlegible","opendyslexic"]);function o(e){return e&&f.has(e)?e:"default"}function S(e){return o(e.dataset.defaultFont)}function m(e){return o(localStorage.getItem(a)??S(e))}function i(e){document.documentElement.setAttribute(d,e)}function r(e){for(let t of document.querySelectorAll(u))t.value=e}document.addEventListener("nav",()=>{let e=[...document.querySelectorAll(u)],t=e[0];if(!t)return;let s=m(t);i(s),r(s);for(let n of e){let l=()=>{let c=o(n.value);localStorage.setItem(a,c),i(c),r(c)};n.addEventListener("change",l),window.addCleanup(()=>n.removeEventListener("change",l))}});\n';
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/AccessibilityControls.tsx
var fontOptions = [
  { value: "default", label: "Default font" },
  { value: "comic-sans", label: "Comic Sans" },
  { value: "atkinson-hyperlegible", label: "Atkinson Hyperlegible" },
  { value: "opendyslexic", label: "OpenDyslexic" }
];
var enableLabel = "Enable BeeLine reader";
var combinedScript = `${beeline_inline_default}
${font_switcher_inline_default}`;
var AccessibilityControls_default = ((opts) => {
  const { className, defaultFont = "default" } = opts ?? {};
  const AccessibilityControls = ({ displayClass }) => {
    return /* @__PURE__ */ u2("div", { class: classNames(displayClass, "accessibility-controls", className), children: [
      /* @__PURE__ */ u2(
        "button",
        {
          class: "beeline-reader",
          type: "button",
          "aria-label": enableLabel,
          "aria-pressed": "false",
          title: enableLabel,
          children: /* @__PURE__ */ u2(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "beelineIcon",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.8",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ u2("path", { d: "M4 6.5h16" }),
                /* @__PURE__ */ u2("path", { d: "M4 10.5h8" }),
                /* @__PURE__ */ u2("path", { d: "M4 14.5h16" }),
                /* @__PURE__ */ u2("path", { d: "M4 18.5h8" }),
                /* @__PURE__ */ u2("path", { d: "M15.5 9.5h4a1 1 0 0 1 1 1v4a3.5 3.5 0 0 1-3.5 3.5h-1.5z" })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ u2("label", { class: "accessibility-font-switcher", children: [
        /* @__PURE__ */ u2("span", { class: "accessibility-font-switcher-label", children: "Font" }),
        /* @__PURE__ */ u2("select", { "aria-label": "Reading font", "data-default-font": defaultFont, children: fontOptions.map(({ value, label }) => /* @__PURE__ */ u2("option", { value, children: label })) })
      ] })
    ] });
  };
  AccessibilityControls.css = accessibilityControls_default;
  AccessibilityControls.beforeDOMLoaded = combinedScript;
  return AccessibilityControls;
});

// src/components/styles/beelineReader.scss
var beelineReader_default = ".beeline-reader {\n  cursor: pointer;\n  padding: 0;\n  position: relative;\n  background: none;\n  border: none;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  text-align: inherit;\n  flex-shrink: 0;\n}\n.beeline-reader svg {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n  stroke: var(--darkgray);\n  transition: stroke 0.15s ease, opacity 0.15s ease;\n}\n.beeline-reader[aria-pressed=true] svg {\n  stroke: var(--secondary);\n}\n\n:root[data-beeline-reader=on] .center article .beeline-token {\n  color: var(--beeline-token-color, var(--darkgray));\n  transition: color 0.15s ease;\n}";

// src/components/BeelineReader.tsx
var enableLabel2 = "Enable BeeLine reader";
var BeelineReader_default = ((opts) => {
  const { className } = opts ?? {};
  const BeelineReader = ({ displayClass }) => {
    return /* @__PURE__ */ u2(
      "button",
      {
        class: classNames(displayClass, "beeline-reader", className),
        type: "button",
        "aria-label": enableLabel2,
        "aria-pressed": "false",
        title: enableLabel2,
        children: /* @__PURE__ */ u2(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "beelineIcon",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.8",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ u2("path", { d: "M4 6.5h16" }),
              /* @__PURE__ */ u2("path", { d: "M4 10.5h8" }),
              /* @__PURE__ */ u2("path", { d: "M4 14.5h16" }),
              /* @__PURE__ */ u2("path", { d: "M4 18.5h8" }),
              /* @__PURE__ */ u2("path", { d: "M15.5 9.5h4a1 1 0 0 1 1 1v4a3.5 3.5 0 0 1-3.5 3.5h-1.5z" })
            ]
          }
        )
      }
    );
  };
  BeelineReader.beforeDOMLoaded = beeline_inline_default;
  BeelineReader.css = beelineReader_default;
  return BeelineReader;
});

// src/components/styles/fontSwitcher.scss
var fontSwitcher_default = '@font-face {\n  font-family: "Atkinson Hyperlegible";\n  src: local("Atkinson Hyperlegible"), url("/accessibility-fonts/AtkinsonHyperlegible-Regular.ttf") format("truetype");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n@font-face {\n  font-family: "Atkinson Hyperlegible";\n  src: local("Atkinson Hyperlegible Bold"), url("/accessibility-fonts/AtkinsonHyperlegible-Bold.ttf") format("truetype");\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n}\n@font-face {\n  font-family: "Atkinson Hyperlegible";\n  src: local("Atkinson Hyperlegible Italic"), url("/accessibility-fonts/AtkinsonHyperlegible-Italic.ttf") format("truetype");\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n}\n@font-face {\n  font-family: "Atkinson Hyperlegible";\n  src: local("Atkinson Hyperlegible Bold Italic"), url("/accessibility-fonts/AtkinsonHyperlegible-BoldItalic.ttf") format("truetype");\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic";\n  src: local("OpenDyslexic"), url("/accessibility-fonts/OpenDyslexic-Regular.otf") format("opentype");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic";\n  src: local("OpenDyslexic Bold"), url("/accessibility-fonts/OpenDyslexic-Bold.otf") format("opentype");\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic";\n  src: local("OpenDyslexic Italic"), url("/accessibility-fonts/OpenDyslexic-Italic.otf") format("opentype");\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n}\n@font-face {\n  font-family: "OpenDyslexic";\n  src: local("OpenDyslexic Bold Italic"), url("/accessibility-fonts/OpenDyslexic-BoldItalic.otf") format("opentype");\n  font-style: italic;\n  font-weight: 700;\n  font-display: swap;\n}\n.accessibility-font-switcher {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  color: var(--darkgray);\n  font-size: 0.9rem;\n  line-height: 1.2;\n}\n.accessibility-font-switcher select {\n  max-width: 12rem;\n  border: 1px solid var(--lightgray);\n  border-radius: 4px;\n  background: var(--light);\n  color: var(--darkgray);\n  padding: 0.2rem 1.5rem 0.2rem 0.4rem;\n  font: inherit;\n}\n\n:root[data-accessibility-font=comic-sans] body,\n:root[data-accessibility-font=comic-sans] button,\n:root[data-accessibility-font=comic-sans] input,\n:root[data-accessibility-font=comic-sans] select,\n:root[data-accessibility-font=comic-sans] textarea {\n  font-family: "Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif !important;\n}\n\n:root[data-accessibility-font=atkinson-hyperlegible] body,\n:root[data-accessibility-font=atkinson-hyperlegible] button,\n:root[data-accessibility-font=atkinson-hyperlegible] input,\n:root[data-accessibility-font=atkinson-hyperlegible] select,\n:root[data-accessibility-font=atkinson-hyperlegible] textarea {\n  font-family: "Atkinson Hyperlegible", "Segoe UI", sans-serif !important;\n}\n\n:root[data-accessibility-font=opendyslexic] body,\n:root[data-accessibility-font=opendyslexic] button,\n:root[data-accessibility-font=opendyslexic] input,\n:root[data-accessibility-font=opendyslexic] select,\n:root[data-accessibility-font=opendyslexic] textarea {\n  font-family: "OpenDyslexic", "Segoe UI", sans-serif !important;\n}';

// src/components/FontSwitcher.tsx
var fontOptions2 = [
  { value: "default", label: "Default font" },
  { value: "comic-sans", label: "Comic Sans" },
  { value: "atkinson-hyperlegible", label: "Atkinson Hyperlegible" },
  { value: "opendyslexic", label: "OpenDyslexic" }
];
var FontSwitcher_default = ((opts) => {
  const { className, defaultFont = "default" } = opts ?? {};
  const FontSwitcher = ({ displayClass }) => {
    return /* @__PURE__ */ u2("label", { class: classNames(displayClass, "accessibility-font-switcher", className), children: [
      /* @__PURE__ */ u2("span", { class: "accessibility-font-switcher-label", children: "Font" }),
      /* @__PURE__ */ u2("select", { "aria-label": "Reading font", "data-default-font": defaultFont, children: fontOptions2.map(({ value, label }) => /* @__PURE__ */ u2("option", { value, children: label })) })
    ] });
  };
  FontSwitcher.css = fontSwitcher_default;
  FontSwitcher.afterDOMLoaded = font_switcher_inline_default;
  return FontSwitcher;
});

export { AccessibilityControls_default as AccessibilityControls, BeelineReader_default as BeelineReader, FontSwitcher_default as FontSwitcher };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map