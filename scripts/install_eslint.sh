#!/bin/bash

# ESLint and TypeScript parser
yarn add -D eslint
yarn add -D @typescript-eslint/parser # Don't include if JS project

# Configs
yarn add -D eslint-config-prettier

# Plugins
yarn add -D eslint-plugin-jest
yarn add -D eslint-plugin-react
yarn add -D eslint-plugin-react-hooks
yarn add -D @typescript-eslint/eslint-plugin # Don't include if JS project
