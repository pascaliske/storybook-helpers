# Storybook Helpers

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/storybook-helpers.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/storybook-helpers) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/storybook-helpers.svg?style=flat-square)](https://github.com/pascaliske/storybook-helpers) [![Build Status](https://img.shields.io/github/workflow/status/pascaliske/storybook-helpers/Test%20package/master?label=test&style=flat-square)](https://github.com/pascaliske/storybook-helpers/actions) [![codecov](https://codecov.io/gh/pascaliske/storybook-helpers/branch/develop/graph/badge.svg)](https://codecov.io/gh/pascaliske/storybook-helpers) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/storybook-helpers)](https://dependabot.com)

## Installation

To install the package use the following commands:

```bash
$ yarn add @pascaliske/storybook-helpers
```

## Usage

```typescript
import { createStory } from '@pascaliske/storybook-helpers'
import { FooComponent } from './foo.component'

export default {
    title: 'FooComponent',
}

export const Basic = createStory({
    parameters: {},
    factory: () => ({
        component: FooComponent,
        props: {},
    }),
})
```

## License

MIT © [Pascal Iske](https://pascaliske.dev)
