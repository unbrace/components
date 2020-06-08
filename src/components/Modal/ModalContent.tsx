import * as React from 'react';
import { ModalBody, ModalFooter, ModalHeader, ModalContentWrapper } from './styles';

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

export default ModalContent;
