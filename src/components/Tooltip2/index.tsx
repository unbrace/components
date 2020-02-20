import * as React from 'react';
import Tooltip from '../Tooltip/styles';

type Props = {
  children: React.ReactElement;
  positionAbsolute?: boolean;
  position?: 'top' | 'bottom';
  text: string;
};

const Tooltip2: React.FC<Props> = ({ children, positionAbsolute, position = 'bottom', text }: Props) => {
  const [state, setState] = React.useState({
    active: false,
    left: 0,
    top: 0,
  });

  const handleMouseEnter = React.useCallback(
    (e: React.MouseEvent) => {
      const { left, bottom, top, width, height } = e.currentTarget.getBoundingClientRect();
      setState({
        active: true,
        left: positionAbsolute ? width / 2 : left + width / 2,
        top:
          position === 'top'
            ? positionAbsolute
              ? 0 - 10 - height
              : top - height - 10
            : positionAbsolute
            ? height + 5
            : bottom + 5,
      });
    },
    [positionAbsolute, position],
  );

  const handleMouseLeave = () =>
    setState({
      active: false,
      left: 0,
      top: 0,
    });

  if (!state.active) {
    return children && React.cloneElement(children, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave });
  }

  return (
    <React.Fragment>
      {children && React.cloneElement(children, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave })}
      <Tooltip style={{ top: state.top, left: state.left }} positionAbsolute={positionAbsolute}>
        {text}
      </Tooltip>
    </React.Fragment>
  );
};

export default Tooltip2;
