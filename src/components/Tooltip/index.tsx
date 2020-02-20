import * as React from 'react';
import { StyledTooltip } from './styles';

type Props = {
  children: React.ReactElement;
  positionAbsolute?: boolean;
  position?: 'top' | 'bottom';
  content?: string | number | React.ReactNode;
  isActive?: boolean;
};

const calculateLeft = (e: React.MouseEvent, positionAbsolute?: boolean) => {
  const { left, width } = e.currentTarget.getBoundingClientRect();

  return positionAbsolute ? width / 2 : left + width / 2;
};

const calculateTop = (e: React.MouseEvent, position: string, positionAbsolute?: boolean) => {
  const { bottom, top, height } = e.currentTarget.getBoundingClientRect();

  if (position === 'top') return positionAbsolute ? 0 - 10 - height : top - height - 10;

  return positionAbsolute ? height + 5 : bottom + 5;
};

const Tooltip2: React.FC<Props> = ({
  children,
  positionAbsolute,
  position = 'bottom',
  content,
  isActive = true,
}: Props) => {
  const [state, setState] = React.useState({
    isVisible: false,
    left: 0,
    top: 0,
  });

  const handleMouseEnter = React.useCallback(
    (e: React.MouseEvent) => {
      setState({
        isVisible: true,
        left: calculateLeft(e, positionAbsolute),
        top: calculateTop(e, position, positionAbsolute),
      });
    },
    [positionAbsolute, position],
  );

  const handleMouseLeave = () =>
    setState({
      isVisible: false,
      left: 0,
      top: 0,
    });

  if (!state.isVisible || !isActive) {
    return children && React.cloneElement(children, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave });
  }

  return (
    <React.Fragment>
      {children && React.cloneElement(children, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave })}
      <StyledTooltip positionAbsolute={positionAbsolute} top={state.top} left={state.left}>
        {content ?? null}
      </StyledTooltip>
    </React.Fragment>
  );
};

export default Tooltip2;
