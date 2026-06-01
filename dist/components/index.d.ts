import { QuartzComponent } from '@quartz-community/types';

interface ExampleComponentOptions {
    prefix?: string;
    suffix?: string;
    className?: string;
}
declare const _default$2: (opts?: ExampleComponentOptions) => QuartzComponent;

interface BeelineReaderOptions {
    className?: string;
}
declare const _default$1: (opts?: BeelineReaderOptions) => QuartzComponent;

type AccessibilityFont = "default" | "comic-sans" | "atkinson-hyperlegible" | "opendyslexic";
interface FontSwitcherOptions {
    className?: string;
    defaultFont?: AccessibilityFont;
}
declare const _default: (opts?: FontSwitcherOptions) => QuartzComponent;

export { type AccessibilityFont, _default$1 as BeelineReader, type BeelineReaderOptions, _default$2 as ExampleComponent, type ExampleComponentOptions, _default as FontSwitcher, type FontSwitcherOptions };
