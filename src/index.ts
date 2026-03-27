/**
 * Content type constants organized by category
 * @description Provides immutable MIME type constants for common file formats and data types
 */

/** Text-Based Content Types */

/** Plain text format
 * @example
 * ```typescript
 * import { PLAIN_TEXT } from 'content-types-lite';
 * console.log(PLAIN_TEXT); // 'text/plain'
 * ```
 */
export const PLAIN_TEXT = 'text/plain' as const;

/** HyperText Markup Language
 * @example
 * ```typescript
 * import { HTML } from 'content-types-lite';
 * console.log(HTML); // 'text/html'
 * ```
 */
export const HTML = 'text/html' as const;

/** Cascading Style Sheets
 * @example
 * ```typescript
 * import { CSS } from 'content-types-lite';
 * console.log(CSS); // 'text/css'
 * ```
 */
export const CSS = 'text/css' as const;

/** Comma-separated values format
 * @example
 * ```typescript
 * import { CSV } from 'content-types-lite';
 * console.log(CSV); // 'text/csv'
 * ```
 */
export const CSV = 'text/csv' as const;

/** Extensible Markup Language
 * @example
 * ```typescript
 * import { XML } from 'content-types-lite';
 * console.log(XML); // 'text/xml'
 * ```
 */
export const XML = 'text/xml' as const;

/** Markdown text format
 * @example
 * ```typescript
 * import { MARKDOWN } from 'content-types-lite';
 * console.log(MARKDOWN); // 'text/markdown'
 * ```
 */
export const MARKDOWN = 'text/markdown' as const;

/** Rich Text Format
 * @example
 * ```typescript
 * import { RICH_TEXT } from 'content-types-lite';
 * console.log(RICH_TEXT); // 'text/richtext'
 * ```
 */
export const RICH_TEXT = 'text/richtext' as const;

/** Structured Data Formats */

/** JSON format
 * @example
 * ```typescript
 * import { JSON } from 'content-types-lite';
 * console.log(JSON); // 'application/json'
 * ```
 */
export const JSON = 'application/json' as const;

/** XML format for application data
 * @example
 * ```typescript
 * import { XML_APP } from 'content-types-lite';
 * console.log(XML_APP); // 'application/xml'
 * ```
 */
export const XML_APP = 'application/xml' as const;

/** YAML Ain't Markup Language
 * @example
 * ```typescript
 * import { YAML } from 'content-types-lite';
 * console.log(YAML); // 'application/x-yaml'
 * ```
 */
export const YAML = 'application/x-yaml' as const;

/** URL-encoded form data
 * @example
 * ```typescript
 * import { FORM_URLENCODED } from 'content-types-lite';
 * console.log(FORM_URLENCODED); // 'application/x-www-form-urlencoded'
 * ```
 */
export const FORM_URLENCODED = 'application/x-www-form-urlencoded' as const;

/** Newline-delimited JSON
 * @example
 * ```typescript
 * import { NDJSON } from 'content-types-lite';
 * console.log(NDJSON); // 'application/x-ndjson'
 * ```
 */
export const NDJSON = 'application/x-ndjson' as const;

/** MessagePack format
 * @example
 * ```typescript
 * import { MSGPACK } from 'content-types-lite';
 * console.log(MSGPACK); // 'application/x-msgpack'
 * ```
 */
export const MSGPACK = 'application/x-msgpack' as const;

/** Protocol Buffers
 * @example
 * ```typescript
 * import { PROTOBUF } from 'content-types-lite';
 * console.log(PROTOBUF); // 'application/x-protobuf'
 * ```
 */
export const PROTOBUF = 'application/x-protobuf' as const;

/** Multipart & Form Data */

/** Multipart form data
 * @example
 * ```typescript
 * import { MULTIPART_FORM_DATA } from 'content-types-lite';
 * console.log(MULTIPART_FORM_DATA); // 'multipart/form-data'
 * ```
 */
export const MULTIPART_FORM_DATA = 'multipart/form-data' as const;

/** Multipart mixed content
 * @example
 * ```typescript
 * import { MULTIPART_MIXED } from 'content-types-lite';
 * console.log(MULTIPART_MIXED); // 'multipart/mixed'
 * ```
 */
export const MULTIPART_MIXED = 'multipart/mixed' as const;

/** Alternative representations
 * @example
 * ```typescript
 * import { MULTIPART_ALTERNATIVE } from 'content-types-lite';
 * console.log(MULTIPART_ALTERNATIVE); // 'multipart/alternative'
 * ```
 */
export const MULTIPART_ALTERNATIVE = 'multipart/alternative' as const;

