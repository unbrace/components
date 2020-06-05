import styled from 'styled-components';

type Props = {
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  top?: boolean;
  spacious?: boolean;
};

const Spacer = styled.div<Props>`
  margin-left: ${props => (props.left ? (props.spacious ? 32 : 16) : 0)}px;
  margin-right: ${props => (props.right ? (props.spacious ? 32 : 16) : 0)}px;
  margin-bottom: ${props => (props.bottom ? (props.spacious ? 32 : 16) : 0)}px;
  margin-top: ${props => (props.top ? (props.spacious ? 32 : 16) : 0)}px;
`;

export default Spacer;
