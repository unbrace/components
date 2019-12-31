import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { AnimationProps } from '../../theme/types';
import { TableRow } from './TableRow';

type TableRowProps = {
  isActive?: boolean;
  isHighlighted?: boolean;
  isPending?: boolean;
  noHover?: boolean;
} & React.HTMLAttributes<HTMLTableRowElement>;

const TransitionedTableRow: React.FunctionComponent<TableRowProps> = props => (
  <CSSTransition in timeout={200} appear mountOnEnter>
    {state => <HoverableTableRow state={state} {...props} />}
  </CSSTransition>
);

const HoverableTableRow = styled(TableRow)<AnimationProps & TableRowProps>`
  ${props => props.isHighlighted && `background-color: ${props.theme.table.backgroundColor.isActive}`};
  ${props => props.isPending && props.theme.table.tableRowAnimation.entering};
  ${props => props.state === 'entered' && props.theme.table.tableRowAnimation.entered};
  ${props => props.state === 'entering' && props.theme.table.tableRowAnimation.entering};
`;

export default TransitionedTableRow;
