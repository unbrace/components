import styled from 'styled-components';
import { Add, Minus } from '../icons';

export const PlusButton = styled(Add)`
  position: absolute;
  top: 21px;
  right: 10px;
  cursor: pointer;

  > svg {
    max-width: 17px;
    max-height: 17px;
    fill: ${props => props.theme.palette.neutral.shade4};
  }
`;

export const MinusButton = styled(Minus)`
  position: absolute;
  top: 21px;
  right: 37px;
  cursor: pointer;

  > svg {
    max-width: 17px;
    max-height: 17px;
    fill: ${props => props.theme.palette.neutral.shade4};
  }
`;

export const VerticalLine = styled.div`
  border-top: 1px solid ${props => props.theme.palette.neutral.shade3};
  transform: rotate(90deg);
  width: 39px;
  position: absolute;
  right: 45px;
  top: 28px;
`;
