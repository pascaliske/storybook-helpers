# Storybook Helpers

[![Build Status](https://travis-ci.com/pascaliske/storybook-helpers.svg?branch=master)](https://travis-ci.com/pascaliske/storybook-helpers) [![codecov](https://codecov.io/gh/pascaliske/storybook-helpers/branch/develop/graph/badge.svg)](https://codecov.io/gh/pascaliske/storybook-helpers) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/storybook-helpers)](https://dependabot.com)

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

MIT © [Pascal Iske](https://pascal-iske.de)
