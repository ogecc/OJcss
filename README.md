# OJcss

> A minimal pixelated black & green CSS stylesheet for semantic HTML.

OJcss styles raw HTML with a retro 8-bit / terminal aesthetic. No JavaScript, no build step, no class soup — just drop one CSS file in and every `<h1>`, `<button>`, `<input>`, `<table>`, etc. gets the look automatically.

Inspired by [fanta.css](https://github.com/jamezmca/fantacss).

## Demo

Open [`index.html`](./index.html) in a browser to see every styled element.

## Features

- Pixelated black & green theme (matrix-green on near-black)
- Auto light / dark mode via `prefers-color-scheme`
- ~30 CSS variables for easy retheming
- Hard pixel box-shadows on buttons & cards (with press-down hover/active)
- VT323 terminal font
- Custom checkboxes, radios, range sliders, select dropdowns, scrollbars
- Cards, alerts, badges, dialog, loader — common UI bits ready to use
- Retro flourishes: `.blink` cursor, `.glitch` text, `.scanlines` CRT overlay, `.pixel-border`
- Print styles, `:focus-visible` ring for keyboard accessibility
- Single file, no dependencies, no build tools

## Installation

### Download

Copy [`ojcss.css`](./ojcss.css) into your project and link it:

```html
<link rel="stylesheet" href="ojcss.css">
```

### CDN (jsDelivr)

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/ogecc/OJcss@main/ojcss.css">
```

> Replace `<your-username>` with your GitHub username after pushing the repo.

### NPM

*Coming soon.*

## Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="ojcss.css">
</head>
<body>
  <h1>Hello, World</h1>
  <p>That's it &mdash; OJcss styles every semantic element by default.</p>
  <button>Press start</button>
</body>
</html>
```

## Customization

Override any variable on `:root` to retheme. Example — amber monochrome instead of green:

```css
:root {
  --text-primary: #ffb000;
  --accent:       #ffe066;
  --border:       #ffb000;
  --link:         #ffd060;
  --link-hover:   #ffe066;
  --shadow-color: #663d00;
  --selection-bg: #ffb000;
  --success:      #ffb000;
}
```

Drop that block *after* the OJcss `<link>` tag and you've got a different retro look.

### Available variables

**Colors:** `--bg-primary`, `--bg-secondary`, `--bg-muted`, `--text-primary`, `--text-muted`, `--text-inverse`, `--accent`, `--border`, `--link`, `--link-hover`, `--shadow-color`, `--selection-bg`, `--selection-fg`, `--success`, `--warning`, `--error`

**Typography & layout:** `--font-body`, `--font-size-base`, `--line-height`, `--padding-small`, `--padding-large`, `--border-width`, `--shadow-offset`, `--radius`

## Custom classes

| Class | What it does |
|---|---|
| `.text-gradient` | Gradient text fill (primary → accent) |
| `.link-button` | Style an `<a>` like a button |
| `.card` | Bordered + shadowed block |
| `.card-button` | Card with hover-lift, makes the whole card clickable |
| `.card-button-primary` | Filled-bg variant |
| `.card-button-secondary` | Outlined variant |
| `.alert` | Message banner with thick left border |
| `.alert-success` / `.alert-warning` / `.alert-error` / `.alert-info` | Color variants |
| `.badge` | Inline pill/tag for status, counts, labels |
| `.badge-success` / `.badge-warning` / `.badge-error` / `.badge-outline` | Color variants |
| `.loader` | Step-rotating spinner (inline element) |
| `.blink` | DOS-prompt blinking cursor animation |
| `.scanlines` | Adds a CRT scanline overlay (apply to a positioned parent) |
| `.glitch` | Animated glitch text — requires `data-text` attribute mirroring the inner text |
| `.pixel-border` | Decorative chunky pixel border (stacked box-shadows) |
| `.container` | Optional max-width 70ch wrapper |

Also styled out-of-the-box: `<dialog>`, `<time>`, `<cite>`, `<q>`, `<dfn>`, custom scrollbars, `:focus-visible` ring, and basic print styles.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Edge, Safari). Uses CSS custom properties, `prefers-color-scheme`, `clip-path`, and `appearance: none`.

## License

[MIT](./LICENSE)

## Contributing

Issues and PRs welcome.
