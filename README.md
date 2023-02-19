<p align="center">
  <a href="https://ant.design">
    <img width="100" src="https://www.hansomware.com.br/assets/icons/logo.svg">
  </a>
</p>

<h1 align="center">
	HansoMWarE Alpha Library
</h1>
<div align="center">

Easy to use, fast and lightweight library for Node.js.

<a>
	<img src="https://img.shields.io/discord/585298560262864896?color=5865F2&logo=discord&logoColor=white" alt="Discord server" />
</a>
<a>
	<img src="https://img.shields.io/github/license/hansomware-inc/alpha?style=flat" alt="MIT Licence" />
</a>
<a href="https://www.npmjs.com/package/@hansomware/alpha">
	<img src="https://img.shields.io/npm/v/@hansomware/alpha?style=flat-square" alt="NPM version" />
</a>
<a href="https://www.npmjs.com/package/@hansomware/alpha">
	<img src="https://img.shields.io/npm/dt/@hansomware/alpha?style=flat-square" alt="NPM downloads" />
</a>
</div>

> :construction: This project is under development and is not yet ready for use.

## :link: Table of Contents

- [:sparkles: Features](#sparkles-features)
- [:rocket: Tecnologies](#rocket-tecnologies)
- [:package: Install](#package-install)
- [:hammer: Usage](#hammer-usage)
- [:handshake: How to Contribute](#handshake-how-to-contribute)
- [:memo: License](#memo-license)

## :sparkles: Features

- :white_check_mark: Sleep syncronous
- :white_check_mark: JSON decycle
- :white_check_mark: Types check
- :white_check_mark: Filesystem utils
- :x: Fetch syncronous
- :x: Panda procrastinating

## :rocket: Tecnologies

The following tools were used in the construction of the project:

- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/en/)
- [SWC](https://swc.rs/)
- [TypeScript](https://www.typescriptlang.org/)

## :package: Install

> :warning: Node.js 14.6.0 or newer is required.

Use the package manager [npm](https://docs.npmjs.com/),
[yarn](https://classic.yarnpkg.com/lang/en/docs/) or
[pnpm](https://pnpm.io/pt/motivation).

```bash
npm install @hansomware/alpha
```

```bash
yarn add @hansomware/alpha
```

```bash
pnpm add @hansomware/alpha
```

## :hammer: Usage

```typescript
import { isArray } from "@hansomware/alpha/types";

if (isArray([1, '2'])) {
  console.log('It is an array');
}
```

## :handshake: How to Contribute

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## :memo: License

This project is under the
[MIT License](https://github.com/hansomware-inc/alpha/blob/master/LICENSE)
