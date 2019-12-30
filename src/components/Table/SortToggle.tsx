import { IconButton } from 'components';
import { Sort } from 'components/icons';
import * as React from 'react';
import styled from 'styled-components';
import { SortValue } from 'types';

type Props = {
  value: SortValue;
  onChange: (name: string, state: SortState, secondary?: boolean) => void;
};

export enum SortState {
  Asc = 'asc',
  Desc = 'desc',
  None = 'none',
}

const nextState = (currentState: SortState): SortState => {
  switch (currentState) {
    case SortState.Asc:
      return SortState.Desc;

    case SortState.Desc:
      return SortState.None;

    case SortState.None:
      return SortState.Asc;

    default:
      return SortState.None;
  }
};

const SortToggle: React.FunctionComponent<Props> = ({ value, onChange }: Props) => {
  const clickHandler = React.useCallback(
    (e: React.MouseEvent) => onChange(value.name, nextState(value.state), e.shiftKey),
    [value, onChange],
  );

  return (
    <IconButton onClick={clickHandler} tooltip="sort">
      <ColoredSort sortState={value.state} />
    </IconButton>
  );
};

const ColoredSort = styled(Sort)<{ sortState?: SortState }>`
  svg {
    width: 15px !important;
    height: 15px !important;
  }

  path:first-child {
    fill: ${props =>
      props.sortState && props.sortState === SortState.Asc
        ? props.theme.table.color.primary
        : props.theme.table.color.tertiary};
  }
  path:nth-child(2) {
    fill: ${props =>
      props.sortState && props.sortState === SortState.Desc
        ? props.theme.table.color.primary
        : props.theme.table.color.tertiary};
  }
`;

export default SortToggle;
