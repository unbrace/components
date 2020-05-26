import styled, { css } from 'styled-components';

type Props = {
  inlineLabel?: boolean;
} & React.HtmlHTMLAttributes<HTMLLabelElement>;

export const Label = styled.label<Props>`
  align-self: flex-start;
  font-weight: 600;
  text-transform: capitalize;
  ${props =>
    props.inlineLabel &&
    css`
      position: absolute;
      top: ${props.theme.form.top.label.absolute};
      left: ${props.theme.form.left.label.absolute};
      font-weight: normal;
      color: ${props.theme.form.color.input.labelInline};
    `}
`;
