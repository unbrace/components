import { FlexRow, SortToggle } from 'components';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { SortValue } from 'types';
import { Action } from 'typesafe-actions';
import { SortState } from './SortToggle';
import { TableColumn } from './Table';

type Props = {
  column: TableColumn;
  sortingActionCreator?: (name: string, state: SortState, secondary?: boolean) => Action;
  sortValue?: SortValue;
};

const Th: React.FunctionComponent<Props> = ({ column, sortingActionCreator, sortValue }: Props) => {
  const dispatch = useDispatch();
  const changeHandler = React.useCallback(
    (name: string, state: SortState, secondary?: boolean) => {
      if (sortingActionCreator && column.sortable) {
        dispatch(sortingActionCreator(name, state, secondary));
      }
    },
    [sortingActionCreator, dispatch, column.sortable]
  );

  return (
    <th>
      {column.sortable ? (
        <FlexRow justifyContent="space-between" alignItems="center">
          <div>{column.title}</div>
          <SortToggle
            onChange={changeHandler}
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
};

export default Th;
