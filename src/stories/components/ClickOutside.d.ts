import * as React from "react";
export interface Props {
    clickOutsideHandler: () => void;
}
export default class ClickOutside extends React.PureComponent<Props> {
    private wrapperNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: MouseEvent) => void;
    render(): JSX.Element;
}
