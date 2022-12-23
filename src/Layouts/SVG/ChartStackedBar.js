import React from 'react';

const ChartStackedBar = (props) => {
    return (
        <svg style={{ fill: 'rgb(92, 122, 153)' }} name="chart-thumb-stackhbar" viewBox="0 0 100 100">
            <path d="M32.5 65H22c-1.1 0-2 .9-2 2v3.5c0 1.1.9 2 2 2h10.5V65zM28 27.5h-6c-1.1 0-2 .9-2 2V33c0 1.1.9 2 2 2h6v-7.5z"></path>
            <path d="M33 27.5h-2V35h2c1.1 0 2-.9 2-2v-3.5c0-1.1-.9-2-2-2zM35.5 65h7.2v7.5h-7.2z" fill-opacity=".8"></path>
            <path d="M48 65h-2.2v7.5H48c1.1 0 2-.9 2-2V67c0-1.1-.9-2-2-2z" fill-opacity=".6"></path>
            <path d="M36 40H22c-1.1 0-2 .9-2 2v3.5c0 1.1.9 2 2 2h14V40z"></path>
            <path fill-opacity=".8" d="M39 40h8v7.5h-8z"></path>
            <path fill-opacity=".6" d="M50 40h7v7.5h-7z"></path>
            <path d="M63 40h-3v7.5h3c1.1 0 2-.9 2-2V42c0-1.1-.9-2-2-2z" fill-opacity=".4"></path>
            <path fill-opacity=".6" d="M54.5 52.5h8.1V60h-8.1z"></path>
            <path d="M78 52.5h-3V60h3c1.1 0 2-.9 2-2v-3.5c0-1.1-.9-2-2-2z" fill-opacity=".2"></path>
            <path fill-opacity=".4" d="M65.6 52.5H72V60h-6.4z"></path>
            <path d="M39 52.5H22c-1.1 0-2 .9-2 2V58c0 1.1.9 2 2 2h17v-7.5z"></path>
            <path fill-opacity=".8" d="M42 52.5h9.5V60H42z"></path>
        </svg>
    );
}

export default ChartStackedBar;