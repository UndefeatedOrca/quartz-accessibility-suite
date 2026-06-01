import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type {
  BuildCtx,
  FilePath,
  ProcessedContent,
  QuartzEmitterPlugin,
} from "@quartz-community/types";
import type { AccessibilityFontAssetsOptions } from "./types";

const defaultOptions: AccessibilityFontAssetsOptions = {
  outputDirectory: "accessibility-fonts",
};

const fontFiles = [
  "AtkinsonHyperlegible-Bold.ttf",
  "AtkinsonHyperlegible-BoldItalic.ttf",
  "AtkinsonHyperlegible-Italic.ttf",
  "AtkinsonHyperlegible-Regular.ttf",
  "OpenDyslexic-Bold.otf",
  "OpenDyslexic-BoldItalic.otf",
  "OpenDyslexic-Italic.otf",
  "OpenDyslexic-Regular.otf",
];

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceFontDir = path.join(packageRoot, "fonts");

const copyFontAssets = async (ctx: BuildCtx, options: AccessibilityFontAssetsOptions) => {
  const outputDir = path.join(ctx.argv.output, options.outputDirectory);
  await fs.mkdir(outputDir, { recursive: true });

  const outputPaths: FilePath[] = [];
  for (const fileName of fontFiles) {
    const sourcePath = path.join(sourceFontDir, fileName);
    const outputPath = path.join(outputDir, fileName) as FilePath;
    await fs.copyFile(sourcePath, outputPath);
    outputPaths.push(outputPath);
  }

  return outputPaths;
};

export const AccessibilityFontAssets: QuartzEmitterPlugin<
  Partial<AccessibilityFontAssetsOptions>
> = (userOptions?: Partial<AccessibilityFontAssetsOptions>) => {
  const options = { ...defaultOptions, ...userOptions };

  return {
    name: "AccessibilityFontAssets",
    async emit(ctx: BuildCtx, _content: ProcessedContent[], _resources) {
      return copyFontAssets(ctx, options);
    },
    async *partialEmit(ctx: BuildCtx, _content: ProcessedContent[], _resources, _changeEvents) {
      const outputPaths = await copyFontAssets(ctx, options);
      for (const outputPath of outputPaths) {
        yield outputPath;
      }
    },
  };
};
