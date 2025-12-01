# Hiren's Basic Calculator

This project is a minimal, single-page calculator that accepts input and shows results on the same UI. It is built with plain HTML, CSS, and JavaScript—no build tools required.

## Getting started
You can run the calculator directly from the files—no build tools are required.

### Option 1: Open the file directly
1. Locate `index.html` in this folder.
2. Double-click it (or drag it into your browser) to open the calculator.

### Option 2: Serve locally (recommended for consistent browser behavior)
1. From this directory, start a simple static server:
   - Python 3: `python -m http.server 8000`
   - Node.js: `npx serve .`
2. Open your browser to `http://localhost:8000` (or the port shown in the terminal).

Once loaded, use the on-screen keypad to build an expression. Operators (+, −, ×, ÷, %, parentheses) and decimals are supported. Press `=` to view the result instantly, `C` to clear, or `⌫` to delete the last character.

## Notes
- Input is sanitized to allow only calculator characters before evaluation.
- Results and expressions are displayed directly in the UI without page reloads.
