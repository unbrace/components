import * as React from "react";

interface Props {
  clickOutsideHandler: () => void;
}

export default class ClickOutside extends React.PureComponent<Props> {}
