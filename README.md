# Reavail config monorepo

Contains the base configuration packages for different tools like typescript, jest, eslint used by @reavail library.

`The configuration packages where separated from the @reavail repository since they are not implementing ui related features.`

Built with [turborepo](https://turborepo.org) and published with [lerna](https://lerna.js.org).

## Packages

| ID  | Package                                                    | Description                                                                             | Version |
| --- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------- |
| 1.  | [`@reavail/eslint-config`](packages/eslint-config)         | Base eslint configuration from which other packages `eslintrc.js` configuration extend. | 1.0.0   |
| 2.  | [`@reavail/jest-config`](packages/jest-config)             | Base jest configuration from which other `jest.config.ts` configurations extend.        | 1.0.0   |
| 3.  | [`@reavail/typescript-config`](packages/typescript-config) | Base typescript configurations from which all other `tsconfig.json` inherit from.       | 1.0.0   |
