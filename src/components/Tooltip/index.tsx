import * as React from 'react';
import { StyledTooltip } from './styles';

type Props = {
  children: React.ReactElement;
  positionAbsolute?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  content?: string | number | React.ReactNode;
  isActive?: boolean;
  boxed?: boolean;
};

type TooltipState = {
  isVisible: boolean;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const TOOLTIP_SPACING = 10;

// TODO: improve position element when it overflows the window

const calculateLeft = (e: React.MouseEvent, position: string, positionAbsolute?: boolean) => {
  const { left, width, right } = e.currentTarget.getBoundingClientRect();
  if (position === 'right') return positionAbsolute ? undefined : right + TOOLTIP_SPACING;
  if (position === 'left') return positionAbsolute ? 0 - TOOLTIP_SPACING : left - TOOLTIP_SPACING;

  return positionAbsolute ? width / 2 : left + width / 2;
};

const calculateRight = (position: string, positionAbsolute?: boolean) => {
  if (position !== 'right' || !positionAbsolute) return undefined;

  return 0 - TOOLTIP_SPACING;
};

const calculateTop = (e: React.MouseEvent, position: string, positionAbsolute?: boolean) => {
  const { top, height, bottom } = e.currentTarget.getBoundingClientRect();
  if (position === 'bottom') return positionAbsolute ? undefined : bottom + TOOLTIP_SPACING;
  if (position === 'top') return positionAbsolute ? 0 - TOOLTIP_SPACING : top - TOOLTIP_SPACING;

  return positionAbsolute ? height / 2 : top + height / 2;
};

const calculateBottom = (position: string, positionAbsolute?: boolean) => {
  if (position !== 'bottom' || !positionAbsolute) return undefined;

  return 0 - TOOLTIP_SPACING;
};

const Tooltip: React.FC<Props> = ({
  children,
  positionAbsolute,
  position = 'bottom',
  content,
  boxed,
  isActive = true,
}: Props) => {
  const [state, setState] = React.useState<TooltipState>({
    isVisible: false,
  });

  const handleMouseEnter = React.useCallback(
    (e: React.MouseEvent) => {
      setState({
        isVisible: true,
        left: calculateLeft(e, position, positionAbsolute),
        top: calculateTop(e, position, positionAbsolute),
        right: calculateRight(position, positionAbsolute),
        bottom: calculateBottom(position, positionAbsolute),
      });
    },
    [positionAbsolute, position],
  );

  const handleMouseLeave = () =>
    setState({
      isVisible: false,
      left: undefined,
      top: undefined,
      bottom: undefined,
      right: undefined,
    });

  if (!state.isVisible || !isActive) {
    return children && React.cloneElement(children, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave });
  }

  return (
    <React.Fragment>
      {children && React.cloneElement(children, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave })}
      <StyledTooltip
        positionAbsolute={positionAbsolute}
        top={state.top}
        left={state.left}
        bottom={state.bottom}
        right={state.right}
        position={position}
        boxed={boxed}
      >
        {content ?? null}
      </StyledTooltip>
    </React.Fragment>
  );
};

export default Tooltip;
