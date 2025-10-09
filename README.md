## QR Code Project

A minimal Vite setup for generating and previewing QR codes in the browser.

### Tech stack

- **Vite** (dev server and build)
- **Vanilla JS / DOM**
- **qrcode** npm package

### Project structure

```
qr-code-project/
├─ config/
│  └─ vite.config.js
├─ src/
│  ├─ index.html
│  ├─ main.js
│  └─ style.css
├─ Design-image/        # design assets (ignored in git)
├─ .vscode/
├─ .gitignore
├─ package.json
└─ package-lock.json
```

### Prerequisites

- Node.js 18+ recommended
- npm 8+

### Setup

```bash
npm install
```

### Scripts

- **Start dev server** (with hot reload):

  ```bash
  npm run dev
  ```

- **Build for production**:

  ```bash
  npm run build
  ```

- **Preview the production build**:
  ```bash
  npm run preview
  ```

All commands use the Vite config at `config/vite.config.js`.

### Usage

1. Start the dev server: `npm run dev`.
2. Open the printed local URL (e.g., `http://localhost:5173`).
3. Use the page UI (from `src/index.html`) to enter text/URL and generate a QR code. Logic lives in `src/main.js`, with styles in `src/style.css`.

### Customization tips

- Update layout and copy in `src/index.html`.
- Adjust styles in `src/style.css`.
- Extend functionality (e.g., size, margin, error correction level) in `src/main.js` using the `qrcode` package options.

### Troubleshooting

- Port already in use: either stop the conflicting process or run `npm run dev -- --port=5174`.
- Stale cache after dependency changes: remove `node_modules` and run `npm install` again.
- Build issues on CI: ensure Node 18+ and a clean working tree.

### Notes

- The root `index.html` is intentionally not used; Vite serves from `src/index.html` in this project layout.
