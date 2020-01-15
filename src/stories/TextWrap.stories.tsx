import { storiesOf } from '@storybook/react';
import * as React from 'react';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import styled from 'styled-components';
import TextWrap from '../components/TextWrap';

const Wrapper = styled.div`
  margin-left: 200px;
  max-width: 100px;
  padding: 10px;
  background: lightgray;
`;

storiesOf('Textwrap', module).add(
  'default',
  () => {
    return (
      <UnbraceThemeProvider>
        <Wrapper>
          <TextWrap>{'This text is so long it needs to be wrapped'}</TextWrap>
        </Wrapper>
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTablesExclude: [Wrapper, UnbraceThemeProvider],
    },
  },
);
