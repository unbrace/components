import styled, { css } from 'config/theme';
import { media } from 'config/theme/utils';
import * as React from 'react';
import { Action } from 'typesafe-actions';
import { SortValue } from '../../types';
import { SortState } from './SortToggle';
import { TableRow } from './TableRow';
import Th from './Th';

export type TableColumn = {
  title: string | React.ReactNode;
  size: 'auto' | number;
  align?: 'left' | 'right' | 'center';
  sortable?: boolean;
  customSortingName?: string;
};

type Props = {
  columns?: TableColumn[];
  children: React.ReactNode;
  className?: string;
  sortingActionCreator?: (name: string, state: SortState, secondary?: boolean) => Action;
  sortValues?: SortValue[];
};

const Table: React.FunctionComponent<Props> = ({
  columns,
  children,
  className,
  sortingActionCreator,
  sortValues,
}: Props) => {
  const sizes = columns && columns.map(prop => prop.size);
  const alignments = columns && columns.map(prop => prop.align || 'left');

  return (
    <TableWrapper className={className} sizes={sizes} alignments={alignments}>
      <thead>
        {columns && (
          <TableRow noHover>
            {columns.map((column: TableColumn, index: number) => (
              <Th
                key={index}
                column={column}
                sortingActionCreator={sortingActionCreator}
                sortValue={
                  sortValues && sortValues.find(s => s.name === ((column.customSortingName || column.title) as string))
                }
              />
            ))}
          </TableRow>
        )}
      </thead>
      <tbody>{children}</tbody>
    </TableWrapper>
  );
};

const TableWrapper = styled.table<{ sizes?: Array<'auto' | number>; alignments?: Array<'left' | 'right' | 'center'> }>`
  border-collapse: collapse;
  border-spacing: 0px;
  table-layout: fixed;
  width: 100%;

  ${() => media.mobile`
    min-width: 100%;
    width: initial;
    `};

  ${() => media.tablet`
    min-width: 100%;
    width: initial;
    `};

  th {
    color: ${props => props.theme.table.color.header};
    text-align: left;
    padding: 10px 0px 10px 15px;
    text-transform: uppercase;
    font-weight: 500;

    &:first-child {
      border-radius: 7px 0 0 0;
    }
    &:last-child {
      border-radius: 0 7px 0 0;
    }

    ${() => media.laptopSM`
      padding: 4px 0px 4px 4px;
    `};

    ${props =>
      props.sizes &&
      props.sizes.map(
        (size: 'auto' | number, index: number) =>
          css`
            &:nth-child(${index + 1}) {
              ${size !== 'auto' &&
                css`
                  width: ${size}px;
                  min-width: ${size}px;
                `}
            }
          `
      )};
  }

  ${props =>
    props.alignments &&
    props.alignments.map(
      (alignment, index: number) =>
        css`
          td:nth-child(${index + 1}),
          th:nth-child(${index + 1}) {
            text-align: ${alignment};
          }
        `
    )};
`;

export default Table;
