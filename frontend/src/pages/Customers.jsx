import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../dummy';
import { Header } from '../components';

const Customers = () => {
    return (
        <div className='my-20 mx-6 lg:m-8 p-4 lg:p-6 rounded-3xl bg-white'>
            <Header category='Page' title='Customers' />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{ allowEditing: true, allowDeleting: true }}
                width='auto'
            >
                <ColumnsDirective>
                    {
                        customersGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))
                    }
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    )
}

export default Customers;