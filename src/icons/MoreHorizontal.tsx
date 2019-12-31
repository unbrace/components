import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

const MoreHorizontal: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 25.0185C50 28.4907 47.2222 31.2685 43.9815 31.2685C40.5093 31.2685 37.7315 28.4907 37.7315 25.0185C37.7315 21.7778 40.5093 19 43.9815 19C47.2222 19 50 21.7778 50 25.0185Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0185 25.0185C31.0185 28.4907 28.4722 31.2685 25 31.2685C21.5278 31.2685 18.75 28.4907 18.75 25.0185C18.75 21.7778 21.5278 19 25 19C28.4722 19 31.0185 21.7778 31.0185 25.0185Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2685 25.0185C12.2685 28.4907 9.49074 31.2685 6.01852 31.2685C2.77778 31.2685 -1.51776e-07 28.4907 0 25.0185C1.41657e-07 21.7778 2.77778 19 6.01852 19C9.49074 19 12.2685 21.7778 12.2685 25.0185Z"
      />
    </svg>
  </BaseSvgWrapper>
);

export default MoreHorizontal;
