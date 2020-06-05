import styled from 'styled-components';

type Props = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end';
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap';
  flex?: string | number;
};

const Flexer = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  ${props => props.justify && `justify-content: ${props.justify};`};
  ${props => props.align && `align-items: ${props.align};`};
  ${props => props.wrap && `flex-wrap: ${props.wrap};`};
  ${props => props.flex && `flex: ${props.flex};`};
`;

export default Flexer;
