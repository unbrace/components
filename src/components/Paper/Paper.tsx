import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { AnimationProps, media } from '../../theme';

type Props = {
  children: React.ReactNode[] | React.ReactNode | null;
  noPadding?: boolean;
  noSidePadding?: boolean;
  noTopMargin?: boolean;
  onlyBottomPadding?: boolean;
};

const Section = styled('section')<Props & AnimationProps>`
  background-color: ${props => props.theme.paper.backgroundColor};
  border-radius: ${props => props.theme.paper.borderRadius.main};
  box-shadow: ${props => props.theme.paper.boxShadow.regular};
  margin: ${props => props.theme.paper.margin};
  padding: ${props => props.theme.paper.padding.vertical} ${props => props.theme.paper.padding.vertical};
  ${props => props.noSidePadding && `padding: ${props.theme.paper.padding.vertical} 0`}
  ${props => props.noPadding && `padding: 0`};
  ${props => props.noTopMargin && `margin-top: 0`};
  ${props => props.onlyBottomPadding && `padding: 0 0 ${props.theme.paper.padding.vertical} 0`};
  ${props => props.state === 'entering' && props.theme.paper.animation.entering};
  ${props => props.state === 'entered' && props.theme.paper.animation.entered};

  ${props => media.tablet`
    overflow: auto;
    margin: 12px;
    padding: 24px;
    ${props.noSidePadding && `padding: ${props.theme.paper.padding.vertical} 0`};
  `};

  ${props => media.mobile`
    overflow: auto;
    margin: 0;
    padding: 24px;
    border-radius: 0;
    ${props.noSidePadding && `padding: ${props.theme.paper.padding.vertical} 0`};
  `};

  ${props => media.laptopSM`
    margin: 16px;
    padding: 24px;
    ${props.noSidePadding && `padding: ${props.theme.paper.padding.vertical} 0`};
  `}

  ${() => media.desktop`
    max-width: 1400px;
  `};
`;

const Paper: React.FunctionComponent<Props> = (props: Props) => (
  <CSSTransition in timeout={200} mountOnEnter appear>
    {state => <Section state={state} {...props} />}
  </CSSTransition>
);

export default Paper;
