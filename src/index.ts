import type { BuildCtx, ProcessedContent, QuartzEmitterPlugin } from "@quartz-community/types";
import { AccessibilityFontAssets } from "./font-assets";
import type { AccessibilitySuiteOptions } from "./types";

const defaultOptions: Required<Pick<AccessibilitySuiteOptions, "defaultFont" | "outputDirectory">> =
  {
    defaultFont: "default",
    outputDirectory: "accessibility-fonts",
  };

const AccessibilitySuite: QuartzEmitterPlugin<Partial<AccessibilitySuiteOptions>> = (
  userOptions?: Partial<AccessibilitySuiteOptions>,
) => {
  const options = { ...defaultOptions, ...userOptions };
  const fontAssets = AccessibilityFontAssets({ outputDirectory: options.outputDirectory });

  return {
    name: "AccessibilitySuite",
    emit(ctx: BuildCtx, content: ProcessedContent[], resources) {
      return fontAssets.emit(ctx, content, resources);
    },
    partialEmit(ctx: BuildCtx, content: ProcessedContent[], resources, changeEvents) {
      return fontAssets.partialEmit?.(ctx, content, resources, changeEvents) ?? null;
    },
  };
};

export default AccessibilitySuite;
export { AccessibilityFontAssets } from "./font-assets";
export { default as AccessibilityControls } from "./components/AccessibilityControls";
export { default as QuartzAccessibilitySuite } from "./components/AccessibilityControls";
export { default as BeelineReader } from "./components/BeelineReader";
export { default as FontSwitcher } from "./components/FontSwitcher";

export type { AccessibilityControlsOptions } from "./components/AccessibilityControls";
export type { AccessibilityFontAssetsOptions, AccessibilitySuiteOptions } from "./types";

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
