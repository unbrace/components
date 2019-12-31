import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

const Redo: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.145 11.43H31.29V2L47.0067 14.5733L31.29 27.1467V17.7167H17.145C12.8103 17.7167 9.28667 21.2435 9.28667 25.575C9.28667 29.9097 12.8103 33.4333 17.145 33.4333H25.0033V39.72H17.145C9.34639 39.72 3 33.3736 3 25.575C3 17.7764 9.34639 11.43 17.145 11.43Z" />
    </svg>
  </BaseSvgWrapper>
);

export default Redo;
