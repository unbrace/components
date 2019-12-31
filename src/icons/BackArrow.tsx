import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

const BackArrow: React.FunctionComponent = () => (
  <BaseSvgWrapper>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3333 8.83332H5.13496L11.6566 2.31166L9.99996 0.666656L0.666626 9.99999L9.99996 19.3333L11.645 17.6883L5.13496 11.1667H19.3333V8.83332Z" />
    </svg>
  </BaseSvgWrapper>
);

export default BackArrow;
