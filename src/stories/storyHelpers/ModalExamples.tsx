import * as React from 'react';
import { ModalContainer, ModalHeader, ModalFooter, ModalBody } from '../../components/Modal';
import styled from 'styled-components';
import { Button, SubmitButton } from '../../components/Button';
import { Input } from '../../components';

type ModalProps = {
  toggleModal: () => void;
  keepOpenCheckbox?: React.ElementType<typeof Input>;
  keepOpenLabel?: string;
};

export const ModalHeaderExample = () => (
  <ModalHeader>
    <h1>Title</h1>
    <h5>Description</h5>
  </ModalHeader>
);

export const ModalFooterExample = ({ toggleModal, keepOpenCheckbox, keepOpenLabel }: ModalProps) => (
  <ModalFooter>
    {keepOpenLabel ? keepOpenCheckbox : null}
    <Button onClick={toggleModal} color="tertiary">
      Cancel
    </Button>
    <SubmitButton onClick={toggleModal} color="primary">
      Save changes
    </SubmitButton>
  </ModalFooter>
);

export const ModalBodyExample = () => <ModalBody />;

export const ModalExample = (props: ModalProps) => (
  <React.Fragment>
    <ModalHeaderExample />
    <ModalBodyExample />
    <ModalFooterExample {...props} />
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
