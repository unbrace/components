import { storiesOf } from '@storybook/react';
import * as React from 'react';
import UnbraceThemeProvider from '../components/UnbraceThemeProvider';
import styled from 'styled-components';
import TextWrap from '../components/TextWrap';
import { IconButton } from '../components';
import Close from '../components/icons/Close';

const Wrapper = styled.div`
  margin-left: 0px;
  max-width: 100px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid lightgrey;
`;

const ButtonWrapper = styled.div`
  margin: 16px 0 0 0;
  width: 100px;
  display: flex;
  justify-content: center;
`;

storiesOf('Tooltip', module).add(
  'default',
  () => {
    return (
      <UnbraceThemeProvider>
        <React.Fragment>
          <Wrapper>
            <TextWrap>{'hover me to see a tooltip'}</TextWrap>
          </Wrapper>
          <ButtonWrapper>
            <IconButton tooltip="Close tooltip">
              <Close />
            </IconButton>
          </ButtonWrapper>
        </React.Fragment>
      </UnbraceThemeProvider>
    );
  },
  {
    props: {
      propTablesExclude: [Wrapper, ButtonWrapper, Close, IconButton, UnbraceThemeProvider],
    },
  },
);
