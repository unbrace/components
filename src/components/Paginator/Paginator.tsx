import * as React from 'react';
import { ChevronLeft, ChevronRight } from '../icons';
import { PaginatorWrapper } from './PaginatorWrapper';
import { IconButton, Select } from '../..';
import styled from 'styled-components';
import ReduxPaginator from './variations/ReduxPaginator';
import DefaultPaginator from './variations/DefaultPaginator';

type Props = {
  pageIndex: number;
  totalItems: number;
  hasNextPage: boolean;
  pageSize: number;
  pageSizes: number[];
  onPageSizeChange: (pageSize: number) => void;
  onPageIndexChange: (pageIndex: number) => void;
  className?: string;
  // if you pass the redux prop we will dispatch the actions created by the given action creators instead of the change handlers
  redux?: {
    setPageIndexActionCreator: (page: number) => object;
    setPageSizeActionCreator: (size: number) => object;
  };
};

export type PaginatorVariantRenderProps = {
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  setPageSize: (value: { value: number }) => void;
};

const Paginator: React.FunctionComponent<Props> = ({
  pageIndex,
  totalItems,
  hasNextPage,
  pageSize,
  redux,
  pageSizes,
  onPageIndexChange,
  onPageSizeChange,
  className,
}: Props) => {
  const [loadingPageIndex, setLoadingPageIndex] = React.useState<number | null>(null);

  // React select needs objects as options
  const selectOptions = React.useMemo(() => pageSizes.map(size => ({ value: size })), [pageSizes]);
  const selectedValue = React.useMemo(() => selectOptions.find(option => option.value === pageSize), [
    selectOptions,
    pageSize,
  ]);
  const totalPages = Math.ceil(totalItems / pageSize);

  React.useEffect(() => {
    if (loadingPageIndex !== pageIndex) {
      setLoadingPageIndex(null);
    }
  }, [pageIndex, setLoadingPageIndex, loadingPageIndex]);

  const pageStatus = React.useMemo((): string => {
    if (!pageIndex || !totalItems) {
      return '';
    }
    const firstItemIndexOfPage = pageIndex > 1 ? (pageIndex - 1) * pageSize : 1;
    const lastItemIndexOfPage = pageIndex * pageSize > totalItems ? totalItems : pageIndex * pageSize;

    return `${firstItemIndexOfPage} - ${lastItemIndexOfPage} of ${totalItems}`;
  }, [pageIndex, pageSize, totalItems]);

  const renderFunction = React.useCallback(
    (goToPreviousPage, goToNextPage, setPageSize) => (
      <PaginatorWrapper className={`paginator ${className}`}>
        <div className="pageNumber">{pageStatus}</div>
        <IconButton onClick={goToPreviousPage} isDisabled={!pageIndex || pageIndex < 2 || Boolean(loadingPageIndex)}>
          <ChevronLeft />
        </IconButton>
        <PageSizeWrapper>
          <Select
            options={selectOptions}
            value={selectedValue}
            onChange={setPageSize}
            getOptionLabel={(option: { value: number }) => option.value.toString()}
            getOptionValue={(option: { value: number }) => option.value}
          />
        </PageSizeWrapper>
        <IconButton
          onClick={goToNextPage}
          isDisabled={!hasNextPage || Boolean(loadingPageIndex) || pageIndex > totalPages}
        >
          <ChevronRight />
        </IconButton>
      </PaginatorWrapper>
    ),
    [pageStatus, pageIndex, loadingPageIndex, selectOptions, hasNextPage, selectedValue, className, totalPages],
  );

  return redux ? (
    <ReduxPaginator
      setLoadingPageIndex={setLoadingPageIndex}
      setPageIndexActionCreator={redux.setPageIndexActionCreator}
      setPageSizeActionCreator={redux.setPageSizeActionCreator}
      pageIndex={pageIndex}
      hasNextPage={hasNextPage}
    >
      {({ setPageSize, goToNextPage, goToPreviousPage }) => renderFunction(goToPreviousPage, goToNextPage, setPageSize)}
    </ReduxPaginator>
  ) : (
    <DefaultPaginator
      setLoadingPageIndex={setLoadingPageIndex}
      pageIndex={pageIndex}
      hasNextPage={hasNextPage}
      onPageIndexChange={onPageIndexChange}
      onPageSizeChange={onPageSizeChange}
    >
      {({ setPageSize, goToNextPage, goToPreviousPage }) => renderFunction(goToPreviousPage, goToNextPage, setPageSize)}
    </DefaultPaginator>
  );
};

const PageSizeWrapper = styled.div`
  width: 75px;
`;

export default Paginator;
