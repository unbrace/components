import * as React from 'react';
import styled, { css } from 'styled-components';
import { debounce } from 'ts-debounce';
import Tooltip from '../Tooltip';

type Props = {
  children?: React.ReactNode;
  isCapitalized?: boolean;
  list?: string[];
  listCount?: number;
};

const TextWrap = styled.span<Props>`
  display: block;
  margin-right: ${props => (props.listCount ? '40px;' : 0)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${props =>
    props.isCapitalized &&
    css`
      text-transform: capitalize;
    `}

  ${props =>
    props.listCount &&
    `
    &:before {
      background: ${props.theme.table.color.badge}
      border-radius: 16px;
      content: '${props.listCount}';
      padding: 0px 8px;
      position: absolute;
      right: 8px;
    }
  `}
`;

const TextWrapComponent: React.FunctionComponent<Props> = ({ listCount, list, ...rest }: Props) => {
  const wrapRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const [isTruncated, setIsTruncated] = React.useState(false);
  const [position, setPosition] = React.useState({ active: false, left: 0, top: 0 });

  const debouncedTruncatedSet = debounce(() => {
    if (wrapRef.current) {
      setIsTruncated(wrapRef.current.clientWidth < wrapRef.current.scrollWidth);
    }
  }, 300);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      if (wrapRef.current && wrapRef.current.clientWidth < wrapRef.current.scrollWidth) {
        setIsTruncated(true);
      }
    }, 300);
    window.addEventListener('resize', debouncedTruncatedSet);

    return () => window.removeEventListener('resize', debouncedTruncatedSet);
    // eslint-disable-next-line
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (isTruncated) {
      const pos = e.currentTarget.getBoundingClientRect();
      const { left, top } = pos;
      setPosition({
        active: true,
        left,
        top: top + 32,
      });
    }
  };

  const handleMouseLeave = () => {
    if (isTruncated) {
      setPosition({
        active: false,
        left: 0,
        top: 0,
      });
    }
  };

  return (
    <React.Fragment>
      <TextWrap
        listCount={isTruncated ? listCount : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={wrapRef}
        {...rest}
      />
      {isTruncated && position.active && (
        <Tooltip Alignment="left" style={{ top: position.top, left: position.left }}>
          {list
            ? list.map((item, index) => (
                <li key={index + item}>
                  {item} <br />
                </li>
              ))
            : rest.children}
        </Tooltip>
      )}
    </React.Fragment>
  );
};

export default TextWrapComponent;
