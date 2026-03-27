# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please send an email to the package maintainer.

Please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if known)

We will respond within 48 hours and provide regular updates on our progress.

## Security Best Practices

This package is a utility library with no network or file system access. It provides immutable MIME type constants and does not execute dynamic code. However, we recommend:

- Keep dependencies updated
- Use `npm audit` to check for vulnerabilities
- Review the code before using in production-critical applications

## Security-Related Issues

For security vulnerabilities, please **DO NOT** open a public issue. Instead, send an email directly to the maintainer.

For non-sensitive security questions or concerns, feel free to open an issue.
