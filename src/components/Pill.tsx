import styled from 'styled-components';

type Props = {
  color?: 'danger' | 'success' | 'warning' | 'primary' | 'secondary' | 'neutral';
  size?: 'm' | 's' | 'xs';
};

export const Pill = styled.span<Props>`
  background: ${props => props.theme.pill.background[props.color || 'neutral']};
  color: ${props => props.theme.pill.color[props.color || 'neutral']};
  border-radius: ${props => props.theme.pill.fontSize[props.size || 'm']};
  padding: ${props => props.theme.pill.padding[props.size || 'm']};
  font-size: ${props => props.theme.pill.fontSize[props.size || 'm']};
  min-width: calc(${props => props.theme.pill.fontSize[props.size || 'm']} * 1.5);
  text-align: center;
  display: inline-block;
  line-height: 1.5;
`;
