import { describe, it } from 'node:test';
import assert from 'node:assert';
import contentTypes, {
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
} from '../dist/index.js';

describe('Content Type Constants', () => {
    describe('Text-Based Content Types', () => {
        it('should export PLAIN_TEXT constant', () => {
            assert.strictEqual(PLAIN_TEXT, 'text/plain');
        });

        it('should export HTML constant', () => {
            assert.strictEqual(HTML, 'text/html');
        });

        it('should export CSS constant', () => {
            assert.strictEqual(CSS, 'text/css');
        });

        it('should export CSV constant', () => {
            assert.strictEqual(CSV, 'text/csv');
        });

        it('should export XML constant', () => {
            assert.strictEqual(XML, 'text/xml');
        });

        it('should export MARKDOWN constant', () => {
            assert.strictEqual(MARKDOWN, 'text/markdown');
        });

        it('should export RICH_TEXT constant', () => {
            assert.strictEqual(RICH_TEXT, 'text/richtext');
        });
    });

    describe('Structured Data Formats', () => {
        it('should export JSON constant', () => {
            assert.strictEqual(JSON, 'application/json');
        });

        it('should export XML_APP constant', () => {
            assert.strictEqual(XML_APP, 'application/xml');
        });

        it('should export YAML constant', () => {
            assert.strictEqual(YAML, 'application/x-yaml');
        });

        it('should export FORM_URLENCODED constant', () => {
            assert.strictEqual(FORM_URLENCODED, 'application/x-www-form-urlencoded');
        });

        it('should export NDJSON constant', () => {
            assert.strictEqual(NDJSON, 'application/x-ndjson');
        });

        it('should export MSGPACK constant', () => {
            assert.strictEqual(MSGPACK, 'application/x-msgpack');
        });

        it('should export PROTOBUF constant', () => {
            assert.strictEqual(PROTOBUF, 'application/x-protobuf');
        });
    });

    describe('Multipart & Form Data', () => {
        it('should export MULTIPART_FORM_DATA constant', () => {
            assert.strictEqual(MULTIPART_FORM_DATA, 'multipart/form-data');
        });

        it('should export MULTIPART_MIXED constant', () => {
            assert.strictEqual(MULTIPART_MIXED, 'multipart/mixed');
        });

        it('should export MULTIPART_ALTERNATIVE constant', () => {
            assert.strictEqual(MULTIPART_ALTERNATIVE, 'multipart/alternative');
        });

        it('should export MULTIPART_DIGEST constant', () => {
            assert.strictEqual(MULTIPART_DIGEST, 'multipart/digest');
        });

        it('should export MULTIPART_RELATED constant', () => {
            assert.strictEqual(MULTIPART_RELATED, 'multipart/related');
        });

        it('should export MULTIPART_SIGNED constant', () => {
            assert.strictEqual(MULTIPART_SIGNED, 'multipart/signed');
        });

        it('should export MULTIPART_ENCRYPTED constant', () => {
            assert.strictEqual(MULTIPART_ENCRYPTED, 'multipart/encrypted');
        });
    });

    describe('Binary & File Upload Content Types', () => {
        it('should export OCTET_STREAM constant', () => {
            assert.strictEqual(OCTET_STREAM, 'application/octet-stream');
        });

        it('should export PDF constant', () => {
            assert.strictEqual(PDF, 'application/pdf');
        });

        it('should export ZIP constant', () => {
            assert.strictEqual(ZIP, 'application/zip');
        });

        it('should export GZIP constant', () => {
            assert.strictEqual(GZIP, 'application/gzip');
        });

        it('should export MSWORD constant', () => {
            assert.strictEqual(MSWORD, 'application/msword');
        });

        it('should export DOCX constant', () => {
            assert.strictEqual(
                DOCX,
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            );
        });

        it('should export EXCEL constant', () => {
            assert.strictEqual(EXCEL, 'application/vnd.ms-excel');
        });

        it('should export XLSX constant', () => {
            assert.strictEqual(
                XLSX,
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            );
        });

        it('should export POWERPOINT constant', () => {
            assert.strictEqual(POWERPOINT, 'application/vnd.ms-powerpoint');
        });

        it('should export PPTX constant', () => {
            assert.strictEqual(
                PPTX,
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            );
        });
    });

    describe('Media Content Types', () => {
        it('should export GIF constant', () => {
            assert.strictEqual(GIF, 'image/gif');
        });

        it('should export PNG constant', () => {
            assert.strictEqual(PNG, 'image/png');
        });

        it('should export JPEG constant', () => {
            assert.strictEqual(JPEG, 'image/jpeg');
        });

        it('should export WEBP constant', () => {
            assert.strictEqual(WEBP, 'image/webp');
        });

        it('should export SVG constant', () => {
            assert.strictEqual(SVG, 'image/svg+xml');
        });

        it('should export HEIF constant', () => {
            assert.strictEqual(HEIF, 'image/heif');
        });

        it('should export AVIF constant', () => {
            assert.strictEqual(AVIF, 'image/avif');
        });
    });

    describe('Streaming & Event Content Types', () => {
        it('should export EVENT_STREAM constant', () => {
            assert.strictEqual(EVENT_STREAM, 'text/event-stream');
        });

        it('should export TAR constant', () => {
            assert.strictEqual(TAR, 'application/x-tar');
        });

        it('should export BZIP2 constant', () => {
            assert.strictEqual(BZIP2, 'application/x-bzip2');
        });
    });
});

