import { QuartzComponent } from '@quartz-community/types';

type AccessibilityFont = "default" | "comic-sans" | "atkinson-hyperlegible" | "opendyslexic";
interface FontSwitcherOptions {
    className?: string;
    defaultFont?: AccessibilityFont;
}
declare const _default$2: (opts?: FontSwitcherOptions) => QuartzComponent;

interface AccessibilityControlsOptions {
    className?: string;
    defaultFont?: AccessibilityFont;
}
declare const _default$1: (opts?: AccessibilityControlsOptions) => QuartzComponent;

interface BeelineReaderOptions {
    className?: string;
}
declare const _default: (opts?: BeelineReaderOptions) => QuartzComponent;

export { _default$1 as AccessibilityControls, type AccessibilityControlsOptions, type AccessibilityFont, _default as BeelineReader, type BeelineReaderOptions, _default$2 as FontSwitcher, type FontSwitcherOptions, _default$1 as QuartzAccessibilitySuite };
