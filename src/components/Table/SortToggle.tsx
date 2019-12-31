import * as React from 'react';
import styled from 'styled-components';
import { Sort } from '../../icons';
import { IconButton } from '../Button';

export type SortValue = {
  name: string;
  secondary?: boolean;
  state: SortState;
};

type Props = {
  onChange: (name: string, state: SortState, secondary?: boolean) => void;
  value: SortValue;
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
    <IconButton onClick={clickHandler}>
      <ColoredSort sortState={value.state} />
    </IconButton>
  );
};

const ColoredSort = styled(Sort)<{ sortState?: SortState }>`
  svg {
    height: 15px !important;
    width: 15px !important;
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
