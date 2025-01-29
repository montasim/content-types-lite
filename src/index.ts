/**
 * @fileoverview Defines the various content types used in the application.
 * This module exports an object that contains different content types
 * the application commonly handles. These content types are used to
 * specify the nature of the content being transmitted.
 *
 * @module constants/contentTypesLite.ts
 * @version 1.2.0
 * @license CC BY-NC-ND 4.0
 *
 * @contact Mohammad Montasim -Al- Mamun Shuvo
 * @created 2025-01-29
 * @contactEmail montasimmamun@gmail.com
 * @contactGithub https://github.com/montasim
 */

/**
 * An object representing different content types.
 * @enum {string}
 */
const contentTypesLite = Object.freeze({
    /** Text-Based Content Types */

    /** Plain text format.
     * Example: `.txt` files.
     * Use Case: Simple text files without any formatting.
     */
    PLAIN_TEXT: 'text/plain' as const,

    /** HyperText Markup Language.
     * Example: `.html` files.
     * Use Case: Web pages and web applications.
     */
    HTML: 'text/html' as const,

    /** Cascading Style Sheets.
     * Example: `.css` files.
     * Use Case: Styling web pages.
     */
    CSS: 'text/css' as const,

    /** Comma-separated values format.
     * Example: `.csv` files.
     * Use Case: Data exchange between applications, especially spreadsheets.
     */
    CSV: 'text/csv' as const,

    /** Extensible Markup Language.
     * Example: `.xml` files.
     * Use Case: Data representation and transfer.
     */
    XML: 'text/xml' as const,

    /** Markdown text format.
     * Example: `.md` files.
     * Use Case: Writing formatted text using a plain text editor.
     */
    MARKDOWN: 'text/markdown' as const,

    /** Rich Text Format.
     * Example: `.rtf` files.
     * Use Case: Text documents with simple formatting.
     */
    RICH_TEXT: 'text/richtext' as const,

    /** Structured Data Formats */

    /** JSON format.
     * Example: `.json` files.
     * Use Case: Data interchange between web applications and servers.
     */
    JSON: 'application/json' as const,

    /** XML format for application data.
     * Example: `.xml` API responses.
     * Use Case: Data interchange in web services.
     */
    XML_APP: 'application/xml' as const,

    /** YAML Ain't Markup Language.
     * Example: `.yaml` files.
     * Use Case: Configuration files and data serialization.
     */
    YAML: 'application/x-yaml' as const,

    /** URL-encoded form data.
     * Example: query strings in `application/x-www-form-urlencoded`.
     * Use Case: Form submissions in web applications.
     */
    FORM_URLENCODED: 'application/x-www-form-urlencoded' as const,

    /** Newline-delimited JSON, used in streaming APIs.
     * Example: `.ndjson` for batch API requests.
     * Use Case: Streaming large datasets.
     */
    NDJSON: 'application/x-ndjson' as const,

    /** MessagePack format, used for efficient binary serialization.
     * Example: `.msgpack` files.
     * Use Case: Efficient data interchange.
     */
    MSGPACK: 'application/x-msgpack' as const,

    /** Protocol Buffers, used in Google's data interchange format.
     * Example: `.proto` files.
     * Use Case: Efficient data serialization.
     */
    PROTOBUF: 'application/x-protobuf' as const,

    /** Multipart & Form Data */

    /** Multipart form data.
     * Used in file uploads.
     * Use Case: Uploading files via web forms.
     */
    MULTIPART_FORM_DATA: 'multipart/form-data' as const,

    /** Multipart mixed content.
     * Used to combine different content types in emails and APIs.
     * Use Case: Sending emails with attachments.
     */
    MULTIPART_MIXED: 'multipart/mixed' as const,

    /** Alternative representations of the same content.
     * Example: multipart emails.
     * Use Case: Sending emails with different content types.
     */
    MULTIPART_ALTERNATIVE: 'multipart/alternative' as const,

    /** Digest-multipart format.
     * Used for secure email digests.
     * Use Case: Sending secure email digests.
     */
    MULTIPART_DIGEST: 'multipart/digest' as const,

    /** Related multipart format.
     * Used in web services and APIs.
     * Use Case: Sending related content in web services.
     */
    MULTIPART_RELATED: 'multipart/related' as const,

    /** Signed multipart data.
     * Used in digital signatures.
     * Use Case: Sending digitally signed content.
     */
    MULTIPART_SIGNED: 'multipart/signed' as const,

    /** Encrypted multipart data.
     * Used for secure messaging.
     * Use Case: Sending encrypted content.
     */
    MULTIPART_ENCRYPTED: 'multipart/encrypted' as const,

    /** Binary & File Upload Content Types */

    /** Generic binary data.
     * Used for raw file uploads.
     * Use Case: Uploading binary files.
     */
    OCTET_STREAM: 'application/octet-stream' as const,

    /** Portable Document Format.
     * Example: `.pdf` files.
     * Use Case: Document exchange.
     */
    PDF: 'application/pdf' as const,

    /** ZIP compressed file.
     * Example: `.zip` files.
     * Use Case: Compressing multiple files.
     */
    ZIP: 'application/zip' as const,

    /** Gzip compressed file.
     * Example: `.gz` files.
     * Use Case: Compressing single files.
     */
    GZIP: 'application/gzip' as const,

    /** Microsoft Word document.
     * Example: `.doc` files.
     * Use Case: Word processing documents.
     */
    MSWORD: 'application/msword' as const,

    /** Microsoft Word (XML format).
     * Example: `.docx` files.
     * Use Case: Word processing documents.
     */
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' as const,

    /** Microsoft Excel spreadsheet.
     * Example: `.xls` files.
     * Use Case: Spreadsheet documents.
     */
    EXCEL: 'application/vnd.ms-excel' as const,

    /** Microsoft Excel (XML format).
     * Example: `.xlsx` files.
     * Use Case: Spreadsheet documents.
     */
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' as const,

    /** Microsoft PowerPoint presentation.
     * Example: `.ppt` files.
     * Use Case: Presentation documents.
     */
    POWERPOINT: 'application/vnd.ms-powerpoint' as const,

    /** Microsoft PowerPoint (XML format).
     * Example: `.pptx` files.
     * Use Case: Presentation documents.
     */
    PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' as const,

    /** Media Content Types */

    /** GIF image format.
     * Example: `.gif` files.
     * Use Case: Animated images.
     */
    GIF: 'image/gif' as const,

    /** PNG image format.
     * Example: `.png` files.
     * Use Case: Lossless image compression.
     */
    PNG: 'image/png' as const,

    /** JPEG image format.
     * Example: `.jpg`, `.jpeg` files.
     * Use Case: Lossy image compression.
     */
    JPEG: 'image/jpeg' as const,

    /** WebP image format.
     * Example: `.webp` files.
     * Use Case: Modern image format with both lossy and lossless compression.
     */
    WEBP: 'image/webp' as const,

    /** Scalable Vector Graphics.
     * Example: `.svg` files.
     * Use Case: Vector images.
     */
    SVG: 'image/svg+xml' as const,

    /** High-Efficiency Image Format.
     * Example: `.heif` files.
     * Use Case: High-efficiency image compression.
     */
    HEIF: 'image/heif' as const,

    /** AVIF image format.
     * Example: `.avif` files.
     * Use Case: High-efficiency image compression.
     */
    AVIF: 'image/avif' as const,

    /** Streaming & Event Content Types */

    /** Server-Sent Events streaming format.
     * Example: `.sse` events.
     * Use Case: Real-time data streaming.
     */
    EVENT_STREAM: 'text/event-stream' as const,

    /** TAR archive format.
     * Example: `.tar` files.
     * Use Case: Archiving multiple files.
     */
    TAR: 'application/x-tar' as const,

    /** Bzip2 compressed file.
     * Example: `.bz2` files.
     * Use Case: Compressing single files.
     */
    BZIP2: 'application/x-bzip2' as const,
});

/**
 * Type definition for available content types.
 */
export type ContentType = keyof typeof contentTypesLite;

export default contentTypesLite;
