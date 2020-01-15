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

storiesOf('Tooltip', module).add(
  'default',
  () => {
    return (
      <UnbraceThemeProvider>
        <Wrapper>
          <TextWrap>{'hover me to see a tooltip'}</TextWrap>
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
