import * as React from 'react';
import { Table, SubRowTableRow, SubRowTableData, TableBody } from './styles';

type Props = {
  colSpan: number;
  children: React.ReactNode | React.ReactNode[];
  gutter?: number | { left: number; bottom: number };
};

const SubRows: React.FC<Props> = ({ colSpan, gutter, children, ...rest }: Props) => {
  const left = gutter && (typeof gutter === 'number' ? gutter : gutter.left);
  const bottom = gutter && (typeof gutter === 'number' ? gutter : gutter.bottom);

  return (
    <SubRowTableRow isStatic {...rest}>
      <SubRowTableData colSpan={colSpan} gutterLeft={left} gutterBottom={bottom}>
        <Table>
          <TableBody>{children}</TableBody>
        </Table>
      </SubRowTableData>
    </SubRowTableRow>
  );
};

export { SubRows };
