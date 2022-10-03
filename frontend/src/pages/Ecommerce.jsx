import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { Stacked, PieChart, Button, SparkLine, LineChart } from '../components';
import { useStateContext } from '../contexts/Provider';

import { earningData, SparkLineData, dropdownData, ecomPieChartData, SparklineAreaData, recentTransactions, weeklyStats, medicalproBranding } from '../dummy';

const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
);

const Ecommerce = () => {
    const { currentColor, currentMode } = useStateContext();
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
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-6 p-4 rounded-2xl md:w-full shadow-2xl'>
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

                <div className='flex flex-wrap justify-center items-center gap-8'>
                    <div
                        className=" rounded-2xl w-500 p-4 m-3 shadow-2xl"
                        style={{ backgroundColor: currentColor }}
                    >
                        <div className="flex justify-between items-center ">
                            <p className="font-semibold text-white text-2xl">Earnings</p>

                            <div>
                                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                                <p className="text-gray-200">Monthly revenue</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                        </div>
                    </div>

                    <div className="dark:text-gray-200 bg-white shadow-2xl dark:bg-secondary-dark-bg rounded-2xl w-500 p-10 m-3 flex justify-center items-center gap-10">
                        <div>
                            <p className="text-2xl font-semibold ">$43,246</p>
                            <p className="text-gray-400">Yearly sales</p>
                        </div>

                        <div className="w-40">
                            <PieChart
                                id="chart-pie"
                                data={ecomPieChartData}
                                legendVisiblity={false}
                                height="160px"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-10 m-4 mt-10 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl shadow-2xl w-500">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-xl font-semibold">Recent Transactions</p>
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className="mt-10 w-72 md:w-400">
                        {recentTransactions.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        style={{
                                            color: item.iconColor,
                                            backgroundColor: item.iconBg,
                                        }}
                                        className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                        <div className="mt-3">
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Add"
                                borderRadius="10px"
                            />
                        </div>

                        <p className="text-gray-400 text-sm">36 Recent Transactions</p>
                    </div>
                </div>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-500 shadow-2xl">
                    <div className="flex justify-between items-center gap-2 mb-10">
                        <p className="text-xl font-semibold">Sales Overview</p>
                        <DropDown currentMode={currentMode} />
                    </div>
                    <div className="md:w-full overflow-auto">
                        <LineChart />
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap justify-center m-10 gap-10">
                <div className="w-500 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 shadow-2xl">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Weekly Stats</p>
                        <button type="button" className="text-xl font-semibold text-gray-500">
                            <IoIosMore />
                        </button>
                    </div>

                    <div className="mt-10 ">
                        {weeklyStats.map((item) => (
                            <div key={item.title} className="flex justify-between mt-4 w-full">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        style={{ background: item.iconBg }}
                                        className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                                    >
                                        {item.icon}
                                    </button>
                                    <div>
                                        <p className="text-md font-semibold">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>

                                <p className={`text-${item.pcColor}`}>{item.amount}</p>
                            </div>
                        ))}
                        <div className="mt-4">
                            <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                        </div>
                    </div>

                </div>
                <div className="w-500 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 shadow-2xl">
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">MedicalPro Branding</p>
                        <button type="button" className="text-xl font-semibold text-gray-400">
                            <IoIosMore />
                        </button>
                    </div>
                    <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
                        16 APR, 2021
                    </p>

                    <div className="flex gap-4 border-b-1 border-color mt-6">
                        {medicalproBranding.data.map((item) => (
                            <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                                <p className="text-xs text-gray-400">{item.title}</p>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-b-1 border-color pb-4 mt-2">
                        <p className="text-md font-semibold mb-2">Teams</p>

                        <div className="flex gap-4">
                            {medicalproBranding.teams.map((item) => (
                                <p
                                    key={item.name}
                                    style={{ background: item.color }}
                                    className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                                >
                                    {item.name}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="text-md font-semibold mb-2">Leaders</p>
                        <div className="flex gap-4">
                            {medicalproBranding.leaders.map((item, index) => (
                                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-5 border-t-1 border-color">
                        <div className="mt-3">
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Add"
                                borderRadius="10px"
                            />
                        </div>

                        <p className="text-gray-400 text-sm">36 Recent Transactions</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ecommerce;