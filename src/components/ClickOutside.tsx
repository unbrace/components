import * as React from "react";

export interface Props {
  clickOutsideHandler: () => void;
}

export default class ClickOutside extends React.PureComponent<Props> {
  private wrapperNode: React.RefObject<HTMLDivElement> = React.createRef<
    HTMLDivElement
  >();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: MouseEvent) => {
    if (
      this.wrapperNode &&
      this.wrapperNode.current &&
      event.target instanceof Node &&
      !this.wrapperNode.current.contains(event.target)
    ) {
      this.props.clickOutsideHandler();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    return (
      <div ref={this.wrapperNode} className="clickoutside-wrapper">
        {this.props.children}
      </div>
    );
  }
}
