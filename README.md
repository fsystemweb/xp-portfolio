# xp-portfolio

## Code formatting (Prettier)

This project uses Prettier for consistent code formatting.

- Run the formatter across the repository:

```
npm run format
```

- Check formatting without modifying files:

```
npm run format:check
```

Prettier configuration is stored in `.prettierrc`.

## Linting (ESLint)

This project uses ESLint for linting and code quality.

- Check the repository for linting issues:

```
npm run lint
```

- Automatically fix fixable issues:

```
npm run lint:fix
```

## Install

```
npm install
```

## Start locally

```
npm run dev
```

## Testing

This project uses Vitest with Testing Library (jsdom) for unit tests.

- Run the test suite once:

```
npm test
```

- Run tests in watch mode:

```
npm run test:watch
```

Test files live alongside components under `src/components/__tests__/` and follow the pattern `*.test.tsx` and `*.spec.tsx`.

The test setup file is `src/setupTests.ts` which loads `@testing-library/jest-dom` for convenient matchers.
