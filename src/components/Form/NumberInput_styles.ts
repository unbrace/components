import styled from 'styled-components';
import { Add, Minus } from '../icons';

export const PlusButton = styled(Add)<{ numberInputMargin: number }>`
  position: absolute;
  top: ${props => `calc(45px - ${props.numberInputMargin}px)`};
  right: 10px;
  cursor: pointer;

  > svg {
    max-width: 17px;
    max-height: 17px;
    fill: ${props => props.theme.palette.neutral.shade4};
  }
`;

export const MinusButton = styled(Minus)<{ numberInputMargin: number }>`
  position: absolute;
  top: ${props => `calc(45px - ${props.numberInputMargin}px)`};
  right: 37px;
  cursor: pointer;

  > svg {
    max-width: 17px;
    max-height: 17px;
    fill: ${props => props.theme.palette.neutral.shade4};
  }
`;

export const VerticalLine = styled.div<{ numberInputMargin: number }>`
  border-top: 1px solid ${props => props.theme.palette.neutral.shade3};
  transform: rotate(90deg);
  width: 39px;
  position: absolute;
  right: 45px;
  top: ${props => `calc(52px - ${props.numberInputMargin}px)`};
`;
