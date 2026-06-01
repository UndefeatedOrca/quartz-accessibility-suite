import { describe, expect, it } from "vitest";
import fs from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import { AccessibilityFontAssets } from "../src/font-assets";
import { createCtx } from "./helpers";

describe("accessibility components", () => {
  it("defines BeeLine and font switcher component assets", async () => {
    const beeline = await fs.readFile("src/components/BeelineReader.tsx", "utf8");
    const fontSwitcher = await fs.readFile("src/components/FontSwitcher.tsx", "utf8");
    const beelineScript = await fs.readFile("src/components/scripts/beeline.inline.ts", "utf8");
    const fontSwitcherStyles = await fs.readFile("src/components/styles/fontSwitcher.scss", "utf8");

    expect(beeline).toContain("BeelineReader.beforeDOMLoaded");
    expect(fontSwitcher).toContain("FontSwitcher.afterDOMLoaded");
    expect(beelineScript).toContain("data-beeline-reader");
    expect(fontSwitcherStyles).toContain("Atkinson Hyperlegible");
    expect(fontSwitcherStyles).toContain("OpenDyslexic");
  });
});

describe("AccessibilityFontAssets", () => {
  it("copies bundled font assets to the Quartz output directory", async () => {
    const outputDir = await fs.mkdtemp(path.join(tmpdir(), "quartz-accessibility-"));
    const ctx = createCtx({ argv: { output: outputDir } });
    const emitter = AccessibilityFontAssets();

    const result = await emitter.emit(ctx, [], {
      css: [],
      js: [],
      additionalHead: [],
    });
    const outputPaths = Array.isArray(result) ? result : await collectAsync(result);

    expect(outputPaths).toHaveLength(8);
    await expect(
      fs.access(path.join(outputDir, "accessibility-fonts", "OpenDyslexic-Regular.otf")),
    ).resolves.toBeUndefined();
  });
});

const collectAsync = async <T>(iterable: AsyncIterable<T>): Promise<T[]> => {
  const results: T[] = [];
  for await (const item of iterable) {
    results.push(item);
  }
  return results;
};
