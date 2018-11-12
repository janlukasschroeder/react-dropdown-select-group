import React from "react";
import { Select } from "antd";

const Option = Select.Option;

class Dropdown extends React.Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  handleBlur() {
    console.log("blur");
  }

  handleFocus() {
    console.log("focus");
  }

  render() {
    const {
      options,
      handleChange,
      handleFocus,
      handleBlur,
      placeholder
    } = this.props;

    return (
      <Select
        showSearch
        allowClear={true}
        style={{ width: 200 }}
        placeholder={placeholder || "Select any option"}
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {options &&
          options.map(option => (
            <Option key={option.value} value={option.value}>
              {option.name}
            </Option>
          ))}
      </Select>
    );
  }
}

export default Dropdown;
