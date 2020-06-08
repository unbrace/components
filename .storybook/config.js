import * as React from 'react';
import { configure } from '@storybook/react';
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');
import GlobalStyle from '../src/theme/GlobalStyle';
import UnbraceThemeProvider from '../src/components/UnbraceThemeProvider';
import { StoryWrapper } from './styles';

addDecorator(s => (
  <UnbraceThemeProvider>
    <GlobalStyle />
    <StoryWrapper>{s()}</StoryWrapper>
  </UnbraceThemeProvider>
));

// automatically import all files ending in *.stories.tsx or *.stories.mdx
configure(require.context('../src/stories', true, /\.stories(.tsx|.mdx)?$/), module);
addDecorator(withPropsTable);
