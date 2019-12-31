import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

const Delete: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.79592 17.3673L14.8844 47H35.2381L40.3265 17.3673H9.79592ZM14.8844 22.3061H35.2381L31.8441 42.0612H18.2783L14.8844 22.3061Z" />
      <path d="M17.6778 3V7.83889H8V12.6778H41.8722V7.83889H32.1945V3H17.6778Z" />
    </svg>
  </BaseSvgWrapper>
);

export default Delete;
