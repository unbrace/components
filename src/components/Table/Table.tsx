import * as React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../theme/config';
import { SortValue, TableRow, Th } from './';

export type TableColumn = {
  align?: 'left' | 'right' | 'center';
  customSortingName?: string;
  size: 'auto' | number;
  isSortable?: boolean;
  title: string | React.ReactNode;
};

type Props = {
  children: React.ReactNode;
  className?: string;
  columns?: TableColumn[];
  sortValues?: SortValue[];
};

const Table: React.FunctionComponent<Props> = ({ children, className, columns, sortValues }: Props) => {
  const alignments = columns && columns.map(prop => prop.align || 'left');
  const sizes = columns && columns.map(prop => prop.size);

  return (
    <TableWrapper className={className} sizes={sizes} alignments={alignments}>
      <thead>
        {columns && (
          <TableRow noHover>
            {columns.map((column: TableColumn, index: number) => (
              <Th
                column={column}
                key={index}
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
    font-weight: 500;
    padding: 10px 0px 10px 15px;
    text-align: left;
    text-transform: uppercase;

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
                  min-width: ${size}px;
                  width: ${size}px;
                `}
            }
          `,
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
        `,
    )};
`;

export default Table;