describe('Default Export Object', () => {
    it('should export all content types as frozen object', () => {
        assert.strictEqual(Object.isFrozen(contentTypes), true);
    });

    it('should contain all content type constants', () => {
        assert.strictEqual(contentTypes.PLAIN_TEXT, 'text/plain');
        assert.strictEqual(contentTypes.HTML, 'text/html');
        assert.strictEqual(contentTypes.CSS, 'text/css');
        assert.strictEqual(contentTypes.CSV, 'text/csv');
        assert.strictEqual(contentTypes.XML, 'text/xml');
        assert.strictEqual(contentTypes.MARKDOWN, 'text/markdown');
        assert.strictEqual(contentTypes.RICH_TEXT, 'text/richtext');
        assert.strictEqual(contentTypes.JSON, 'application/json');
        assert.strictEqual(contentTypes.XML_APP, 'application/xml');
        assert.strictEqual(contentTypes.YAML, 'application/x-yaml');
        assert.strictEqual(contentTypes.FORM_URLENCODED, 'application/x-www-form-urlencoded');
        assert.strictEqual(contentTypes.NDJSON, 'application/x-ndjson');
        assert.strictEqual(contentTypes.MSGPACK, 'application/x-msgpack');
        assert.strictEqual(contentTypes.PROTOBUF, 'application/x-protobuf');
        assert.strictEqual(contentTypes.MULTIPART_FORM_DATA, 'multipart/form-data');
        assert.strictEqual(contentTypes.MULTIPART_MIXED, 'multipart/mixed');
        assert.strictEqual(contentTypes.MULTIPART_ALTERNATIVE, 'multipart/alternative');
        assert.strictEqual(contentTypes.MULTIPART_DIGEST, 'multipart/digest');
        assert.strictEqual(contentTypes.MULTIPART_RELATED, 'multipart/related');
        assert.strictEqual(contentTypes.MULTIPART_SIGNED, 'multipart/signed');
        assert.strictEqual(contentTypes.MULTIPART_ENCRYPTED, 'multipart/encrypted');
        assert.strictEqual(contentTypes.OCTET_STREAM, 'application/octet-stream');
        assert.strictEqual(contentTypes.PDF, 'application/pdf');
        assert.strictEqual(contentTypes.ZIP, 'application/zip');
        assert.strictEqual(contentTypes.GZIP, 'application/gzip');
        assert.strictEqual(contentTypes.MSWORD, 'application/msword');
        assert.strictEqual(
            contentTypes.DOCX,
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        );
        assert.strictEqual(contentTypes.EXCEL, 'application/vnd.ms-excel');
        assert.strictEqual(
            contentTypes.XLSX,
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        );
        assert.strictEqual(contentTypes.POWERPOINT, 'application/vnd.ms-powerpoint');
        assert.strictEqual(
            contentTypes.PPTX,
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        );
        assert.strictEqual(contentTypes.GIF, 'image/gif');
        assert.strictEqual(contentTypes.PNG, 'image/png');
        assert.strictEqual(contentTypes.JPEG, 'image/jpeg');
        assert.strictEqual(contentTypes.WEBP, 'image/webp');
        assert.strictEqual(contentTypes.SVG, 'image/svg+xml');
        assert.strictEqual(contentTypes.HEIF, 'image/heif');
        assert.strictEqual(contentTypes.AVIF, 'image/avif');
        assert.strictEqual(contentTypes.EVENT_STREAM, 'text/event-stream');
        assert.strictEqual(contentTypes.TAR, 'application/x-tar');
        assert.strictEqual(contentTypes.BZIP2, 'application/x-bzip2');
    });

    it('should allow dynamic access to content types', () => {
        const type = 'JSON';
        assert.strictEqual(contentTypes[type], 'application/json');
    });

    it('should be immutable', () => {
        // Verify object is frozen
        assert.strictEqual(Object.isFrozen(contentTypes), true);

        // Attempting to modify should fail in strict mode
        assert.throws(() => {
            'use strict';
            contentTypes.JSON = 'text/plain';
        });
    });
});

describe('Type Safety', () => {
    it('should have correct type definitions', () => {
        // This test verifies the exports are correctly typed
        assert.strictEqual(typeof PLAIN_TEXT, 'string');
        assert.strictEqual(typeof contentTypes.JSON, 'string');
    });

    it('should allow dynamic access with valid ContentType keys', () => {
        const validType = 'PDF';
        assert.strictEqual(contentTypes[validType], 'application/pdf');
    });

    it('should return undefined for invalid keys', () => {
        const invalidType = 'INVALID_KEY';
        assert.strictEqual(contentTypes[invalidType], undefined);
    });
});
