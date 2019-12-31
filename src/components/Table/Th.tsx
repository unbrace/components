import * as React from 'react';
import { FlexRow } from '../Positioning';
import { SortState, SortToggle, SortValue } from './';
import { TableColumn } from './Table';

type Props = {
  column: TableColumn;
  onSortingChange?: () => void;
  sortValue?: SortValue;
};

const Th: React.FunctionComponent<Props> = ({ column, onSortingChange, sortValue }: Props) => (
  <th>
    {column.isSortable && onSortingChange ? (
      <FlexRow justifyContent="space-between" alignItems="center">
        <div>{column.title}</div>
        <SortToggle
          onChange={onSortingChange}
          value={
            sortValue || {
              name: (column.customSortingName || column.title) as string,
              state: SortState.None,
            }
          }
        />
      </FlexRow>
    ) : (
      column.title
    )}
  </th>
);

export default Th;
