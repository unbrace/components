import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

type Props = {
  onClick?: (e: React.MouseEvent) => void;
};

const Minus: React.FunctionComponent<Props> = (props: Props): JSX.Element => (
  <BaseSvgWrapper {...props}>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.62268 21.196C8.28739 21.196 8 21.4834 8 21.8187V28.1813C8 28.5165 8.28739 28.8039 8.62268 28.8039C25.6256 28.8039 22.4967 28.8039 41.3773 28.8039C41.7126 28.8039 42 28.5165 42 28.1813V21.8187C42 21.6479 41.9418 21.5136 41.8506 21.4162C41.7502 21.2853 41.5925 21.196 41.3773 21.196C24.3483 21.196 27.533 21.196 8.62268 21.196Z" />
    </svg>
  </BaseSvgWrapper>
);

export default Minus;
