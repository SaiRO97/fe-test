import React from "react";

interface IProps {
  filename: string;
  filemime: string | undefined;
}

class Files extends React.Component<IProps> {
  render() {
    return (
      <div>
        <div>- name: {this.props.filename}</div>
        {this.props.filemime && (
          <div style={{ marginLeft: "10px" }}>mime: {this.props.filemime}</div>
        )}
      </div>
    );
  }
}

export default Files;
