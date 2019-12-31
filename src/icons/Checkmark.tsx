import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

const Checkmark: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5067 32.4884L7.7308 24.2114L3 29.0385L15.5068 41.8L46.94 13.1731L42.545 8L15.5067 32.4884Z" />
    </svg>
  </BaseSvgWrapper>
);

export default Checkmark;
