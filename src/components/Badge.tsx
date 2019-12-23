import styled, { ThemeContext } from "styled-components";
import React, { useContext } from "react";

type Props = {
  capitalize?: boolean;
  danger?: boolean;
  large?: boolean;
  onlyText?: boolean;
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  xSmall?: boolean;
  success?: boolean;
  warning?: boolean;
};

const defaultTheme = {
  badge: {
    borderRadius: "25px",
    fontSize: "13px",
    fontSizeXSmall: "10px",
    fontWeight: "500",
    padding: "6px 23px",
    paddingLarge: "10px 20px",
    paddingSmall: "4px 14px",

    background: {
      danger: `background-color: #FEE4E3;`,
      primary: `background-color: #E8FBFF;`,
      secondary: `background-color: #F5F7FD;`,
      success: `background-color: #E3FCEF;`,
      warning: `background-color: #FFFFD8;`
    },
    color: {
      danger: `color: #DF5858;`,
      primary: `color: #0093B2;`,
      secondary: `color: #686B82;`,
      success: `color: #188A50;`,
      warning: `color: #C57600;`
    }
  }
};

const Badge: React.FunctionComponent<Props> = (props: Props) => {
  const theme = useContext(ThemeContext);

  return <StyledBadge {...props} theme={theme || defaultTheme} />;
};

const StyledBadge = styled("div")<Props>`
  align-self: center;
  display: inline-block;
  border-radius: ${props => props.theme.badge.borderRadius};
  font-size: ${props =>
    props.xSmall
      ? props.theme.badge.fontSizeXSmall
      : props.theme.badge.fontSize};
  font-weight: ${props => props.theme.badge.fontWeight};
  letter-spacing: ${props => (props.capitalize ? "normal" : "2px")};
  max-height: 100%;
  padding: ${props =>
    props.onlyText
      ? "0px"
      : props.large
      ? props.theme.badge.paddingLarge
      : props.small || props.xSmall
      ? props.theme.badge.paddingSmall
      : props.theme.badge.padding};
  text-align: center;
  text-transform: ${props => (props.capitalize ? "lowercase" : "uppercase")};

  &:first-letter {
    text-transform: ${props => props.capitalize && "uppercase"};
  }

  ${props => props.primary && props.theme.badge.color.primary};
  ${props =>
    props.primary && !props.onlyText && props.theme.badge.background.primary};

  ${props => props.secondary && props.theme.badge.color.secondary}
  ${props =>
    props.secondary &&
    !props.onlyText &&
    props.theme.badge.background.secondary};

  ${props => props.success && props.theme.badge.color.success}
  ${props =>
    props.success && !props.onlyText && props.theme.badge.background.success};

  ${props => props.warning && props.theme.badge.color.warning}
  ${props =>
    props.warning && !props.onlyText && props.theme.badge.background.warning};

  ${props => props.danger && props.theme.badge.color.danger}
  ${props =>
    props.danger && !props.onlyText && props.theme.badge.background.danger};
`;

export default Badge;
