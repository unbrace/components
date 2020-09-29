import * as React from 'react';
import { Input } from '../';
import { ModalWrapper, ModalOverlay } from './styles';
import { ModalSizes } from './Modal';
import 'mousetrap';

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

export type ModalPositionProps = { top: number; left: number };

export type ModalStyleProps = {
  size?: ModalSizes;
  position?: ModalPositionProps;
};

const hotKeys = {
  'shift+up': { top: -50, left: 0 },
  'shift+down': { top: +50, left: 0 },
  'shift+left': { top: 0, left: -50 },
  'shift+right': { top: 0, left: +50 },
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
  const [position, setPosition] = React.useState<ModalPositionProps | undefined>(undefined);
  const ref = React.useRef<HTMLElement>(null);

  const handleMovement = (position: ModalPositionProps) => {
    if (ref.current) {
      const clientPos = ref.current.getBoundingClientRect();
      setPosition({ top: clientPos.top + position.top, left: clientPos.left + position.left });
    }
  };

  React.useEffect(() => {
    Object.keys(hotKeys).forEach(hotKey => {
      window.Mousetrap.bind(hotKey, () => handleMovement(hotKeys[hotKey]));
    });

    return () => {
      Object.keys(hotKeys).forEach(hotKey => {
        window.Mousetrap.unbind(hotKey);
      });
    };
  }, []);

  return (
    <ModalOverlay {...props} onMouseDown={toggleModal}>
      <ModalWrapper ref={ref} position={position} onClick={handleClick} onMouseDown={handleClick} size={size}>
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
