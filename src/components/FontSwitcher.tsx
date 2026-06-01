import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import styles from "./styles/fontSwitcher.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
import fontSwitcherScript from "./scripts/font-switcher.inline.ts";

export type AccessibilityFont = "default" | "comic-sans" | "atkinson-hyperlegible" | "opendyslexic";

export interface FontSwitcherOptions {
  className?: string;
  defaultFont?: AccessibilityFont;
}

const fontOptions: Array<{ value: AccessibilityFont; label: string }> = [
  { value: "default", label: "Default font" },
  { value: "comic-sans", label: "Comic Sans" },
  { value: "atkinson-hyperlegible", label: "Atkinson Hyperlegible" },
  { value: "opendyslexic", label: "OpenDyslexic" },
];

export default ((opts?: FontSwitcherOptions) => {
  const { className, defaultFont = "default" } = opts ?? {};

  const FontSwitcher: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <label class={classNames(displayClass, "accessibility-font-switcher", className)}>
        <span class="accessibility-font-switcher-label">Font</span>
        <select aria-label="Reading font" data-default-font={defaultFont}>
          {fontOptions.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </label>
    );
  };

  FontSwitcher.css = styles;
  FontSwitcher.afterDOMLoaded = fontSwitcherScript;

  return FontSwitcher;
}) satisfies QuartzComponentConstructor;
