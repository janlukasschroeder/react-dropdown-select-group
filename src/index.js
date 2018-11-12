import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";

import Dropdown from "./components/dropdown";

class DropdownGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedType: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(i) {
    console.log(i);
    this.setState({ selectedType: i });
  }

  handleFocus(i) {
    console.log("handleFocus");
    console.log(i);
  }

  optionsMaster = [
    { name: "Role Folder", value: "roleFolder" },
    { name: "Role", value: "role" },
    { name: "Role Instance", value: "roleInstance" },
    { name: "User", value: "user" },
    { name: "Tag", value: "tag" }
  ];

  optionsSlave = {
    roleFolder: [{ name: "Folder A" }, { name: "Folder B" }],
    role: [{ name: "Role A" }, { name: "Role B" }],
    roleInstance: [{ name: "In A" }, { name: "In B" }],
    user: [{ name: "User A" }, { name: "User B" }],
    tag: [{ name: "Tag A" }, { name: "Tag B" }]
  };

  render() {
    return (
      <div>
        <Dropdown
          options={this.optionsMaster}
          handleChange={this.handleChange}
          handleFocus={this.handleFocus}
        />

        {this.state.selectedType && (
          <Dropdown
            options={this.optionsSlave[this.state.selectedType]}
            handleChange={() => ""}
            handleFocus={() => ""}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<DropdownGroup />, document.getElementById("container"));
