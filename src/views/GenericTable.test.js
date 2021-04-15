// absolute imports
import React from 'react';
import { shallow } from "enzyme";

// relative imports
import GenericTable from './GenericTable';


const initialProps = {
    title: 'header',
    primaryKey: 'id',
    columns: ['firstName', 'lastName', 'phoneNumber'],
    rowsKeys: ['firstName', 'lastName', 'phoneNumber'],
    data: [
        {
            id: 1,
            firstName: 'K',
            lastName: 'W',
            phoneNumber: '00889900'
        },
        {
            id: 2,
            firstName: 'KL',
            lastName: 'Rahul',
            phoneNumber: '0088677900'
        },
        {
            id: 1,
            firstName: 'Kohli',
            lastName: 'Virat',
            phoneNumber: '99889900'
        }
    ]
};

describe('Table View', () => {
    it('Table View Rendering without any props', () => {
        const TableView = shallow(<GenericTable />);
        expect(TableView.exists()).toBe(true);
    });

    it('Table View Rendering without empty props', () => {
        const TableView = shallow(<GenericTable 
                                    primaryKey={''}
                                    title={''}
                                    columns={[]}
                                    rowsKeys={[]}
                                    data={[]}/>);
        expect(TableView.exists()).toBe(true);
    });

    it('Table View Rendering with props passed', () => {
        const TableView = shallow(<GenericTable 
                                    primaryKey={initialProps.primaryKey}
                                    title={initialProps.title}
                                    columns={initialProps.columns}
                                    rowsKeys={initialProps.rowsKeys}
                                    data={initialProps.data}/>);
        expect(TableView.exists()).toBe(true);
    });

    it('Testing Table render rows right count with props passed', () => {
        const wrapper = shallow(<GenericTable 
                                    primaryKey={initialProps.primaryKey}
                                    title={initialProps.title}
                                    columns={initialProps.columns}
                                    rowsKeys={initialProps.rowsKeys}
                                    data={initialProps.data}/>);
        expect(wrapper.find('tbody').children()).toHaveLength(initialProps.data.length);
    });

    it('Testing Table value testing', () => {
        const wrapper = shallow(<GenericTable 
                                    primaryKey={initialProps.primaryKey}
                                    title={initialProps.title}
                                    columns={initialProps.columns}
                                    rowsKeys={initialProps.rowsKeys}
                                    data={initialProps.data}/>);
        console.log(wrapper.debug());
        // header renders values
        expect(wrapper.find('h2').props().children[1]).toEqual('header');
        // body renders rows
        wrapper.find('td').forEach(node => {
            expect(node.props()).toBeTruthy();
        });

        
    });

})