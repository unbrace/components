import { media } from 'config/theme/utils';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ThemedStyledProps } from 'styled-components';
import styled from '../../config/theme';
import { RootTheme } from '../../config/theme/types';
import { AnimationProps } from '../../config/theme/types';

const tableRowProps = (props: ThemedStyledProps<{ active?: boolean; noHover?: boolean }, RootTheme>) => `
  ${!props.noHover ? `cursor: pointer` : `cursor: default`};
  height: ${props.theme.table.rowHeight};
  background-color: ${
    props.active ? props.theme.table.backgroundColor.active : props.theme.table.backgroundColor.normal
  };

  ${props.active && `box-shadow: ${props.theme.table.boxShadow};`}
`;

const tableDataProps = (props: ThemedStyledProps<{}, RootTheme>) => `
  border-bottom: ${props.theme.table.tableBorder};
  border-top: ${props.theme.table.tableBorder};
  padding: 10px 0px 10px 15px;
`;

export const TableRow = styled.tr<{ active?: boolean; noHover?: boolean }>`
  ${tableRowProps};

  &:hover {
    background-color: ${props =>
      props.active
        ? props.theme.table.backgroundColor.active
        : props.noHover
        ? 'inherit'
        : props.theme.table.backgroundColor.hover};

    .actions button:not([disabled]) svg {
      fill: ${props => props.theme.palette.neutral.shade7};
    }
  }

  > td {
    ${tableDataProps};

    ${() => media.laptopSM`
      padding: 4px 0px 4px 4px;
    `};

    &:last-child {
      padding-right: 10px;
      &.actions {
        padding-right: 5px;
      }
    }

    &.actions button:not([disabled]) svg {
      fill: ${props => props.theme.palette.neutral.shade5};
    }

    &.actions button[disabled] svg {
      fill: ${props => props.theme.palette.neutral.shade3};
    }
  }

  .status {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

type SubRowProps = {
  active?: boolean;
};

const BaseSubRow = styled.tr<SubRowProps & AnimationProps>`
  ${tableRowProps};

  > td {
    &:first-child {
      padding: 0 0 0 50px;
    }
  }

  ${props => props.state === 'entering' && props.theme.table.tableSubRowAnimation.entering};
  ${props => props.state === 'entered' && props.theme.table.tableSubRowAnimation.entered};
`;

export const SubRow: React.FunctionComponent<SubRowProps> = (props: SubRowProps) => (
  <CSSTransition in timeout={100} mountOnEnter appear>
    {state => <BaseSubRow state={state} {...props} />}
  </CSSTransition>
);

export const SubTableRow = styled.tr<{ active?: boolean }>`
  ${tableRowProps};

  &:hover {
    background-color: ${props =>
      props.active ? props.theme.table.backgroundColor.active : props.theme.table.backgroundColor.hover};
  }

  td {
    ${tableDataProps};

    &:first-child {
      width: 100%;
    }

    &:nth-child(2) {
      width: 50px;
    }

    &:nth-child(3) {
      width: 150px;
    }

    &:nth-child(4) {
      width: 110px;
    }

    &:last-child {
      text-align: right;
      padding-right: 15px;
      position: relative;
    }

    .status {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .description {
      font-size: ${props => props.theme.table.fontSizes.small};
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
