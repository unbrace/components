# Unbrace components

A component library for Unbrace using React and Styled Components.

## Table of Contents

- [Unbrace components](#unbrace-components)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Theming](#theming)
      - [Example](#example)
  - [Storybook](#storybook)
  - [Contributing](#contributing)

## Installation

Using npm  
`npm install @unbrace/components`

Using yarn  
`yarn add @unbrace/components`

## Usage

You can import all our components from `@unbrace/components`

```javascript
import { Badge } from '@unbrace/components';
```

### Theming

All components are built with styled components and a default theme. To override this default theme you need to have a `<ThemeProvider>` in your app, and override the desired values as described in the components storybook.

#### Example

In this basic example we will override a buttons background color  
Button theme schema (found in storybook)

```javascript
  {
    button: {
      color: 'red';
      background: 'green';
  }
```

Your own theme

```javascript
{
  button: {
    // we don't need to pass color, you only have to specifiy overrides
    background: 'blue';
  }
}
```

## Storybook

To run the storybook, clone the source code from the [components github page](https://github.com/unbrace/components).  
Then run

```
npm run storybook
```

or

```
yarn storybook
```

## Contributing

See [components github page](https://github.com/unbrace/components).
