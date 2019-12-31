import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

const Open: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.9998 17.6081V26.1707L36.2531 26.1696V13.7696L30.0639 13.7696C26.6598 13.7696 23.8644 13.7593 23.8519 13.7468C23.8393 13.7343 23.8292 12.6611 23.8293 11.362L23.8294 9.00005L32.392 9C37.1014 8.99998 40.9649 9.0102 40.9774 9.02272C40.9899 9.03523 40.9998 12.8986 40.9998 17.6081Z" />
      <path d="M9 9H19.9268V13.6829H9V9Z" />
      <path d="M41 30.0732V41H36.3171V30.0732H41Z" />
      <path d="M40.8713 12.1678L25.5359 27.5033L22.3681 24.3355L37.7035 9L40.8713 12.1678Z" />
      <path d="M13.6829 12.9024L13.6829 41H9L9 12.9024L13.6829 12.9024Z" />
      <path d="M37.0976 41H12.9024L12.9024 36.3171L37.0976 36.3171V41Z" />
    </svg>
  </BaseSvgWrapper>
);

export default Open;
