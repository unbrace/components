import * as React from 'react';
import { Table, SubRowTableRow } from './styles';

type Props = {
  colSpan: number;
  children: React.ReactNode | React.ReactNode[];
  gutter: number | { left: number; bottom: number };
};

const SubRows: React.FC<Props> = ({ colSpan, gutter, children }: Props) => {
  const left = typeof gutter === 'number' ? gutter : gutter.left;
  const bottom = typeof gutter === 'number' ? gutter : gutter.bottom;

  return (
    <SubRowTableRow isStatic>
      <td colSpan={colSpan} style={{ paddingLeft: left, paddingBottom: bottom }}>
        <Table>{children}</Table>
      </td>
    </SubRowTableRow>
  );
};

export { SubRows };
