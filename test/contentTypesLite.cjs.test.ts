import { ContentType } from '../src';

/**
 * @fileoverview Unit tests for the contentTypesLite module.
 * These tests ensure that all content types are correctly defined, immutable, and return expected values.
 * It also validates the TypeScript types and checks that invalid keys are not allowed.
 *
 * @module test/contentTypesLite.test
 * @version 1.1.0
 * @license CC BY-NC-ND 4.0
 *
 * @contact Mohammad Montasim -Al- Mamun Shuvo
 * @created 2025-01-29
 * @contactEmail montasimmamun@gmail.com
 * @contactGithub https://github.com/montasim
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const contentTypesLite = require('../src/index.cjs');

describe('contentTypesLite', () => {
    /**
     * Test to ensure the contentTypesLite object is defined and frozen.
     */
    it('should be defined and frozen', () => {
        expect(contentTypesLite).toBeDefined();
        expect(Object.isFrozen(contentTypesLite)).toBe(true);
    });

    /**
     * Test to ensure correct content types for text-based formats.
     */
    it('should return correct content types for text-based formats', () => {
        expect(contentTypesLite.PLAIN_TEXT).toBe('text/plain');
        expect(contentTypesLite.HTML).toBe('text/html');
        expect(contentTypesLite.CSS).toBe('text/css');
        expect(contentTypesLite.CSV).toBe('text/csv');
        expect(contentTypesLite.XML).toBe('text/xml');
        expect(contentTypesLite.MARKDOWN).toBe('text/markdown');
        expect(contentTypesLite.RICH_TEXT).toBe('text/richtext');
        expect(contentTypesLite.EVENT_STREAM).toBe('text/event-stream');
    });

    /**
     * Test to ensure correct content types for structured data formats.
     */
    it('should return correct content types for structured data formats', () => {
        expect(contentTypesLite.JSON).toBe('application/json');
        expect(contentTypesLite.XML_APP).toBe('application/xml');
        expect(contentTypesLite.YAML).toBe('application/x-yaml');
        expect(contentTypesLite.FORM_URLENCODED).toBe(
            'application/x-www-form-urlencoded'
        );
        expect(contentTypesLite.NDJSON).toBe('application/x-ndjson');
        expect(contentTypesLite.MSGPACK).toBe('application/x-msgpack');
        expect(contentTypesLite.PROTOBUF).toBe('application/x-protobuf');
    });

    /**
     * Test to ensure correct content types for multipart and form data.
     */
    it('should return correct content types for multipart and form data', () => {
        expect(contentTypesLite.MULTIPART_FORM_DATA).toBe(
            'multipart/form-data'
        );
        expect(contentTypesLite.MULTIPART_MIXED).toBe('multipart/mixed');
        expect(contentTypesLite.MULTIPART_ALTERNATIVE).toBe(
            'multipart/alternative'
        );
        expect(contentTypesLite.MULTIPART_DIGEST).toBe('multipart/digest');
        expect(contentTypesLite.MULTIPART_RELATED).toBe('multipart/related');
        expect(contentTypesLite.MULTIPART_SIGNED).toBe('multipart/signed');
        expect(contentTypesLite.MULTIPART_ENCRYPTED).toBe(
            'multipart/encrypted'
        );
    });

    /**
     * Test to ensure correct content types for binary and file upload formats.
     */
    it('should return correct content types for binary and file upload formats', () => {
        expect(contentTypesLite.OCTET_STREAM).toBe('application/octet-stream');
        expect(contentTypesLite.PDF).toBe('application/pdf');
        expect(contentTypesLite.ZIP).toBe('application/zip');
        expect(contentTypesLite.GZIP).toBe('application/gzip');
        expect(contentTypesLite.MSWORD).toBe('application/msword');
        expect(contentTypesLite.DOCX).toBe(
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
        expect(contentTypesLite.EXCEL).toBe('application/vnd.ms-excel');
        expect(contentTypesLite.XLSX).toBe(
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        expect(contentTypesLite.POWERPOINT).toBe(
            'application/vnd.ms-powerpoint'
        );
        expect(contentTypesLite.PPTX).toBe(
            'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        );
    });

    /**
     * Test to ensure correct content types for media formats.
     */
    it('should return correct content types for media formats', () => {
        expect(contentTypesLite.GIF).toBe('image/gif');
        expect(contentTypesLite.PNG).toBe('image/png');
        expect(contentTypesLite.JPEG).toBe('image/jpeg');
        expect(contentTypesLite.WEBP).toBe('image/webp');
        expect(contentTypesLite.SVG).toBe('image/svg+xml');
        expect(contentTypesLite.HEIF).toBe('image/heif');
        expect(contentTypesLite.AVIF).toBe('image/avif');
    });

    /**
     * Test to ensure correct content types for streaming and event formats.
     */
    it('should return correct content types for streaming and event formats', () => {
        expect(contentTypesLite.TAR).toBe('application/x-tar');
        expect(contentTypesLite.BZIP2).toBe('application/x-bzip2');
    });

    /**
     * Test to ensure only valid keys are allowed as ContentType type.
     */
    it('should allow only valid keys as ContentType type', () => {
        const validContentType: ContentType = 'JSON';
        expect(contentTypesLite[validContentType]).toBe('application/json');

        // @ts-expect-error This should throw a TypeScript error during compilation
        const invalidContentType: ContentType = 'INVALID';
        // Uncomment below to test runtime behavior if needed:
        expect(contentTypesLite[invalidContentType]).toBeUndefined();
    });

    /**
     * Test to match snapshot for the entire constants object.
     */
    it('should match snapshot for the entire constants object', () => {
        expect(contentTypesLite).toMatchSnapshot();
    });
});
