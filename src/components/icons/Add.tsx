import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

type Props = {
  onClick?: (e: React.MouseEvent) => void;
};

const Add: React.FunctionComponent<Props> = (props: Props): JSX.Element => (
  <BaseSvgWrapper {...props}>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1961 21.1961H8.62268C8.28739 21.1961 8 21.4834 8 21.8187V28.1813C8 28.5166 8.28739 28.8039 8.62268 28.8039H21.1961V41.3773C21.1961 41.7126 21.4834 42 21.8187 42H28.1813C28.5166 42 28.8039 41.7126 28.8039 41.3773V28.8039H41.3773C41.7126 28.8039 42 28.5166 42 28.1813V21.8187C42 21.6479 41.9418 21.5136 41.8506 21.4162C41.7502 21.2853 41.5925 21.1961 41.3773 21.1961H28.8039V8.62268C28.8039 8.28739 28.5166 8 28.1813 8H21.8187C21.4834 8 21.1961 8.28739 21.1961 8.62268V21.1961Z" />
    </svg>
  </BaseSvgWrapper>
);

export default Add;
