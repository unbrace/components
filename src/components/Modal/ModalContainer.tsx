import * as React from 'react';
import { Input } from '../';
import { ModalWrapper } from './layout';
import ModalOverlay from './layout/ModalOverlay';
import { ModalSizes } from './Modal';

type Props = {
  content: React.ComponentType<any>;
  title?: string;
  closeModal: () => void;
  toggleModal: () => void;
  toggleKeepOpen: () => void;
  handleClick: (e: React.MouseEvent) => void;
  contentProps?: any;
  keepOpenLabel?: string;
} & ModalStyleProps;

export type ModalStyleProps = {
  size?: ModalSizes;
};

const ModalContainer: React.FunctionComponent<Props> = ({
  handleClick,
  content: Content,
  contentProps,
  closeModal,
  toggleModal,
  toggleKeepOpen,
  size,
  title,
  keepOpenLabel,
  ...props
}: Props) => {
  return (
    <ModalOverlay {...props} onMouseDown={toggleModal}>
      <ModalWrapper onClick={handleClick} onMouseDown={handleClick} size={size}>
        <Content
          toggleModal={toggleModal}
          closeModal={closeModal}
          keepOpenLabel={keepOpenLabel}
          keepOpenCheckbox={
            <Input inlineLabel name="createAnother" label={keepOpenLabel} type={'checkbox'} onChange={toggleKeepOpen} />
          }
          {...contentProps}
        />
      </ModalWrapper>
    </ModalOverlay>
  );
};
export default ModalContainer;
