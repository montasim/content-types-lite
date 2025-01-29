# content-types-lite

<!-- repository summary badges start -->
<div>
    <img alt="NPM Version" src="https://badgen.net/npm/v/content-types-lite?label=version&labelColor=EB008B&color=00B8B5">
    <img alt="NPM Downloads" src="https://badgen.net/npm/dm/content-types-lite?label=downloads&labelColor=EB008B&color=00B8B5">
    <img alt="NPM Package" src="https://badgen.net/npm/license/content-types-lite?label=license&labelColor=EB008B&color=00B8B5">
</div>
<!-- repository summary badges end -->

The [content-types-lite](https://www.npmjs.com/package/content-types-lite) is a lightweight and structured utility providing standardized content types (MIME types) for various applications. It simplifies content type handling by offering predefined constants, ensuring consistency in file processing, API responses, and HTTP headers.

## Table of Contents

- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Supported Content Types](#supported-content-types)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [FAQs](#faqs)

---

## Key Features

1. **Predefined Content Types:** A comprehensive set of MIME types categorized for different use cases.
2. **TypeScript Support:** Strong type definitions for better development experience and safety.
3. **Immutable Constants:** Prevents modifications to ensure consistency.
4. **Lightweight & Efficient:** Optimized for performance with a minimal footprint.
5. **Seamless Integration:** Works with any Node.js or TypeScript-based project.

---

## Installation

To install the package, run the following command:

```bash
npm install content-types-lite
```

---

## Usage

### 1. Importing the Constants

```typescript
import contentTypesLite from 'content-types-lite';

console.log(contentTypesLite.JSON); // Outputs: application/json
```

### 2. TypeScript Support

```typescript
import contentTypesLite, { ContentType } from 'content-types-lite';

const fileType: ContentType = 'JSON';
console.log(contentTypesLite[fileType]); // Outputs: application/json
```

### 3. Example Usage in an Express.js Application

```typescript
import contentTypesLite from 'content-types-lite';
import express from 'express';

const app = express();

app.get('/file', (req, res) => {
    res.setHeader('Content-Type', contentTypesLite.PDF);
    res.send('This is a PDF response');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## Supported Content Types

### **Text-Based Content Types**

- `PLAIN_TEXT`: `text/plain`
- `HTML`: `text/html`
- `CSS`: `text/css`
- `CSV`: `text/csv`
- `XML`: `text/xml`
- `MARKDOWN`: `text/markdown`
- `RICH_TEXT`: `text/richtext`

### **Structured Data Formats**

- `JSON`: `application/json`
- `XML_APP`: `application/xml`
- `YAML`: `application/x-yaml`
- `FORM_URLENCODED`: `application/x-www-form-urlencoded`
- `NDJSON`: `application/x-ndjson`
- `MSGPACK`: `application/x-msgpack`
- `PROTOBUF`: `application/x-protobuf`

### **Multipart & Form Data**

- `MULTIPART_FORM_DATA`: `multipart/form-data`
- `MULTIPART_MIXED`: `multipart/mixed`
- `MULTIPART_ALTERNATIVE`: `multipart/alternative`
- `MULTIPART_DIGEST`: `multipart/digest`
- `MULTIPART_RELATED`: `multipart/related`
- `MULTIPART_SIGNED`: `multipart/signed`
- `MULTIPART_ENCRYPTED`: `multipart/encrypted`

### **Binary & File Upload Content Types**

- `OCTET_STREAM`: `application/octet-stream`
- `PDF`: `application/pdf`
- `ZIP`: `application/zip`
- `GZIP`: `application/gzip`
- `MSWORD`: `application/msword`
- `DOCX`: `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- `EXCEL`: `application/vnd.ms-excel`
- `XLSX`: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- `POWERPOINT`: `application/vnd.ms-powerpoint`
- `PPTX`: `application/vnd.openxmlformats-officedocument.presentationml.presentation`

### **Media Content Types**

- `GIF`: `image/gif`
- `PNG`: `image/png`
- `JPEG`: `image/jpeg`
- `WEBP`: `image/webp`
- `SVG`: `image/svg+xml`
- `HEIF`: `image/heif`
- `AVIF`: `image/avif`

### **Streaming & Event Content Types**

- `EVENT_STREAM`: `text/event-stream`
- `TAR`: `application/x-tar`
- `BZIP2`: `application/x-bzip2`

---

## License

This project is licensed under the `CC BY-NC-ND 4.0`.

---

## Acknowledgments

Special thanks to the following resources:

1. **MDN Web Docs** - Comprehensive MIME type references.
2. **Node.js Express Documentation** - Guidance on handling content types in HTTP responses.
3. **TypeScript Docs** - Best practices for defining and using type-safe constants.

---

## FAQs

### 1. **How do I determine the correct content type for my file?**

Content types are categorized based on their format. Documents, images, videos, and binary files each have their respective content types. Refer to the [Supported Content Types](#supported-content-types) section for details.

### 2. **Can I extend this library with custom content types?**

No, the constants are immutable and follow the official content type standards. If needed, you can create a wrapper module to include your custom content types.

### 3. **How do I uninstall the package?**

You can remove the package by running:

```bash
npm uninstall content-types-lite
```

---

## Author

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/95298623?v=4" width="100px" alt="Moon">
      <a href="https://github.com/montasim">
        <br>
          Ｍ♢ＮＴΛＳＩＭ
        </br>
      </a>
    </td>
  </tr>
</table>
