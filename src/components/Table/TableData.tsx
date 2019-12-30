import * as React from 'react';
import styled, { css } from '../../config/theme';

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
  colspan?: number;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  textAlign?: 'left' | 'right' | 'center';
};

const TableData: React.FunctionComponent<Props> = ({ children, style, colspan, textAlign, className, onClick }) => {
  return (
    <td onClick={onClick} style={style} className={className} colSpan={colspan}>
      <TableDataWrapper textAlign={textAlign}>{children}</TableDataWrapper>
    </td>
  );
};

const TableDataWrapper = styled.div<{ textAlign?: 'left' | 'right' | 'center' }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${props => props.theme.table.fontSizes.normal};
  color: ${props => props.theme.table.color.primary};
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
    margin-right: 5px;
    flex-shrink: 0;
    color: ${props => props.theme.table.color.prefix};
  }

  .color-secondary {
    color: ${props => props.theme.table.color.secondary};
  }

  .text-clip {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default TableData;
