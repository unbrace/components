import styled from 'config/theme';
import * as React from 'react';
import { debounce } from 'ts-debounce';
import Tooltip from '../Tooltip';

type Props = {
  capitalize?: boolean;
  listCount?: number;
  list?: string[];
};

const TextWrap = styled.span<Props>`
  ${props =>
    props.capitalize
      ? `
  text-transform: capitalize; `
      : null}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  margin-right: ${props => (props.listCount ? '40px;' : 0)};

  ${props =>
    props.listCount &&
    `
    &:before {
      content: '${props.listCount}';
      position: absolute;
      right: 8px;
      padding: 0px 8px;
      border-radius: 16px;
      background: ${props.theme.table.color.badge}
    }
  `}
`;

const TextWrapComponent: React.FunctionComponent<Props> = ({ listCount, list, ...rest }) => {
  const wrapRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const [isTruncated, setIsTruncated] = React.useState(false);
  const [position, setPosition] = React.useState({ active: false, left: 0, top: 0 });

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

  const debouncedTruncatedSet = debounce(() => {
    if (wrapRef.current) {
      setIsTruncated(wrapRef.current.clientWidth < wrapRef.current.scrollWidth);
    }
  }, 300);

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

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
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
        ref={wrapRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        listCount={isTruncated ? listCount : undefined}
        {...rest}
      />
      {isTruncated && position.active && (
        <Tooltip leftAligned style={{ top: position.top, left: position.left }}>
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