# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2026-03-27

### Added

- Initial release of content-types-lite v2.0.0
- Complete rewrite using modern TypeScript template
- 39+ MIME type constants organized by category:
    - **Text-Based (7)**: PLAIN_TEXT, HTML, CSS, CSV, XML, MARKDOWN, RICH_TEXT
    - **Structured Data (7)**: JSON, XML_APP, YAML, FORM_URLENCODED, NDJSON, MSGPACK, PROTOBUF
    - **Multipart & Form Data (7)**: MULTIPART_FORM_DATA, MULTIPART_MIXED, MULTIPART_ALTERNATIVE, MULTIPART_DIGEST, MULTIPART_RELATED, MULTIPART_SIGNED, MULTIPART_ENCRYPTED
    - **Binary & File Upload (10)**: OCTET_STREAM, PDF, ZIP, GZIP, MSWORD, DOCX, EXCEL, XLSX, POWERPOINT, PPTX
    - **Media (7)**: GIF, PNG, JPEG, WEBP, SVG, HEIF, AVIF
    - **Streaming & Events (3)**: EVENT_STREAM, TAR, BZIP2
- Named exports for individual constants (tree-shakeable)
- Default export as frozen immutable object
- TypeScript union type `ContentType` for type-safe access
- Comprehensive JSDoc documentation with usage examples
- Zero runtime dependencies
- Dual ESM/CJS builds with tsup
- Full TypeScript type definitions
- Modern test suite using Node.js built-in test runner
- CI/CD pipeline with GitHub Actions
- ESLint + Prettier configuration
- Git hooks with Husky and lint-staged
- Conventional commit enforcement

### Changed

- **BREAKING**: Migrated from Jest to Node.js built-in test runner
- **BREAKING**: Updated build tooling to use tsup
- **BREAKING**: Improved type safety with explicit union types (instead of `keyof typeof`)
- Enhanced documentation with usage examples and API reference tables
- Reorganized constants by category for better discoverability

### Fixed

- N/A (initial release)

### Documentation

- Complete README with installation, usage examples, and API reference
- Contributing guidelines
- Security policy
- Industry-standard tooling documentation

[Unreleased]: https://github.com/montasim/content-types-lite/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/montasim/content-types-lite/releases/tag/v2.0.0
