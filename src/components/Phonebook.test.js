import React from 'react';
import { shallow } from "enzyme";

// relative imports
import PhoneBook from './phoneBook'


const initialProps = {
    id: 1,
    firstName: 'Kohli',
    lastName: 'Virat',
    phoneNumber: '99889900'
};

describe('Phonebook Component', () => {
    it('Phonebook Component Rendering', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        expect(PhonebookComponent.exists()).toBe(true);
    });

    it('Phonebook Form Should have 1 Form', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        expect(PhonebookComponent.find("form")).toHaveLength(1);
    });

    it('Phonebook Form Should have 3 Input Fields', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        expect(PhonebookComponent.find("input")).toHaveLength(3);
    });

    it('Phonebook Form Should have 1 Button', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        expect(PhonebookComponent.find("button")).toHaveLength(1);
    });

    it('Phonebook Form Button click works', () => {
        const PhonebookComponent = shallow(<PhoneBook />);
        const button = PhonebookComponent.find("button");
        button.simulate('click');
        expect(button.props('disabled')).toBeTruthy();
    });

    it('should render form with proper props value passed', () => {
        const container = shallow(<PhoneBook {...initialProps} />);
        expect(container.find('input[type="text"]').at(0).prop('value')).toEqual('Kohli');
        expect(container.find('input[type="text"]').at(1).prop('value')).toEqual('Virat');
        expect(container.find('input[type="text"]').at(2).prop('value')).toEqual('99889900');
    });

})