import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          placeholder="전화번호"
          name="number"
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
