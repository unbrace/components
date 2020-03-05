import * as React from 'react';
import {
  Table as TableLayout,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TableActions,
  CellProps,
  RowProps,
} from './styles';
import { SortOrder, SortTableHeadCell } from './SortTableHeadCell';

type TableColumn = {
  id: number | string;
  content?: string | React.ReactNode;
  onSort?: () => void | ((event: MouseEvent) => void);
  sortOrder?: SortOrder;
} & CellProps;

type TableData = {
  id: number;
  cells: Array<string | number | React.ReactNode>;
};

type Props = {
  columns?: TableColumn[];
  data?: TableData[];
  children?: React.ReactNode;
} & RowProps;

const Table: React.FC<Props> = ({ columns, data, isStatic, enableAnimation, animate, children, ...rest }: Props) => {
  const alignments = columns?.map(col => col.align);

  return (
    <TableLayout alignments={alignments} {...rest}>
      {columns && (
        <TableHead>
          <TableRow isStatic>
            {columns.map((header, index) =>
              header.onSort && header.sortOrder ? (
                <SortTableHeadCell
                  active
                  onClick={header.onSort}
                  sortOrder={header.sortOrder}
                  align={header.align}
                  size={header.size}
                  key={`${index}-${header.id}`}
                >
                  {header.content}
                </SortTableHeadCell>
              ) : (
                <TableHeadCell align={header.align} size={header.size} key={`${index}-${header.id}`}>
                  {header.content}
                </TableHeadCell>
              ),
            )}
          </TableRow>
        </TableHead>
      )}
      {data && (
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              isStatic={isStatic}
              key={`${index}-${row.id}`}
              enableAnimation={enableAnimation}
              animate={animate}
            >
              {row.cells.map((cell, cellIndex) => (
                <TableCell align={alignments?.[cellIndex]} key={`${index}-${cellIndex}`}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      )}
      {!data && !columns ? children : !data ? <TableBody>{children}</TableBody> : null}
    </TableLayout>
  );
};

export default Table;
export { SubRows } from './SubRows';
export { SortTableHeadCell, SortOrder } from './SortTableHeadCell';
export { TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableActions };
