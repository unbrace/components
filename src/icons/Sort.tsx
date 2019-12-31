import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

type Props = {
  className?: string;
};

const Sort: React.FunctionComponent<Props> = ({ className }: Props): JSX.Element => (
  <BaseSvgWrapper className={className}>
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.4868 10.8431L40.2883 18.6446L38.1255 20.8065L35.9626 22.9683L30.3138 17.3194L24.6649 11.6705L19.0259 17.3095C15.9245 20.4109 13.3682 22.9484 13.3454 22.9484C13.3226 22.9484 12.3356 21.9799 11.1521 20.7962L9.00019 18.6441L16.8015 10.8427C21.0922 6.55194 24.6214 3.04132 24.6442 3.04132C24.6671 3.04132 28.1963 6.55205 32.4871 10.8429L32.4868 10.8431Z" />
      <path d="M16.8017 38.4455L9.00022 30.6439L11.1631 28.4821L13.3259 26.3203L18.9748 31.9692L24.6237 37.618L30.2626 31.9791C33.3641 28.8776 35.9203 26.3402 35.9431 26.3402C35.966 26.3402 36.953 27.3086 38.1365 28.4923L40.2884 30.6445L32.4871 38.4459C28.1964 42.7366 24.6671 46.2473 24.6443 46.2473C24.6215 46.2473 21.0922 42.7365 16.8015 38.4456L16.8017 38.4455Z" />
    </svg>
  </BaseSvgWrapper>
);

export default Sort;
