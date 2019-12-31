import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
  colspan?: number;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  textAlign?: 'left' | 'right' | 'center';
};

const TableData: React.FunctionComponent<Props> = ({
  children,
  className,
  colspan,
  onClick,
  style,
  textAlign,
}: Props) => {
  return (
    <td onClick={onClick} style={style} className={className} colSpan={colspan}>
      <TableDataWrapper textAlign={textAlign}>{children}</TableDataWrapper>
    </td>
  );
};

const TableDataWrapper = styled.div<{ textAlign?: 'left' | 'right' | 'center' }>`
  color: ${props => props.theme.table.color.primary};
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.table.fontSizes.normal};
  justify-content: center;
  position: relative;
  ${props =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}

  .fs-small {
    font-size: ${props => props.theme.table.fontSizes.small};
  }

  .contact {
    color: ${props => props.theme.table.color.contact};
    word-break: break-word;
  }

  .prefix {
    color: ${props => props.theme.table.color.prefix};
    flex-shrink: 0;
    margin-right: 5px;
  }

  .color-secondary {
    color: ${props => props.theme.table.color.secondary};
  }

  .text-clip {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default TableData;
