import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { AnimationProps, media } from '../../theme';
import styled from 'styled-components';

const ItemSidebarWrapper = styled.div<AnimationProps>`
  background-color: ${props => props.theme.sidebar.background.main};
  border-right: ${props => props.theme.sidebar.border.right};
  display: flex;
  flex-direction: column;
  font-size: 10px;
  max-height: 100vh;
  min-width: ${props => props.theme.sidebar.width.large};
  position: relative;
  width: ${props => props.theme.sidebar.width.large};

  ${props => media.desktop`
    width: ${props.theme.sidebar.width.huge};
    min-width: ${props.theme.sidebar.width.huge};
  `};

  .loading-text {
    color: ${props => props.theme.sidebar.color.loading};
    font-weight: 200;
    text-align: center;
  }

  ${props => props.state === 'entering' && props.theme.sidebar.animation.main.entering};
  ${props => props.state === 'entered' && props.theme.sidebar.animation.main.entered};
`;

const TransitionedWrapper: React.FunctionComponent<React.RefAttributes<HTMLDivElement>> = React.forwardRef(
  ({ children, ...rest }, ref) => (
    <CSSTransition in timeout={200} mountOnEnter appear>
      {state => (
        <ItemSidebarWrapper state={state} {...rest} ref={ref}>
          {children}
        </ItemSidebarWrapper>
      )}
    </CSSTransition>
  ),
);

export default TransitionedWrapper;
