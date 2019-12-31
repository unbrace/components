import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

type Props = {
  active?: boolean;
};

const Edit = (props: Props): JSX.Element =>
  props.active ? (
    <BaseSvgWrapper>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.0757 13.5489L36.5268 6L30.2361 12.2907L37.7849 19.8396L44.0757 13.5489Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3801 24.5014L7.3678 35.5137L6.00002 44L14.7763 42.9222L25.7886 31.9099L18.3801 24.5014ZM27.9099 29.7886L34.7925 22.906L27.384 15.4975L20.5014 22.3801L27.9099 29.7886Z"
        />
        <rect x="6.12132" y="4" width="57" height="3" transform="rotate(45 6.12132 4)" />
      </svg>
    </BaseSvgWrapper>
  ) : (
    <BaseSvgWrapper>
      <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.0757 13.5489L36.5268 6L30.2361 12.2907L37.7849 19.8396L44.0757 13.5489Z" />
        <path d="M34.7925 22.906L27.384 15.4975L7.3678 35.5137L6.00002 44L14.7763 42.9222L34.7925 22.906Z" />
      </svg>
    </BaseSvgWrapper>
  );

export default Edit;
