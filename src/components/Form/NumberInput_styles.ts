import styled from 'styled-components';
import { Add, Minus } from '../icons';

export const PlusButton = styled(Add)`
  position: absolute;
  cursor: pointer;
  top: 12px;
  left: 34px;

  > svg {
    max-width: 17px;
    max-height: 17px;
    fill: ${props => props.theme.palette.neutral.shade4};
  }
`;

export const MinusButton = styled(Minus)`
  position: absolute;
  cursor: pointer;
  top: 12px;
  left: 10px;

  > svg {
    max-width: 17px;
    max-height: 17px;
    fill: ${props => props.theme.palette.neutral.shade4};
  }
`;

export const VerticalLine = styled.div`
  border-left: ${props => props.theme.form.border.input.main};
  width: 1px;
  height: 100%;
  display: inline-block;
`;

export const Addon = styled.div`
  width: 80px;
  position: absolute;
  display: block;
  height: ${props => props.theme.form.height.input};
  margin: ${props => props.theme.form.margin.main};
  top: 0;
  right: -19px;
`;
