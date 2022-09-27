import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Edit, Toolbar, } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../dummy';
import { Header } from '../components';

const Employees = () => {
    return (
        <div className='my-20 mx-6 lg:m-8 p-4 lg:p-4 rounded-3xl bg-white'>
            <Header category='Page' title='Employees' />
            <GridComponent
                dataSource={employeesData}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width='auto'
            >
                <ColumnsDirective>
                    {
                        employeesGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))
                    }
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Employees;