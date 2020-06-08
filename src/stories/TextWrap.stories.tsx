import { storiesOf } from '@storybook/react';
import * as React from 'react';
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
      <React.Fragment>
        <Wrapper>
          <TextWrap>{'This text is so long it needs to be wrapped'}</TextWrap>
        </Wrapper>
        <Wrapper>
          <TextWrap>
            <Text color="primary" asTag="span">
              {'This text is so long it needs to be wrapped'}
            </Text>
          </TextWrap>
        </Wrapper>
        <Wrapper>
          <TextWrap boxed>
            <Text color="primary" asTag="span">
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              }
            </Text>
          </TextWrap>
        </Wrapper>
        <Wrapper>
          <TextWrap list={list}>{list.join(', ')}</TextWrap>
        </Wrapper>
      </React.Fragment>
    );
  },
  {
    props: {
      propTables: [TextWrap],
      propTablesExclude: [Wrapper, React.Fragment],
    },
  },
);
