import * as React from 'react';
import BaseSvgWrapper from './BaseSvgWrapper';

const ChevronLeft: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.8765 16.8351L27.6781 9.03351L29.84 11.1964L32.0018 13.3593L26.3529 19.0082L20.7039 24.6572L26.343 30.2962C29.4445 33.3977 31.982 35.954 31.982 35.9768C31.982 35.9996 31.0135 36.9867 29.8298 38.1702L27.6776 40.3221L19.8761 32.5207C15.5853 28.2299 12.0746 24.7006 12.0746 24.6778C12.0746 24.655 15.5854 21.1257 19.8763 16.8349L19.8765 16.8351Z" />
    </svg>
  </BaseSvgWrapper>
);
const ChevronRight: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.4791 32.5205L21.6775 40.3221L19.5156 38.1592L17.3538 35.9963L23.0027 30.3474L28.6517 24.6984L23.0126 19.0594C19.9111 15.9579 17.3736 13.4016 17.3736 13.3788C17.3736 13.356 18.3421 12.3689 19.5258 11.1854L21.678 9.03347L29.4795 16.8349C33.7703 21.1257 37.281 24.655 37.281 24.6778C37.281 24.7006 33.7702 28.2299 29.4793 32.5207L29.4791 32.5205Z" />
    </svg>
  </BaseSvgWrapper>
);
const ChevronDown: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.8352 29.479L9.03374 21.6775L11.1966 19.5156L13.3595 17.3538L19.0083 23.0027L24.6572 28.6516L30.2962 23.0126C33.3976 19.9112 35.9538 17.3737 35.9767 17.3737C35.9995 17.3737 36.9865 18.3422 38.17 19.5258L40.3219 21.678L32.5206 29.4794C28.2299 33.7701 24.7006 37.2808 24.6778 37.2808C24.655 37.2808 21.1257 33.77 16.835 29.4792L16.8352 29.479Z" />
    </svg>
  </BaseSvgWrapper>
);
const ChevronUp: React.FunctionComponent = (): JSX.Element => (
  <BaseSvgWrapper>
    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.5204 22.8766L40.3219 30.6781L38.159 32.84L35.9962 35.0018L30.3473 29.3529L24.6984 23.704L19.0594 29.343C15.958 32.4444 13.4018 34.9819 13.3789 34.9819C13.3561 34.9819 12.3691 34.0134 11.1856 32.8298L9.03371 30.6776L16.835 22.8762C21.1257 18.5854 24.655 15.0748 24.6778 15.0748C24.7006 15.0748 28.2299 18.5856 32.5206 22.8764L32.5204 22.8766Z" />
    </svg>
  </BaseSvgWrapper>
);

export { ChevronDown, ChevronLeft, ChevronRight, ChevronUp };
