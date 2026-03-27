# Contributing to content-types-lite

Thank you for your interest in contributing! We appreciate your help.

## Development Setup

1. Clone and install:

    ```bash
    git clone https://github.com/montasim/content-types-lite.git
    cd content-types-lite
    npm install
    ```

2. Create a feature branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make changes and test:

    ```bash
    npm run build    # Build the package
    npm test         # Run tests
    npm run lint     # Check code quality
    npm run format   # Check formatting
    ```

## Development Workflow

### Making Changes

1. **Write tests first** - Follow TDD principles
2. **Implement your changes** - Keep code simple and focused
3. **Add JSDoc comments** - Document public APIs with examples
4. **Update tests** - Ensure all tests pass
5. **Update documentation** - Update README if needed

### Code Style

- Use TypeScript for all code
- Follow existing formatting (Prettier)
- Add JSDoc comments for public APIs
- Keep constants organized by category
- Use descriptive constant names (SCREAMING_SNAKE_CASE)

### Commit Messages

We use [conventional commits](https://www.conventionalcommits.org/):

- `feat: add new content type`
- `fix: resolve incorrect MIME type`
- `docs: update readme`
- `test: add tests for new constants`
- `refactor: reorganize content type categories`

Use `npm run commit` for an interactive commit experience.

## Pull Requests

1. **Keep PRs focused** - One feature or fix per PR
2. **Update tests** - Ensure all tests pass
3. **Update docs** - Update README/CHANGELOG if needed
4. **Follow conventions** - Use conventional commits
5. **Be patient** - We'll review as soon as possible

### PR Checklist

- [ ] Tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Formatting passes (`npm run format`)
- [ ] Added tests for new functionality
- [ ] Updated documentation
- [ ] Updated CHANGELOG.md (if applicable)

## Project Structure

```
content-types-lite/
├── src/              # Source code
│   └── index.ts      # Content type constants
├── test/             # Test files
│   └── index.test.js # Test suite
├── dist/             # Build output (generated)
├── docs/             # Documentation (ignored in git)
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

## Adding New Content Types

Before adding new content types, please open an issue to discuss:

- The use case
- Standard MIME type reference
- Appropriate category placement

This helps ensure the new content type fits the project's goals and follows MIME type standards.

## Questions?

Feel free to open an issue with any questions!
