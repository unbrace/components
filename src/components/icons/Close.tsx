import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

type Props = {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
};

const Close: React.FunctionComponent<Props> = (props: Props): JSX.Element => (
  <BaseSvgWrapper {...props}>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.6317 35.8488L29.2829 24.5L40.6317 13.1512C41.1146 12.6683 41.1146 11.9037 40.6317 11.461L37.211 8.04024L25.0171 20.2341L12.7829 8L9.3622 11.4207C8.87927 11.9037 8.87927 12.6683 9.3622 13.111L20.711 24.4598L9.40244 35.8488C8.91951 36.3317 8.91951 37.0963 9.40244 37.539L12.8232 40.9598L25.0171 28.7659L37.2512 41L40.672 37.5793C41.1146 37.0963 41.1146 36.3317 40.6317 35.8488Z" />
    </svg>
  </BaseSvgWrapper>
);

export default Close;
