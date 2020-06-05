import styled from 'styled-components';

type Props = {
  margin?: string;
};

const Divider = styled.hr<Props>`
  border: none;
  border-top: 1px solid ${props => props.theme.palette.neutral.shade3};
  ${props => props.margin && `margin: ${props.margin}`}
`;

export default Divider;
