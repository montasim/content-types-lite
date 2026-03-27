import contentTypesLite, { ContentType } from '../src/index';

describe('contentTypesLite', () => {
    /**
     * Ensures the content types module is defined and immutable.
     */
    it('should be defined and frozen', () => {
        expect(contentTypesLite).toBeDefined();
        expect(Object.isFrozen(contentTypesLite)).toBe(true); // Ensures the object is immutable
    });

    /**
     * Verifies correct MIME types for text-based content.
     */
    it('should return correct MIME types for text-based content', () => {
        expect(contentTypesLite.PLAIN_TEXT).toBe('text/plain');
        expect(contentTypesLite.HTML).toBe('text/html');
        expect(contentTypesLite.CSS).toBe('text/css');
        expect(contentTypesLite.CSV).toBe('text/csv');
        expect(contentTypesLite.XML).toBe('text/xml');
        expect(contentTypesLite.MARKDOWN).toBe('text/markdown');
        expect(contentTypesLite.RICH_TEXT).toBe('text/richtext');
    });

    /**
     * Verifies correct MIME types for structured data formats.
     */
    it('should return correct MIME types for structured data formats', () => {
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
     * Verifies correct MIME types for multipart & form data.
     */
    it('should return correct MIME types for multipart & form data', () => {
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
     * Verifies correct MIME types for binary & file upload content types.
     */
    it('should return correct MIME types for binary & file upload content types', () => {
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
     * Verifies correct MIME types for media content types.
     */
    it('should return correct MIME types for media content types', () => {
        expect(contentTypesLite.GIF).toBe('image/gif');
        expect(contentTypesLite.PNG).toBe('image/png');
        expect(contentTypesLite.JPEG).toBe('image/jpeg');
        expect(contentTypesLite.WEBP).toBe('image/webp');
        expect(contentTypesLite.SVG).toBe('image/svg+xml');
        expect(contentTypesLite.HEIF).toBe('image/heif');
        expect(contentTypesLite.AVIF).toBe('image/avif');
    });

    /**
     * Verifies correct MIME types for streaming & event content types.
     */
    it('should return correct MIME types for streaming & event content types', () => {
        expect(contentTypesLite.EVENT_STREAM).toBe('text/event-stream');
        expect(contentTypesLite.TAR).toBe('application/x-tar');
        expect(contentTypesLite.BZIP2).toBe('application/x-bzip2');
    });

    /**
     * Validates that only valid keys are allowed as ContentType type.
     * Ensures TypeScript type safety for valid and invalid keys.
     */
    it('should allow only valid keys as ContentType type', () => {
        const validContentType: ContentType = 'PDF';
        expect(contentTypesLite[validContentType]).toBe('application/pdf');

        // @ts-expect-error This should throw a TypeScript error during compilation
        const invalidContentType: ContentType = 'INVALID';
        // Uncomment below to test runtime behavior if needed:
        expect(contentTypesLite[invalidContentType]).toBeUndefined();
    });

    /**
     * Creates a snapshot of the entire content types object for consistency checks.
     */
    it('should match snapshot for the entire constants object', () => {
        expect(contentTypesLite).toMatchSnapshot();
    });
});
