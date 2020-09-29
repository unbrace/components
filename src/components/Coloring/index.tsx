import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  variant?: 'faded' | 'success' | 'danger' | 'warning' | 'primary';
} & React.HTMLAttributes<HTMLSpanElement>;

const Coloring = styled.span<Props>`
  ${({ theme, variant }) => css`
    svg {
        ${!variant && `fill: ${theme.palette.neutral.shade7};`}
        ${variant && variant === 'faded' && `fill: ${theme.palette.neutral.shade4};`}
        ${variant && variant === 'warning' && `fill: ${theme.palette.warning.shade6};`}
        ${variant && variant !== 'warning' && variant !== 'faded' && `fill: ${theme.palette[variant].shade4};`}
      }
  `}
`;

export default Coloring;
