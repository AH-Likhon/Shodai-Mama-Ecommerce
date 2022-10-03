import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../dummy';
import { useStateContext } from '../../contexts/Provider';
import { ChartsHeader } from '../../components';

const Area = () => {
    const { currentMode } = useStateContext();

    return (
        <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
            <ChartsHeader category='Area' title='Inflation Rate in percentage' />
            <div className='w-full'>
                <ChartComponent
                    id='area-chart'
                    height='420px'
                    width='98%'
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                    legendSettings={{ background: 'white' }}
                >
                    <Inject services={[SplineAreaSeries, DateTime, Legend,]} />
                    <SeriesCollectionDirective>
                        {
                            areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
                        }
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default Area;