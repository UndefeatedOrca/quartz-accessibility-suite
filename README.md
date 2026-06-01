# Quartz Accessibility Suite

Optional accessibility components for Quartz sites.

This package currently includes:

- `BeelineReader`: a BeeLine-style reading toggle that colors words across each line.
- `FontSwitcher`: a reader font selector for default, Comic Sans, Atkinson Hyperlegible, and OpenDyslexic.
- `AccessibilityFontAssets`: an emitter that copies bundled Atkinson Hyperlegible and OpenDyslexic font files into the built site.

## Usage

Install the plugin in a Quartz site. The default export is an installable Quartz plugin that
registers the combined accessibility GUI and copies the bundled font files during the build.

```yaml
plugins:
  - source: github:your-username/quartz-accessibility-suite
    enabled: true
    options:
      defaultFont: default
    layout:
      position: right
      priority: 50
```

By default, the installed component renders both the BeeLine toggle and the font switcher.

For advanced TypeScript overrides, import the combined component or individual pieces:

```ts
import AccessibilitySuite, {
  AccessibilityControls,
  AccessibilityFontAssets,
  BeelineReader,
  FontSwitcher,
} from "quartz-accessibility-suite";
```

Use `AccessibilitySuite()` where Quartz expects an installable plugin factory. Use
`AccessibilityControls()` only where Quartz expects a layout component constructor.

Add the combined controls where you want the GUI to appear:

```ts
AccessibilityControls();
```

Or add the controls separately:

```ts
BeelineReader();
FontSwitcher();
```

The optional `AccessibilityFontAssets` emitter can copy the bundled font files when used from a
TypeScript plugin override. The default component still works without it, but Atkinson Hyperlegible
and OpenDyslexic need the font files available at `/accessibility-fonts/` to render as web fonts.

The font switcher stores the selected font in `localStorage` under
`quartz-accessibility-suite:accessibility-font` and applies it to `body`, form fields, and buttons.
The BeeLine toggle stores its state under `quartz-accessibility-suite:beeline-reader`. BeeLine starts
off for a clean browser profile.

## Font Assets

Atkinson Hyperlegible and OpenDyslexic are included in the repository `fonts/` directory. The
`AccessibilityFontAssets` emitter copies them to `/accessibility-fonts/` in the Quartz output, which
matches the URLs used by `FontSwitcher`.

If you change the emitter output directory, update `src/components/styles/fontSwitcher.scss` to match
before rebuilding.

Comic Sans is configured through local system font names:

```css
"Comic Sans MS", "Comic Sans", "Comic Neue", cursive, sans-serif
```

This repository does not include Comic Sans font files. If your deployment needs a web font fallback,
place the files in your Quartz static assets and add a matching `@font-face` rule to
`src/components/styles/fontSwitcher.scss`.

## API

### `BeelineReader(options)`

| Option      | Type     | Default     | Description                            |
| ----------- | -------- | ----------- | -------------------------------------- |
| `className` | `string` | `undefined` | Extra CSS class applied to the button. |

### `FontSwitcher(options)`

| Option        | Type                                                                     | Default     | Description                                   |
| ------------- | ------------------------------------------------------------------------ | ----------- | --------------------------------------------- |
| `className`   | `string`                                                                 | `undefined` | Extra CSS class applied to the wrapper.       |
| `defaultFont` | `"default" \| "comic-sans" \| "atkinson-hyperlegible" \| "opendyslexic"` | `"default"` | Initial font when no saved preference exists. |

### `AccessibilityFontAssets(options)`

| Option            | Type     | Default                 | Description                             |
| ----------------- | -------- | ----------------------- | --------------------------------------- |
| `outputDirectory` | `string` | `"accessibility-fonts"` | Directory under the Quartz output root. |

## Development

```bash
npm install
npm test
npm run build
```

`dist/` is committed for pre-built distribution and should be regenerated after source changes.
