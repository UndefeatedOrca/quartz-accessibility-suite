export { AccessibilityControls, AccessibilityControlsOptions, AccessibilityFont, BeelineReader, BeelineReaderOptions, FontSwitcher, FontSwitcherOptions, AccessibilityControls as default } from './components/index.js';
import { QuartzEmitterPlugin } from '@quartz-community/types';
export { PageGenerator, PageMatcher, QuartzComponent, QuartzComponentConstructor, QuartzComponentProps, QuartzEmitterPlugin, QuartzFilterPlugin, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzTransformerPlugin, StringResource, VirtualPage } from '@quartz-community/types';
import { AccessibilityFontAssetsOptions } from './types.js';

declare const AccessibilityFontAssets: QuartzEmitterPlugin<Partial<AccessibilityFontAssetsOptions>>;

export { AccessibilityFontAssets, AccessibilityFontAssetsOptions };