/** Digest-multipart format
 * @example
 * ```typescript
 * import { MULTIPART_DIGEST } from 'content-types-lite';
 * console.log(MULTIPART_DIGEST); // 'multipart/digest'
 * ```
 */
export const MULTIPART_DIGEST = 'multipart/digest' as const;

/** Related multipart format
 * @example
 * ```typescript
 * import { MULTIPART_RELATED } from 'content-types-lite';
 * console.log(MULTIPART_RELATED); // 'multipart/related'
 * ```
 */
export const MULTIPART_RELATED = 'multipart/related' as const;

/** Signed multipart data
 * @example
 * ```typescript
 * import { MULTIPART_SIGNED } from 'content-types-lite';
 * console.log(MULTIPART_SIGNED); // 'multipart/signed'
 * ```
 */
export const MULTIPART_SIGNED = 'multipart/signed' as const;

/** Encrypted multipart data
 * @example
 * ```typescript
 * import { MULTIPART_ENCRYPTED } from 'content-types-lite';
 * console.log(MULTIPART_ENCRYPTED); // 'multipart/encrypted'
 * ```
 */
export const MULTIPART_ENCRYPTED = 'multipart/encrypted' as const;

/** Binary & File Upload Content Types */

/** Generic binary data
 * @example
 * ```typescript
 * import { OCTET_STREAM } from 'content-types-lite';
 * console.log(OCTET_STREAM); // 'application/octet-stream'
 * ```
 */
export const OCTET_STREAM = 'application/octet-stream' as const;

/** Portable Document Format
 * @example
 * ```typescript
 * import { PDF } from 'content-types-lite';
 * console.log(PDF); // 'application/pdf'
 * ```
 */
export const PDF = 'application/pdf' as const;

/** ZIP compressed file
 * @example
 * ```typescript
 * import { ZIP } from 'content-types-lite';
 * console.log(ZIP); // 'application/zip'
 * ```
 */
export const ZIP = 'application/zip' as const;

/** Gzip compressed file
 * @example
 * ```typescript
 * import { GZIP } from 'content-types-lite';
 * console.log(GZIP); // 'application/gzip'
 * ```
 */
export const GZIP = 'application/gzip' as const;

/** Microsoft Word document
 * @example
 * ```typescript
 * import { MSWORD } from 'content-types-lite';
 * console.log(MSWORD); // 'application/msword'
 * ```
 */
export const MSWORD = 'application/msword' as const;

/** Microsoft Word (XML format)
 * @example
 * ```typescript
 * import { DOCX } from 'content-types-lite';
 * console.log(DOCX); // 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
 * ```
 */
export const DOCX =
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document' as const;

/** Microsoft Excel spreadsheet
 * @example
 * ```typescript
 * import { EXCEL } from 'content-types-lite';
 * console.log(EXCEL); // 'application/vnd.ms-excel'
 * ```
 */
export const EXCEL = 'application/vnd.ms-excel' as const;

/** Microsoft Excel (XML format)
 * @example
 * ```typescript
 * import { XLSX } from 'content-types-lite';
 * console.log(XLSX); // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
 * ```
 */
export const XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' as const;

/** Microsoft PowerPoint presentation
 * @example
 * ```typescript
 * import { POWERPOINT } from 'content-types-lite';
 * console.log(POWERPOINT); // 'application/vnd.ms-powerpoint'
 * ```
 */
export const POWERPOINT = 'application/vnd.ms-powerpoint' as const;

/** Microsoft PowerPoint (XML format)
 * @example
 * ```typescript
 * import { PPTX } from 'content-types-lite';
 * console.log(PPTX); // 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
 * ```
 */
export const PPTX =
    'application/vnd.openxmlformats-officedocument.presentationml.presentation' as const;

/** Media Content Types */

/** GIF image format
 * @example
 * ```typescript
 * import { GIF } from 'content-types-lite';
 * console.log(GIF); // 'image/gif'
 * ```
 */
export const GIF = 'image/gif' as const;

/** PNG image format
 * @example
 * ```typescript
 * import { PNG } from 'content-types-lite';
 * console.log(PNG); // 'image/png'
 * ```
 */
export const PNG = 'image/png' as const;

/** JPEG image format
 * @example
 * ```typescript
 * import { JPEG } from 'content-types-lite';
 * console.log(JPEG); // 'image/jpeg'
 * ```
 */
export const JPEG = 'image/jpeg' as const;

/** WebP image format
 * @example
 * ```typescript
 * import { WEBP } from 'content-types-lite';
 * console.log(WEBP); // 'image/webp'
 * ```
 */
