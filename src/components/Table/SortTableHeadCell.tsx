import * as React from 'react';
import { CellProps, TableHeadCellWithIcon } from './styles';
import { ArrowDown } from '../icons';

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
  OFF = 'OFF',
}

type Props = {
  children: React.ReactNode | React.ReactNode[];
  active?: boolean;
  sortOrder?: SortOrder;
  onClick?: () => void | ((event: MouseEvent) => void);
} & CellProps;

const SortTableHeadCell: React.FC<Props> = ({ children, sortOrder, ...rest }: Props) => {
  return (
    <TableHeadCellWithIcon {...rest} hiddenIcon={sortOrder === SortOrder.OFF}>
      {rest.align === 'right' ? (
        <span>
          {rest.active && <ArrowDown className="sort-icon" isRotated={sortOrder !== SortOrder.ASC} />}
          {children}
        </span>
      ) : (
        <span>
          {children}
          {rest.active && <ArrowDown className="sort-icon" isRotated={sortOrder !== SortOrder.ASC} />}
        </span>
      )}
    </TableHeadCellWithIcon>
  );
};

export { SortTableHeadCell };
