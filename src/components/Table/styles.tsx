import styled, { css } from 'styled-components';
import { media } from '../../theme/utils';
import { animations } from '../../theme/keyframes';

export type CellProps = {
  align?: 'right' | 'left' | 'center';
  size?: number;
};

export type RowProps = {
  isStatic?: boolean;
  isActive?: boolean;
  enableAnimation?: boolean;
  animate?: boolean;
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

            > * {
              margin-left: ${(alignment === 'right' || alignment === 'center') && 'auto'};
              margin-right: ${(alignment === 'left' || alignment === 'center') && 'auto'};
            }
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
    > td > div.actions {
      display: flex;
    }
  }

  ${props =>
    props.enableAnimation &&
    css`
      animation: ${animations.fadeInSubtle} 0.15s ease-out;

      ${props.animate &&
        css`
          transition: opacity 0.15s ease-out, filter 0.1s ease-out;
          filter: grayscale(90%);
          opacity: 0.2;
        `}
    `}
`;

export const SubRowTableRow = styled(TableRow)`
  + tr > td {
    border-top: ${props => props.theme.table.border.main};
  }

  > td {
    padding-top: 0;
  }
`;

type SubRowTableDataProps = {
  gutterLeft?: number;
  gutterBottom?: number;
  enableAnimation?: boolean;
};

export const SubRowTableData = styled.td<SubRowTableDataProps>`
  padding-left: ${props => (props.gutterLeft ? props.gutterLeft : props.theme.table.padding.gutterLeft)}px;
  padding-bottom: ${props => (props.gutterBottom ? props.gutterBottom : props.theme.table.padding.gutterBottom)}px;

  ${props =>
    props.enableAnimation &&
    css`
      animation: ${animations.flyInMedium} 0.25s ease-out;
    `}
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

            > * {
              margin-left: ${(props.align === 'right' || props.align === 'center') && 'auto'};
              margin-right: ${(props.align === 'left' || props.align === 'center') && 'auto'};
            }
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

type HeadCellWithIconProps = {
  hiddenIcon?: boolean;
  active?: boolean;
};

export const TableHeadCellWithIcon = styled(TableHeadCell)<HeadCellWithIconProps>`
  > span {
    display: flex;
    align-items: center;
    cursor: ${props => (props.active ? 'pointer' : 'default')};
    transition: color 0.2s ease-in;
    justify-content: ${props =>
      props.align === 'right' ? 'flex-end' : props.align === 'center' ? 'center' : 'flex-start'};

    &:hover {
      color: ${props => (props.active ? props.theme.table.color.hover : props.theme.table.color.header)};

      svg.sort-icon {
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

const TableActions = styled.div<{ isInActiveRow?: boolean }>`
  display: none;
  position: absolute;
  height: 100%;
  top: 0;
  right: ${props => props.theme.table.padding.end};
  padding: ${props => props.theme.table.padding.main};
  background: ${props =>
    !props.isInActiveRow ? props.theme.table.background.hover : props.theme.table.background.active};
  min-width: calc(100% - ${props => props.theme.table.padding.end});
  justify-content: flex-end;
  align-items: center;
`;

TableActions.defaultProps = { className: 'actions' };

export { TableActions };
