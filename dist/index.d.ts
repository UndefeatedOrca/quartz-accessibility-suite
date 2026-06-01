import { QuartzEmitterPlugin } from '@quartz-community/types';
export { PageGenerator, PageMatcher, QuartzComponent, QuartzComponentConstructor, QuartzComponentProps, QuartzEmitterPlugin, QuartzFilterPlugin, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzTransformerPlugin, StringResource, VirtualPage } from '@quartz-community/types';
import { AccessibilityFontAssetsOptions, AccessibilitySuiteOptions } from './types.js';
export { AccessibilityControls, AccessibilityControlsOptions, AccessibilityFont, BeelineReader, BeelineReaderOptions, FontSwitcher, FontSwitcherOptions } from './components/index.js';

declare const AccessibilityFontAssets: QuartzEmitterPlugin<Partial<AccessibilityFontAssetsOptions>>;

declare const AccessibilitySuite: QuartzEmitterPlugin<Partial<AccessibilitySuiteOptions>>;

export { AccessibilityFontAssets, AccessibilityFontAssetsOptions, AccessibilitySuiteOptions, AccessibilitySuite as default };
