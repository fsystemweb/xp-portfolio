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

Prettier configuration is stored in `.prettierrc`. Recommended editor settings:

- Enable "Format on Save".
- Use the workspace Prettier installation (do not use a globally installed Prettier).

If you use ESLint with an editor integration, make sure `eslint-config-prettier` is installed and configured so ESLint won't conflict with Prettier.
