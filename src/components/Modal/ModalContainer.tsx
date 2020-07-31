import * as React from 'react';
import { Input } from '../';
import { ModalWrapper, ModalOverlay } from './styles';
import { ModalSizes } from './Modal';
import Draggable from 'react-draggable';

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
      <div onClick={handleClick} onMouseDown={handleClick}>
        <Draggable>
          <ModalWrapper size={size}>
            <Content
              toggleModal={toggleModal}
              closeModal={closeModal}
              keepOpenLabel={keepOpenLabel}
              keepOpenCheckbox={
                <Input
                  inlineLabel
                  name="createAnother"
                  label={keepOpenLabel}
                  type={'checkbox'}
                  onChange={toggleKeepOpen}
                />
              }
              {...contentProps}
            />
          </ModalWrapper>
        </Draggable>
      </div>
    </ModalOverlay>
  );
};
export default ModalContainer;
