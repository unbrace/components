import styled, { css } from 'styled-components';
import { media } from '../../theme/utils';

export type CellProps = {
  align?: 'right' | 'left' | 'center';
  size?: number;
};

export type RowProps = {
  isStatic?: boolean;
  isActive?: boolean;
};

type TableProps = {
  alignments?: Array<'right' | 'left' | 'center' | undefined>;
};

export const Table = styled.table<TableProps>`
  border-collapse: collapse;
  table-layout: fixed;
  display: table;
  border-spacing: 0px;
  width: 100%;

  ${props =>
    props.alignments &&
    props.alignments.map(
      (alignment, index: number) =>
        alignment &&
        css`
          td:nth-child(${index + 1}) {
            text-align: ${alignment};
          }
        `,
    )};

  ${() => media.mobile`
    min-width: 100%;
    width: initial;
    `};

  ${() => media.tablet`
    min-width: 100%;
    width: initial;
    `};
`;

export const TableHead = styled.thead`
  display: table-header-group;
`;

export const TableBody = styled.tbody`
  display: table-row-group;
`;

export const TableRow = styled.tr<RowProps>`
  height: ${props => props.theme.table.height.row};
  background: ${props => (!props.isActive ? props.theme.table.background.main : props.theme.table.background.active)};
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  ${props =>
    !props.isStatic &&
    css<RowProps>`
      &:hover {
        background: ${props =>
          !props.isActive ? props.theme.table.background.hover : props.theme.table.background.active};
      }
    `}

  &:hover {
    td div.actions {
      display: flex;
    }
  }
`;

export const SubRowTableRow = styled(TableRow)`
  + tr > td {
    border-top: ${props => props.theme.table.border.main};
  }

  > td {
    padding-top: 0;
  }
`;

const tableCellProps = css<CellProps>`
  padding: ${props => props.theme.table.padding.main};
  border-bottom: ${props => props.theme.table.border.main};

  &:last-child {
    padding-right: ${props => props.theme.table.padding.end};
  }

  ${props =>
    props.align
      ? css`
          &&& {
            text-align: ${props.align || 'left'};
          }
        `
      : 'text-align: left;'}

  ${props =>
    props.size &&
    css`
      min-width: ${props.size}px;
      width: ${props.size}px;
    `}
`;

export const TableHeadCell = styled.th`
  color: ${props => props.theme.table.color.header};
  font-size: ${props => props.theme.table.fontSize.main};
  text-transform: uppercase;
  font-weight: 500;

  ${tableCellProps};
`;

export const TableHeadCellWithIcon = styled(TableHeadCell)<{ hiddenIcon?: boolean }>`
  > span {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.2s ease-in;
    justify-content: ${props =>
      props.align === 'right' ? 'flex-end' : props.align === 'center' ? 'center' : 'flex-start'};

    &:hover {
      color: ${props => props.theme.table.color.hover};

      svg {
        fill: ${props => (props.hiddenIcon ? props.theme.table.color.hoverInactive : props.theme.table.color.hover)};
      }
    }
  }

  svg {
    margin: 0 8px;
    transition: fill 0.2s ease-in;
    fill: ${props => (props.hiddenIcon ? 'transparent' : props.theme.table.color.header)};
    width: ${props => props.theme.table.fontSize.main};
    height: ${props => props.theme.table.fontSize.main};
  }
`;

export const TableCell = styled.td`
  position: relative;
  font-size: ${props => props.theme.table.fontSize.cell};
  color: ${props => props.theme.table.color.cell};

  ${tableCellProps};
`;

const TableActions = styled.div`
  display: none;
  position: absolute;
  height: 100%;
  top: 0;
  right: ${props => props.theme.table.padding.end};
  padding: ${props => props.theme.table.padding.main};
  background: ${props => props.theme.table.background.hover};
  min-width: calc(100% - ${props => props.theme.table.padding.end});
  justify-content: flex-end;
`;

TableActions.defaultProps = { className: 'actions' };

export { TableActions };
