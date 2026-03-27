# content-types-lite

> A lightweight, immutable collection of common MIME types for TypeScript and JavaScript applications

[![npm version](https://badge.fury.io/js/content-types-lite.svg)](https://www.npmjs.com/package/content-types-lite)
[![License: CC-BY-NC-ND-4.0](https://img.shields.io/badge/License-CC--BY--NC--ND--4.0-blue.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Demo](https://img.shields.io/badge/Demo-Live-green.svg)](https://content-types-lite-demo.netlify.app/)

## Features

- 📦 **Zero dependencies**: Lightweight and fast
- 🔒 **Type-safe**: Full TypeScript support with union types
- 🧪 **Well-tested**: Comprehensive test coverage with Node.js test runner
- 📝 **Well-documented**: Full JSDoc comments with examples
- 🌲 **Tree-shakeable**: Import only what you need
- 🔄 **Dual ESM/CJS**: Works in Node.js and modern browsers
- ❄️ **Immutable**: All constants are frozen to prevent modification
- 📋 **Categorized**: Content types organized by category

## Installation

```bash
# npm
npm install content-types-lite

# yarn
yarn add content-types-lite

# pnpm
pnpm add content-types-lite

# bun
bun add content-types-lite
```

## Quick Start

```typescript
import contentTypes, { ContentType } from 'content-types-lite';

// Named imports (tree-shakeable)
import { JSON, HTML, PDF } from 'content-types-lite';

// Default export
console.log(contentTypes.JSON); // 'application/json'

// Type-safe access
const type: ContentType = 'JSON';
console.log(contentTypes[type]); // 'application/json'

// Direct import
import { PLAIN_TEXT } from 'content-types-lite';
console.log(PLAIN_TEXT); // 'text/plain'
```

### CommonJS

```javascript
const contentTypes = require('content-types-lite');

console.log(contentTypes.JSON); // 'application/json'
```

## API Reference

### Text-Based Content Types

| Constant     | MIME Type       | Description                |
| ------------ | --------------- | -------------------------- |
| `PLAIN_TEXT` | `text/plain`    | Plain text format          |
| `HTML`       | `text/html`     | HyperText Markup Language  |
| `CSS`        | `text/css`      | Cascading Style Sheets     |
| `CSV`        | `text/csv`      | Comma-separated values     |
| `XML`        | `text/xml`      | Extensible Markup Language |
| `MARKDOWN`   | `text/markdown` | Markdown text format       |
| `RICH_TEXT`  | `text/richtext` | Rich Text Format           |

### Structured Data Formats

| Constant          | MIME Type                           | Description              |
| ----------------- | ----------------------------------- | ------------------------ |
| `JSON`            | `application/json`                  | JSON format              |
| `XML_APP`         | `application/xml`                   | XML for application data |
| `YAML`            | `application/x-yaml`                | YAML format              |
| `FORM_URLENCODED` | `application/x-www-form-urlencoded` | URL-encoded form data    |
| `NDJSON`          | `application/x-ndjson`              | Newline-delimited JSON   |
| `MSGPACK`         | `application/x-msgpack`             | MessagePack format       |
| `PROTOBUF`        | `application/x-protobuf`            | Protocol Buffers         |

### Multipart & Form Data

| Constant                | MIME Type               | Description                 |
| ----------------------- | ----------------------- | --------------------------- |
| `MULTIPART_FORM_DATA`   | `multipart/form-data`   | Multipart form data         |
| `MULTIPART_MIXED`       | `multipart/mixed`       | Multipart mixed content     |
| `MULTIPART_ALTERNATIVE` | `multipart/alternative` | Alternative representations |
| `MULTIPART_DIGEST`      | `multipart/digest`      | Digest-multipart format     |
| `MULTIPART_RELATED`     | `multipart/related`     | Related multipart format    |
| `MULTIPART_SIGNED`      | `multipart/signed`      | Signed multipart data       |
| `MULTIPART_ENCRYPTED`   | `multipart/encrypted`   | Encrypted multipart data    |

### Binary & File Upload Content Types

| Constant       | MIME Type                                                                   | Description                       |
| -------------- | --------------------------------------------------------------------------- | --------------------------------- |
| `OCTET_STREAM` | `application/octet-stream`                                                  | Generic binary data               |
| `PDF`          | `application/pdf`                                                           | Portable Document Format          |
| `ZIP`          | `application/zip`                                                           | ZIP compressed file               |
| `GZIP`         | `application/gzip`                                                          | Gzip compressed file              |
| `MSWORD`       | `application/msword`                                                        | Microsoft Word document           |
| `DOCX`         | `application/vnd.openxmlformats-officedocument.wordprocessingml.document`   | Microsoft Word (XML)              |
| `EXCEL`        | `application/vnd.ms-excel`                                                  | Microsoft Excel spreadsheet       |
| `XLSX`         | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`         | Microsoft Excel (XML)             |
| `POWERPOINT`   | `application/vnd.ms-powerpoint`                                             | Microsoft PowerPoint presentation |
| `PPTX`         | `application/vnd.openxmlformats-officedocument.presentationml.presentation` | Microsoft PowerPoint (XML)        |

### Media Content Types

| Constant | MIME Type       | Description                  |
| -------- | --------------- | ---------------------------- |
| `GIF`    | `image/gif`     | GIF image format             |
| `PNG`    | `image/png`     | PNG image format             |
| `JPEG`   | `image/jpeg`    | JPEG image format            |
| `WEBP`   | `image/webp`    | WebP image format            |
| `SVG`    | `image/svg+xml` | Scalable Vector Graphics     |
| `HEIF`   | `image/heif`    | High-Efficiency Image Format |
| `AVIF`   | `image/avif`    | AVIF image format            |

### Streaming & Event Content Types

| Constant       | MIME Type             | Description           |
| -------------- | --------------------- | --------------------- |
| `EVENT_STREAM` | `text/event-stream`   | Server-Sent Events    |
| `TAR`          | `application/x-tar`   | TAR archive format    |
| `BZIP2`        | `application/x-bzip2` | Bzip2 compressed file |

## TypeScript Support

The package exports a `ContentType` union type for type-safe access:

```typescript
import type { ContentType } from 'content-types-lite';
import contentTypes from 'content-types-lite';

function getMimeType(type: ContentType): string {
    return contentTypes[type];
}

const json = getMimeType('JSON'); // 'application/json'
const html = getMimeType('HTML'); // 'text/html'

// Type error: Argument of type '"INVALID"' is not assignable to parameter of type 'ContentType'
const invalid = getMimeType('INVALID');
```

## Immutability

All exported constants and the default export object are frozen using `Object.freeze()` to prevent accidental modifications:

```typescript
import contentTypes from 'content-types-lite';

// This will throw an error in strict mode
contentTypes.JSON = 'text/plain'; // TypeError: Cannot assign to read only property
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format:fix
```

### Scripts

- `npm run build` - Build the package
- `npm run dev` - Build in watch mode
- `npm test` - Run tests
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Check code formatting with Prettier
- `npm run format:fix` - Fix code formatting with Prettier

## License

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (CC-BY-NC-ND-4.0).

See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Support

- **Issues**: [GitHub Issues](https://github.com/montasim/content-types-lite/issues)
- **Documentation**: [GitHub Repository](https://github.com/montasim/content-types-lite)

## Author

**Mohammad Montasim -Al- Mamun Shuvo**

- Portfolio: [https://montasim-dev.web.app/](https://montasim-dev.web.app/)
- LinkedIn: [https://www.linkedin.com/in/montasim](https://www.linkedin.com/in/montasim)
- GitHub: [https://github.com/montasim](https://github.com/montasim)

## Acknowledgments

This package was inspired by the need for a lightweight, type-safe way to work with MIME types in TypeScript and JavaScript applications.
