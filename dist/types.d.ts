export { BuildCtx, CSSResource, ChangeEvent, JSResource, PageGenerator, PageMatcher, ProcessedContent, QuartzEmitterPlugin, QuartzEmitterPluginInstance, QuartzFilterPlugin, QuartzFilterPluginInstance, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzPluginData, QuartzTransformerPlugin, QuartzTransformerPluginInstance, StaticResources, VirtualPage } from '@quartz-community/types';

interface BeelineReaderOptions {
    /** Extra CSS class name applied to the BeeLine toggle button. */
    className?: string;
}
type AccessibilityFont = "default" | "comic-sans" | "atkinson-hyperlegible" | "opendyslexic";
interface FontSwitcherOptions {
    /** Extra CSS class name applied to the font switcher label wrapper. */
    className?: string;
    /** Font selected when the user has no stored preference. */
    defaultFont?: AccessibilityFont;
}
interface AccessibilityFontAssetsOptions {
    /** Output directory, relative to the Quartz build output root. */
    outputDirectory: string;
}

export type { AccessibilityFont, AccessibilityFontAssetsOptions, BeelineReaderOptions, FontSwitcherOptions };
