import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, PieChart, Button, SparkLine } from '../components';
import { useStateContext } from '../contexts/Provider';

import { earningData, SparkLineData, ecomPieChartData, SparklineAreaData } from '../dummy';

const Ecommerce = () => {
    const { currentColor } = useStateContext();
    return (
        <div className="mt-24">
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>$63,448.67</p>
                        </div>
                    </div>

                    <div>
                        <Button
                            color='white'
                            bgColor={currentColor}
                            text='Download'
                            borderRadius='10px'
                            size='md'
                        />
                    </div>
                </div>

                <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
                    {
                        earningData.map(data => (
                            <div
                                key={data.title}
                                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-40 p-4 pt-9 rounded-2xl"
                            >
                                <button
                                    type='button'
                                    style={{ color: data.iconColor, backgroundColor: data.iconBg }}
                                    className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                                >
                                    {data.icon}
                                </button>
                                <p className='mt-3'>
                                    <span className='text-lg font-semibold'>
                                        {data.amount}
                                    </span>
                                    <span className={`text-sm text-${data.pcColor} ml-2`}>
                                        {data.percentage}
                                    </span>
                                </p>
                                <p className='text-sm text-gray-400 mt-1'>
                                    {data.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex gap-10 flex-wrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-2 text-gray-800 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot /></span>
                                <span>Expense</span>
                            </p>
                            <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot /></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>

                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                        <div className='border-r-1 border-color mr-4 pr-10'>
                            <div>
                                <p>
                                    <span className='text-2xl font-semibold'>$93,438</span>
                                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                                </p>
                                <p className='text-gray-500 mt-1'>Budget</p>
                            </div>
                            <div className='mt-4'>
                                <p>
                                    <span className='text-2xl font-semibold'>$48,438</span>
                                </p>
                                <p className='text-gray-500 mt-1'>Expense</p>
                            </div>

                            <div className="mt-5">
                                <SparkLine
                                    currentColor={currentColor}
                                    id='line-sparkline'
                                    type='Line'
                                    height='80px'
                                    width='250px'
                                    color={currentColor}
                                    data={SparklineAreaData}
                                />
                            </div>
                            <div className="mt-10">
                                <Button
                                    color='white'
                                    bgColor={currentColor}
                                    text='Download Reprot'
                                    borderRadius='10px'
                                />
                            </div>
                        </div>

                        <div>
                            <Stacked
                                height='360px'
                                width='320px'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ecommerce;