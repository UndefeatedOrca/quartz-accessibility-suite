import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import type { AccessibilityFont } from "./FontSwitcher";
import styles from "./styles/accessibilityControls.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
import beelineReaderScript from "./scripts/beeline.inline.ts";
// @ts-expect-error - inline script import handled by Quartz bundler
import fontSwitcherScript from "./scripts/font-switcher.inline.ts";

export interface AccessibilityControlsOptions {
  className?: string;
  defaultFont?: AccessibilityFont;
}

const fontOptions: Array<{ value: AccessibilityFont; label: string }> = [
  { value: "default", label: "Default font" },
  { value: "comic-sans", label: "Comic Sans" },
  { value: "atkinson-hyperlegible", label: "Atkinson Hyperlegible" },
  { value: "opendyslexic", label: "OpenDyslexic" },
];

const enableLabel = "Enable BeeLine reader";

const combinedScript = `${beelineReaderScript}\n${fontSwitcherScript}`;

export default ((opts?: AccessibilityControlsOptions) => {
  const { className, defaultFont = "default" } = opts ?? {};

  const AccessibilityControls: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={classNames(displayClass, "accessibility-controls", className)}>
        <button
          class="beeline-reader"
          type="button"
          aria-label={enableLabel}
          aria-pressed="false"
          title={enableLabel}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="beelineIcon"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 6.5h16" />
            <path d="M4 10.5h8" />
            <path d="M4 14.5h16" />
            <path d="M4 18.5h8" />
            <path d="M15.5 9.5h4a1 1 0 0 1 1 1v4a3.5 3.5 0 0 1-3.5 3.5h-1.5z" />
          </svg>
        </button>
        <label class="accessibility-font-switcher">
          <span class="accessibility-font-switcher-label">Font</span>
          <select aria-label="Reading font" data-default-font={defaultFont}>
            {fontOptions.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </label>
      </div>
    );
  };

  AccessibilityControls.css = styles;
  AccessibilityControls.beforeDOMLoaded = combinedScript;

  return AccessibilityControls;
}) satisfies QuartzComponentConstructor;
