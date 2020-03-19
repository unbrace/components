import * as React from 'react';
import { debounce } from 'ts-debounce';
import { Tooltip } from '..';
import { TextWrap } from './styles';

export type TextWrapProps = {
  children?: React.ReactNode;
  isCapitalized?: boolean;
  list?: string[];
} & React.HTMLAttributes<HTMLSpanElement>;

const TextWrapComponent: React.FunctionComponent<TextWrapProps> = ({ list, ...rest }: TextWrapProps) => {
  const listCount = list && (list.length > 1 ? list.length : undefined);
  const wrapRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const [isTruncated, setIsTruncated] = React.useState(false);

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

  const tooltipContent = list
    ? list.map((item, index) => (
        <li key={index + item}>
          {item} <br />
        </li>
      ))
    : rest.children;

  return (
    <React.Fragment>
      <Tooltip isActive={isTruncated} content={tooltipContent}>
        <TextWrap listCount={isTruncated ? listCount : undefined} ref={wrapRef} {...rest} />
      </Tooltip>
    </React.Fragment>
  );
};

export default TextWrapComponent;
