import React from "react";
import { Data } from "../../Interfaces/data";
import Collapse from "../Collapse";
import Files from "../Files";

interface IProps {
  folders: Data[];
  expandedFolders: string[];
}

class Folders extends React.Component<IProps> {
  openExpandedFolders(name: string) {
    const deepFolders = this.props.expandedFolders
      .filter((folder) => folder.includes("/"))
      .map((folder) => folder.split("/"))
      .flat();

    const mainFolderFilter = this.props.expandedFolders.filter((folder) =>
      folder.includes(name)
    );

    const deepFoldersFilter =
      deepFolders.length > 0 &&
      deepFolders.filter((folder) => folder.includes(name));

    return (
      mainFolderFilter.length > 0 ||
      (deepFoldersFilter && deepFoldersFilter.length > 0)
    );
  }

  renderFolder(children: Data[]): React.ReactNode {
    return children.map((element, index) => (
      <div style={{ paddingLeft: "10px" }} key={index}>
        {element.type === "FOLDER" ? (
          <Collapse
            isOpen={this.openExpandedFolders(element.name)}
            updateExpandedList={(val) => this.openExpandedFolders(val)}
            expandedFolders={this.props.expandedFolders}
            name={element.name}
          >
            {element.children && (
              <div style={{ marginLeft: "20px" }}>
                {this.renderFolder(element.children)}
              </div>
            )}
          </Collapse>
        ) : (
          <Files filename={element.name} filemime={element.mime} />
        )}
      </div>
    ));
  }

  shouldComponentUpdate(nextProps: Readonly<IProps>): boolean {
    if (
      JSON.stringify(nextProps.expandedFolders) ===
      JSON.stringify(this.props.expandedFolders)
    ) {
      return false;
    }

    return true;
  }

  render() {
    return this.renderFolder(this.props.folders);
  }
}

export default Folders;
