import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

type Props = {
  isRotated?: boolean;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const ArrowDown: React.FC<Props> = ({ isRotated, ...rest }: Props): JSX.Element => (
  <BaseSvgWrapper
    style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform ease-in 0.2s' }}
  >
    <svg {...rest} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.2271 40.9065L7.90913 32.5885L12.5212 27.9786L24.5669 40.0243L30.5792 34.012C33.886 30.7053 36.6115 27.9998 36.6358 27.9998C36.6601 27.9998 37.7125 29.0324 38.9744 30.2945L41.2687 32.5891L32.9509 40.907C28.3762 45.4818 24.6133 49.2249 24.5889 49.2249C24.5646 49.2249 20.802 45.4815 16.2271 40.9065Z" />
      <path d="M21.1187 40.7769L21.1187 2.09108L27.7236 2.09108L27.7236 40.7769H21.1187Z" />
    </svg>
  </BaseSvgWrapper>
);

export default ArrowDown;
