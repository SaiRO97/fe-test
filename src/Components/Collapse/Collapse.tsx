import { PropsWithChildren, Component } from "react";

import styles from "./collapse.module.css";

interface IProps {
  name: string;
  expandedFolders: string[];
  isOpen: boolean;
  updateExpandedList: (name: string) => boolean;
}

interface IState {
  isCollapseOpen: boolean;
}

class Collapse extends Component<PropsWithChildren<IProps>, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isCollapseOpen: this.props.isOpen,
    };
  }

  changeVisibilityOfCollapse = (isVisible: boolean) => {
    this.setState({
      isCollapseOpen: isVisible,
    });
  };

  componentDidUpdate(prevProps: Readonly<PropsWithChildren<IProps>>): void {
    if (
      JSON.stringify(prevProps.expandedFolders) !==
      JSON.stringify(this.props.expandedFolders)
    ) {
      this.setState({
        isCollapseOpen: this.props.updateExpandedList(this.props.name),
      });
    }
  }

  render() {
    return (
      <div>
        <div
          className={styles.collapse_wrapper}
          onClick={() =>
            this.changeVisibilityOfCollapse(!this.state.isCollapseOpen)
          }
        >
          <div>* {this.props.name}</div>
          <div className={styles.collapse_wrapper_header}>
            {this.state.isCollapseOpen ? "↑" : "↓"}
          </div>
        </div>
        {this.state.isCollapseOpen && this.props.children}
      </div>
    );
  }
}

export default Collapse;
