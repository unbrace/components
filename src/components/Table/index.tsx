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

type TableColumn = {
  id: number | string;
  content?: string | React.ReactNode;
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

const Table: React.FC<Props> = ({ columns, data, isStatic, children, ...rest }: Props) => {
  const alignments = columns?.map(col => col.align);

  return (
    <TableLayout alignments={alignments} {...rest}>
      {columns && (
        <TableHead>
          <TableRow isStatic>
            {columns.map((header, index) => (
              <TableHeadCell align={header.align} size={header.size} key={`${index}-${header.id}`}>
                {header.content}
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
      )}
      {data && (
        <TableBody>
          {data.map((row, index) => (
            <TableRow isStatic={isStatic} key={`${index}-${row.id}`}>
              {row.cells.map((cell, cellIndex) => (
                <TableCell align={alignments?.[cellIndex]} key={`${index}-${cellIndex}`}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      )}
      {!data && children}
    </TableLayout>
  );
};

export default Table;
export { TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableActions };
