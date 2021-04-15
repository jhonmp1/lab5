import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 0;
  state = {
    information: []
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  render() {
    const { information } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        {/* Form */}
        <PhoneForm onCreate={this.handleCreate} />
        {/* Search */}
        {/* List */}
        <PhoneInfoList data={information} />
        <div />
      </div>
    );
  }
}

export default App;
