export type {
  BuildCtx,
  ChangeEvent,
  CSSResource,
  JSResource,
  ProcessedContent,
  QuartzEmitterPlugin,
  QuartzEmitterPluginInstance,
  QuartzFilterPlugin,
  QuartzFilterPluginInstance,
  QuartzPluginData,
  QuartzTransformerPlugin,
  QuartzTransformerPluginInstance,
  StaticResources,
  PageMatcher,
  PageGenerator,
  VirtualPage,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
} from "@quartz-community/types";

export interface BeelineReaderOptions {
  /** Extra CSS class name applied to the BeeLine toggle button. */
  className?: string;
}

export type AccessibilityFont = "default" | "comic-sans" | "atkinson-hyperlegible" | "opendyslexic";

export interface FontSwitcherOptions {
  /** Extra CSS class name applied to the font switcher label wrapper. */
  className?: string;
  /** Font selected when the user has no stored preference. */
  defaultFont?: AccessibilityFont;
}

export interface AccessibilityControlsOptions {
  /** Extra CSS class name applied to the combined controls wrapper. */
  className?: string;
  /** Font selected when the user has no stored preference. */
  defaultFont?: AccessibilityFont;
}

export interface AccessibilityFontAssetsOptions {
  /** Output directory, relative to the Quartz build output root. */
  outputDirectory: string;
}
