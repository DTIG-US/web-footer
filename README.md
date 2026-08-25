# web-footer — Page Footer Component

This submodule contains the `FooterComponent` for the **IH Hand Sanitation** portal. It renders the site footer including navigation links, copyright notice, and social links.

- [CHANGELOG](CHANGELOG.md)
- [CLIFF NOTES](CLIFF_NOTES.md)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Data Structure](#data-structure)
- [Dependencies](#dependencies)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The `FooterComponent` renders a multi-column Bootstrap footer fixed to the bottom of the page. It is styled with a solid dark navy background (`#0a0f2c`) to provide a clean structural closing to the page layout.

Files in this submodule:

| File | Purpose |
| --- | --- |
| `footer.component.ts` | Component class — loads `data.json` and exposes `footerData` |
| `footer.component.html` | Template — Bootstrap multi-column footer grid |
| `footer.component.css` | Component-scoped styles (dark navy background, typography, link styles) |
| `footer.component.spec.ts` | Unit tests (Karma + Jasmine) |

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/DTIG-US/web-footer.git
   cd web-footer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

> [!NOTE]
> In normal use, this component is consumed as a Git submodule of `ih-hand-sanitation-www`. See the [parent README](https://github.com/DTIG-US/ih-hand-sanitation-www) for the full setup workflow.

---

## Usage

Add the selector to your root application template (`app.html`):

```html
<app-footer></app-footer>
```

Import the component in your root `App` component (Angular v20+ standalone — no NgModule required):

```typescript
import { Component } from '@angular/core';
import { FooterComponent } from './web-footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent],
  templateUrl: './app.html',
})
export class App {}
```

---

## Data Structure

The component reads `../../data.json`. The expected structure for the footer section:

```json
{
  "footer": {
    "copyright": "© 2024 Insightful Health. All rights reserved.",
    "sections": [
      {
        "heading": "Company",
        "links": [
          { "label": "Home", "url": "/" },
          { "label": "About", "url": "/about" }
        ]
      }
    ],
    "social": [
      { "platform": "LinkedIn", "url": "https://linkedin.com/company/example" }
    ]
  }
}
```

---

## Dependencies

| Package | Purpose |
| --- | --- |
| `bootstrap` | Multi-column grid, utility classes, and footer layout |
| `@angular/common` | Structural directives (control flow via `@for`, `@if`) |

---

## Accessibility

- Footer landmark uses a semantic `<footer>` element, readable by screen readers without additional ARIA roles.
- All navigation links must have descriptive labels — avoid bare `#` hrefs in production.
- Ensure sufficient color contrast between link text and the dark navy background per WCAG AA (minimum 4.5:1 ratio).

---

## Contributing

1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Description of changes"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Submit a pull request to `DTIG-US/web-footer`.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
