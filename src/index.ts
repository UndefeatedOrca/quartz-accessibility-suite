export { ExampleTransformer } from "./transformer";
export { ExampleFilter } from "./filter";
export { ExampleEmitter } from "./emitter";
export { AccessibilityFontAssets } from "./font-assets";
export { default as ExampleComponent } from "./components/ExampleComponent";
export { default as BeelineReader } from "./components/BeelineReader";
export { default as FontSwitcher } from "./components/FontSwitcher";

export type {
  ExampleTransformerOptions,
  ExampleFilterOptions,
  ExampleEmitterOptions,
  AccessibilityFontAssetsOptions,
} from "./types";

export type { ExampleComponentOptions } from "./components/ExampleComponent";
export type { BeelineReaderOptions } from "./components/BeelineReader";
export type { AccessibilityFont, FontSwitcherOptions } from "./components/FontSwitcher";

// Re-export shared types from @quartz-community/types
export type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
  StringResource,
  QuartzTransformerPlugin,
  QuartzFilterPlugin,
  QuartzEmitterPlugin,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
  PageMatcher,
  PageGenerator,
  VirtualPage,
} from "@quartz-community/types";
