import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { AnimationProps } from '../../theme';

type Props = {
  block?: boolean;
};

const ErrorText = styled.span<Props & AnimationProps>`
  margin-top: 4px;
  display: flex;
  justify-content: flex-end;
  flex-basis: 100%;
  ${props =>
    props.block
      ? css`
          text-align: right;
        `
      : css`
          position: absolute;
          right: 0;
          bottom: 0;
        `}

  font-size: 85%;
  color: ${props => props.theme.form.input.errorColor};

  ${props => props.state === 'entering' && props.theme.form.input.animation.entering};
  ${props => props.state === 'entered' && props.theme.form.input.animation.entered};
`;

const TransitionedError: React.FunctionComponent<Props> = (props: Props) => (
  <CSSTransition in timeout={100} mountOnEnter appear>
    {state => <ErrorText state={state} {...props} />}
  </CSSTransition>
);

export { TransitionedError as ErrorText };
