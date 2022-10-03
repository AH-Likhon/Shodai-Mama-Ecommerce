import React from 'react';
import { GridComponent, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../dummy';
import { Header } from '../components';

const Orders = () => {
    return (
        <div className='my-20 mx-6 lg:m-8 p-4 lg:p-4 rounded-3xl bg-white'>
            <Header category='Page' title='Orders' />
            <GridComponent
                id='gridcomp'
                dataSource={ordersData}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
            // backgroundColor={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <ColumnsDirective>
                    {
                        ordersGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))
                    }
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Page, Edit, ExcelExport, PdfExport]} />
            </GridComponent>
        </div>
    )
}

export default Orders;