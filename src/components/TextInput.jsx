import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    // binding of 'this' in our constructor to our method handleChange is necessary for 'this' to work in handleChange method
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   // console.log(this);
  //   let inputValue = event.target.value;
  //   this.setState({ value: inputValue });
  //   this.props.onChange(inputValue);
  // }

  handleChange = (event) => {
    console.log(this);
    let inputValue = event.target.value;
    this.setState({ value: inputValue });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div className="inputF d-flex flex-column m-4">
        <label className="text-center">{this.props.label}</label>
        <input
          type="text"
          className="my-4"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextInput;