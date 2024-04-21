import React from "react";
import jsonData from "./data/Data.json";
import { Data } from "./Interfaces/data";
import { generateFilePathBySearchResult } from "./utils/deepSearch";
import { runSpiralOnMatrix } from "./utils/matrix";
import { myParseInt } from "./utils/myParseInt";
import Folders from "./Components/Folders/Folders";

import "./App.css";

class App extends React.Component<
  {},
  {
    data: Data[];
    searchValue: string;
    filePathForCollapse: null | string[];
  }
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      data: Object.values(jsonData),
      searchValue: "",
      filePathForCollapse: null,
    };
  }

  submitSearch = () => {
    const result = generateFilePathBySearchResult(
      this.state.data,
      this.state.searchValue
    );

    this.setState({
      filePathForCollapse: result ?? [],
    });
  };

  componentDidMount() {
    //task 1
    console.log(myParseInt("something"));
    console.log(myParseInt("4"));

    //task 2
    console.log(runSpiralOnMatrix(4, 4));
    console.log(runSpiralOnMatrix(3, 3));
  }

  render() {
    return (
      <div className="App">
        <div className="search_wrapper">
          <input
            className="search_wrapper-input"
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                this.setState({
                  searchValue: this.state.searchValue,
                });
              }
            }}
            value={this.state.searchValue}
            onChange={(event) => {
              this.setState({
                searchValue: event.target.value,
              });
            }}
          />
          <button className="search_wrapper-btn" onClick={this.submitSearch}>
            Search
          </button>
        </div>
        <Folders
          expandedFolders={
            this.state.filePathForCollapse ?? ["Common7/IDE", "VC/bin/1033"]
          }
          folders={this.state.data}
        />
      </div>
    );
  }
}

export default App;
