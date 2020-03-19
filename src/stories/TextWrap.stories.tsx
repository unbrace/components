import { storiesOf } from '@storybook/react';
import * as React from 'react';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import styled from 'styled-components';
import TextWrap from '../components/TextWrap';
import { Text } from '../components/Text';

const Wrapper = styled.div`
  margin-left: 0px;
  margin-bottom: 16px;
  max-width: 100px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.03);
  position: relative;
  border: 1px solid lightgrey;
`;

storiesOf('Textwrap', module).add(
  'default',
  () => {
    const list = ['Item 1', 'item 2', 'item 3'];

    return (
      <UnbraceThemeProvider>
        <React.Fragment>
          <Wrapper>
            <TextWrap>{'This text is so long it needs to be wrapped'}</TextWrap>
          </Wrapper>
          <Wrapper>
            <TextWrap>
              <Text color="primary">{'This text is so long it needs to be wrapped'}</Text>
            </TextWrap>
          </Wrapper>
          <Wrapper>
            <TextWrap list={list}>{list.join(', ')}</TextWrap>
          </Wrapper>
        </React.Fragment>
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTables: [TextWrap],
      propTablesExclude: [Wrapper, UnbraceThemeProvider, React.Fragment],
    },
  },
);
