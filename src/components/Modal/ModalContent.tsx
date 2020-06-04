import * as React from 'react';
import styled from 'styled-components';
import { ModalBody, ModalFooter, ModalHeader } from './layout';

type Props = {
  children: React.ReactNode;
};

class ModalContent extends React.PureComponent<Props> {
  static Body = ModalBody;
  static Footer = ModalFooter;
  static Header = ModalHeader;

  render() {
    return <ModalContentWrapper>{this.props.children}</ModalContentWrapper>;
  }
}

const ModalContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 90vh;
`;

export default ModalContent;
