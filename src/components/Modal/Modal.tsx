import * as React from 'react';
import { createPortal } from 'react-dom';
import ModalContainer from './ModalContainer';
import { useToggle } from '@unbrace/hooks';

// TODO: type content to only allow ModalContent + Possibly type contentProps and pass this typing down internally so there is autocomplete for these props
type Props = {
  content: React.ComponentType<any>;
  children?: (toggleModal: ToggleModalType) => JSX.Element;
  contentProps?: any;
  size?: ModalSizes;
  isVisible?: boolean;
  title?: string;
};

type State = {
  isOpen: boolean;
  keepOpen: boolean;
};

export type ToggleModalType = () => void;
export type ModalSizes = 'small' | 'medium' | 'large';

const Modal: React.FC<Props> = ({ isVisible, children, contentProps, size, title, content }: Props) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const [keepOpen, toggleKeepOpen] = useToggle(false);

  React.useEffect(() => {
    toggleIsOpen(isVisible || false);
  }, [isVisible]);

  const toggleModal = () => {
    toggleIsOpen(keepOpen ? true : !isOpen);
  };

  const closeModal = () => {
    toggleIsOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <React.Fragment>
      {children && children(toggleModal)}

      {isOpen &&
        createPortal(
          <ModalContainer
            content={content}
            toggleModal={toggleModal}
            closeModal={closeModal}
            toggleKeepOpen={toggleKeepOpen}
            handleClick={handleModalClick}
            contentProps={contentProps}
            size={size}
            title={title}
          />,
          document.getElementById('modal') as HTMLElement,
        )}
    </React.Fragment>
  );
};

export default Modal;
