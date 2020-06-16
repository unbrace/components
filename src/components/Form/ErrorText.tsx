import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { AnimationProps } from '../../theme';

type Props = {
  block?: boolean;
  left?: boolean;
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
          justify-content: flex-end;
        `
      : props.left
      ? css`
          text-align: left;
          justify-content: flex-start;
        `
      : css`
          justify-content: flex-end;

          position: absolute;
          right: 0;
          bottom: 0;
        `}

  font-size: 85%;
  color: ${props => props.theme.form.color.input.error};

  ${props => props.state === 'entering' && props.theme.form.animation.input.entering};
  ${props => props.state === 'entered' && props.theme.form.animation.input.entered};
`;

const TransitionedError: React.FunctionComponent<Props> = (props: Props) => (
  <CSSTransition in timeout={100} mountOnEnter appear>
    {state => <ErrorText state={state} {...props} />}
  </CSSTransition>
);

export { TransitionedError as ErrorText };
