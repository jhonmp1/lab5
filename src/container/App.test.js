// absolute imports
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";

// relative imports
import App from './App';
import PhoneBook from '../components/phoneBook'
import GenericTable from '../views/GenericTable';


it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App Container', () => {
  it('Phonebook Component Rendering', () => {
    const PhonebookComponent = shallow(<PhoneBook />);
    expect(PhonebookComponent.exists()).toBe(true);
  });
  it('Table View Rendering', () => {
    const GenericTableView = shallow(<GenericTable data={[]} />);
    expect(GenericTableView.exists()).toBe(true);
  });

})
