import * as React from 'react';
import { CellProps, TableHeadCellWithIcon } from './styles';
import { ArrowDown } from '../icons';

export type SortOrder = 'asc' | 'desc' | undefined;

type Props = {
  children: React.ReactNode | React.ReactNode[];
  active?: boolean;
  order: SortOrder;
  onClick?: () => void | ((event: MouseEvent) => void);
} & CellProps;

const SortTableHeadCell: React.FC<Props> = ({ children, active, order, ...rest }: Props) => {
  return (
    <TableHeadCellWithIcon {...rest} hiddenIcon={!order}>
      {rest.align === 'right' ? (
        <span>
          {active && <ArrowDown isRotated={order !== 'asc'} />}
          {children}
        </span>
      ) : (
        <span>
          {children}
          {active && <ArrowDown isRotated={order !== 'asc'} />}
        </span>
      )}
    </TableHeadCellWithIcon>
  );
};

export { SortTableHeadCell };
