import * as React from 'react';
import { PaginatorVariantRenderProps } from '../Paginator';

type Props = {
  children?: (renderProps: PaginatorVariantRenderProps) => React.ReactNode;
  setLoadingPageIndex: (index: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  onPageIndexChange: (pageIndex: number) => void;
  pageIndex: number;
  hasNextPage: boolean;
};

const DefaultPaginator: React.FC<Props> = ({
  children,
  setLoadingPageIndex,
  onPageIndexChange,
  onPageSizeChange,
  pageIndex,
  hasNextPage,
}) => {
  const setPageIndex = React.useCallback(
    (value: number) => {
      setLoadingPageIndex(pageIndex);

      return onPageIndexChange(value);
    },
    [setLoadingPageIndex, pageIndex, onPageIndexChange],
  );

  const setPageSize = React.useCallback(({ value }: { value: number }) => onPageSizeChange(value), [onPageSizeChange]);

  const goToPreviousPage = React.useCallback(() => (pageIndex > 1 ? setPageIndex(pageIndex - 1) : undefined), [
    pageIndex,
    setPageIndex,
  ]);
  const goToNextPage = React.useCallback(() => (hasNextPage ? setPageIndex(pageIndex + 1) : undefined), [
    hasNextPage,
    pageIndex,
    setPageIndex,
  ]);

  return <React.Fragment>{children ? children({ setPageSize, goToNextPage, goToPreviousPage }) : null}</React.Fragment>;
};

export default DefaultPaginator;
