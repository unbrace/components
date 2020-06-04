import * as React from 'react';
import { ModalHeader, ModalFooter, ModalBody } from '../../components/Modal/layout';
import { ModalContainer } from '../../components/Modal';
import styled from 'styled-components';
import { Button, SubmitButton } from '../../components/Button';

type ModalProps = {
  toggleModal: () => void;
};

export const ModalHeaderExample = () => (
  <ModalHeader>
    <h1>Title</h1>
    <h5>Description</h5>
  </ModalHeader>
);

export const ModalFooterExample = ({ toggleModal }: ModalProps) => (
  <ModalFooter>
    <Button onClick={toggleModal} color="tertiary">
      Cancel
    </Button>
    <SubmitButton onClick={toggleModal} color="primary">
      Save changes
    </SubmitButton>
  </ModalFooter>
);

export const ModalBodyExample = () => <ModalBody />;

export const ModalExample = ({ toggleModal }: ModalProps) => (
  <React.Fragment>
    <ModalHeaderExample />
    <ModalBodyExample />
    <ModalFooterExample toggleModal={toggleModal} />
  </React.Fragment>
);

export const ModalContainerExample = (props: any) => (
  <ModalContainerWrapper>
    <ModalContainer {...props} />
  </ModalContainerWrapper>
);

const ModalContainerWrapper = styled.div`
  height: 300px;
  > div {
    width: 100%;
    height: 100%;
  }
`;
