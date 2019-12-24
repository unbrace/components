import { configure } from '@storybook/react';
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

// automatically import all files ending in *.stories.tsx
configure(require.context('../src/stories', true, /\.stories\.tsx?$/), module);
addDecorator(withPropsTable);
