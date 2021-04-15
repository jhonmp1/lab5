import React, { Component } from "react";
import "./PhoneInfo.css";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      number: "010-0000-0000"
    }
  };
  render() {
    const { name, number } = this.props.info;
    return (
      <div className="PhoneInfo">
        <div className="PhoneInfo-name">{name}</div>
        <div className="PhoneInfo-number">{number}</div>
        <button className="PhoneInfo-button-modify">수정</button>
        <button className="PhoneInfo-button-delete">삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;
