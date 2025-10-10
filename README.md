# xp-portfolio

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-000000?style=for-the-badge&logo=react&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

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
