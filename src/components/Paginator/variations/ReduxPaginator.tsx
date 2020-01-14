import * as React from 'react';
import { PaginatorVariantRenderProps } from '../Paginator';
import { useDispatch } from 'react-redux';

type Props = {
  children?: (renderProps: PaginatorVariantRenderProps) => React.ReactNode;
  setLoadingPageIndex: (index: number) => void;
  setPageIndexActionCreator: (page: number) => object;
  setPageSizeActionCreator: (size: number) => object;
  pageIndex: number;
  hasNextPage: boolean;
};

const ReduxPaginator: React.FC<Props> = ({
  children,
  setLoadingPageIndex,
  setPageIndexActionCreator,
  setPageSizeActionCreator,
  pageIndex,
  hasNextPage,
}) => {
  const dispatch = useDispatch();

  const setPageIndex = React.useCallback(
    (value: number) => {
      setLoadingPageIndex(pageIndex);

      return dispatch(setPageIndexActionCreator(value));
    },
    [dispatch, setLoadingPageIndex, pageIndex, setPageIndexActionCreator],
  );

  const setPageSize = React.useCallback(({ value }: { value: number }) => dispatch(setPageSizeActionCreator(value)), [
    dispatch,
    setPageSizeActionCreator,
  ]);

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

export default ReduxPaginator;
