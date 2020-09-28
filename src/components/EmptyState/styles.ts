import styled from 'styled-components';
import { media } from '../../theme';
import { animations } from '../../theme/keyframes';

const Image = styled.img`
  opacity: 0.6;
  text-align: center;
  height: 260px;
  margin-bottom: 16px;

  ${media.mobile` height: 200px; `};
  ${media.tablet` height: 200px; `};
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  max-width: 400px;
  text-align: center;
  animation: ${animations.fadeIn} 0.25s linear;
`;

const CallToActionFooter = styled.footer`
  margin: 32px 0 0 0;
  display: flex;
  flex-direction: row;
  > * {
    margin: 0 4px;
  }
`;

export { Image, Wrapper, CallToActionFooter };
