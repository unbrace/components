import styled, { ThemeContext } from "styled-components";
import React, { useContext } from "react";
import merge from "lodash.merge";
import { componentTheme } from "../theme";

type Props = {
  isCapitalized?: boolean;
  onlyText?: boolean;
  type?: "danger" | "success" | "warning" | "primary" | "secondary";
  size?: "xsmall" | "small" | "large";
};

const Badge: React.FunctionComponent<Props> = (props: Props) => {
  const providedTheme = useContext(ThemeContext);
  const theme = providedTheme
    ? merge(componentTheme, providedTheme)
    : componentTheme;

  return <StyledBadge {...props} theme={theme} />;
};

const StyledBadge = styled("div")<Props>`
  align-self: center;
  display: inline-block;
  border-radius: ${props => props.theme.badge.borderRadius};
  font-size: ${props =>
    props.size === "xsmall"
      ? props.theme.badge.fontSizeXSmall
      : props.theme.badge.fontSize};
  font-weight: ${props => props.theme.badge.fontWeight};
  letter-spacing: ${props => (props.isCapitalized ? "normal" : "2px")};
  max-height: 100%;
  padding: ${props =>
    props.onlyText
      ? "0px"
      : props.size === "large"
      ? props.theme.badge.paddingLarge
      : props.size === "small" || props.size === "xsmall"
      ? props.theme.badge.paddingSmall
      : props.theme.badge.padding};
  text-align: center;
  text-transform: ${props => (props.isCapitalized ? "lowercase" : "uppercase")};

  &:first-letter {
    text-transform: ${props => props.isCapitalized && "uppercase"};
  }

  ${props => props.type === "primary" && props.theme.badge.color.primary};
  ${props =>
    props.type === "primary" &&
    !props.onlyText &&
    props.theme.badge.background.primary};

  ${props => props.type === "secondary" && props.theme.badge.color.secondary}
  ${props =>
    props.type === "secondary" &&
    !props.onlyText &&
    props.theme.badge.background.secondary};

  ${props => props.type === "success" && props.theme.badge.color.success}
  ${props =>
    props.type === "success" &&
    !props.onlyText &&
    props.theme.badge.background.success};

  ${props => props.type === "warning" && props.theme.badge.color.warning}
  ${props =>
    props.type === "warning" &&
    !props.onlyText &&
    props.theme.badge.background.warning};

  ${props => props.type === "danger" && props.theme.badge.color.danger}
  ${props =>
    props.type === "danger" &&
    !props.onlyText &&
    props.theme.badge.background.danger};
`;

export default Badge;