export const WEBP = 'image/webp' as const;

/** Scalable Vector Graphics
 * @example
 * ```typescript
 * import { SVG } from 'content-types-lite';
 * console.log(SVG); // 'image/svg+xml'
 * ```
 */
export const SVG = 'image/svg+xml' as const;

/** High-Efficiency Image Format
 * @example
 * ```typescript
 * import { HEIF } from 'content-types-lite';
 * console.log(HEIF); // 'image/heif'
 * ```
 */
export const HEIF = 'image/heif' as const;

/** AVIF image format
 * @example
 * ```typescript
 * import { AVIF } from 'content-types-lite';
 * console.log(AVIF); // 'image/avif'
 * ```
 */
export const AVIF = 'image/avif' as const;

/** Streaming & Event Content Types */

/** Server-Sent Events streaming format
 * @example
 * ```typescript
 * import { EVENT_STREAM } from 'content-types-lite';
 * console.log(EVENT_STREAM); // 'text/event-stream'
 * ```
 */
export const EVENT_STREAM = 'text/event-stream' as const;

/** TAR archive format
 * @example
 * ```typescript
 * import { TAR } from 'content-types-lite';
 * console.log(TAR); // 'application/x-tar'
 * ```
 */
export const TAR = 'application/x-tar' as const;

/** Bzip2 compressed file
 * @example
 * ```typescript
 * import { BZIP2 } from 'content-types-lite';
 * console.log(BZIP2); // 'application/x-bzip2'
 * ```
 */
export const BZIP2 = 'application/x-bzip2' as const;

/**
 * Type definition for available content type keys
 * @example
 * ```typescript
 * import type { ContentType } from 'content-types-lite';
 *
 * const type: ContentType = 'JSON';
 * ```
 */
export type ContentType =
    | 'PLAIN_TEXT'
    | 'HTML'
    | 'CSS'
    | 'CSV'
    | 'XML'
    | 'MARKDOWN'
    | 'RICH_TEXT'
    | 'JSON'
    | 'XML_APP'
    | 'YAML'
    | 'FORM_URLENCODED'
    | 'NDJSON'
    | 'MSGPACK'
    | 'PROTOBUF'
    | 'MULTIPART_FORM_DATA'
    | 'MULTIPART_MIXED'
    | 'MULTIPART_ALTERNATIVE'
    | 'MULTIPART_DIGEST'
    | 'MULTIPART_RELATED'
    | 'MULTIPART_SIGNED'
    | 'MULTIPART_ENCRYPTED'
    | 'OCTET_STREAM'
    | 'PDF'
    | 'ZIP'
    | 'GZIP'
    | 'MSWORD'
    | 'DOCX'
    | 'EXCEL'
    | 'XLSX'
    | 'POWERPOINT'
    | 'PPTX'
    | 'GIF'
    | 'PNG'
    | 'JPEG'
    | 'WEBP'
    | 'SVG'
    | 'HEIF'
    | 'AVIF'
    | 'EVENT_STREAM'
    | 'TAR'
    | 'BZIP2';

/**
 * Default export containing all content type constants
 * @description Immutable object with all MIME type constants for easy access
 *
 * @example
 * ```typescript
 * import contentTypes from 'content-types-lite';
 *
 * // Access specific content type
 * console.log(contentTypes.JSON); // 'application/json'
 *
 * // Dynamic access
 * const type = 'JSON';
 * console.log(contentTypes[type]); // 'application/json'
 *
 * // Object is frozen (immutable)
 * contentTypes.JSON = 'text/plain'; // Error in strict mode
 * ```
 */
const contentTypes = Object.freeze({
    PLAIN_TEXT,
    HTML,
    CSS,
    CSV,
    XML,
    MARKDOWN,
    RICH_TEXT,
    JSON,
    XML_APP,
    YAML,
    FORM_URLENCODED,
    NDJSON,
    MSGPACK,
    PROTOBUF,
    MULTIPART_FORM_DATA,
    MULTIPART_MIXED,
    MULTIPART_ALTERNATIVE,
    MULTIPART_DIGEST,
    MULTIPART_RELATED,
    MULTIPART_SIGNED,
    MULTIPART_ENCRYPTED,
    OCTET_STREAM,
    PDF,
    ZIP,
    GZIP,
    MSWORD,
    DOCX,
    EXCEL,
    XLSX,
    POWERPOINT,
    PPTX,
    GIF,
    PNG,
    JPEG,
    WEBP,
    SVG,
    HEIF,
    AVIF,
    EVENT_STREAM,
    TAR,
    BZIP2,
});

export default contentTypes;
