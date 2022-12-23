import React from 'react';

const ChartDonutActive = (props) => {
    return (
        <svg style={{ fill: 'rgb(255, 255, 255)' }} name="chart-thumb-pie" viewBox="0 0 100 100">
            <path d="M45.1 20C32.3 22 22 32.3 20 45.1c-.2 1.2.8 2.3 2 2.3h11.4c.9 0 1.7-.6 1.9-1.5 1.4-5.2 5.5-9.2 10.6-10.6.9-.2 1.5-1 1.5-1.9V22c0-1.3-1.1-2.2-2.3-2z" fill-opacity=".4"></path>
            <path d="M45.9 64.6c-5.2-1.4-9.2-5.5-10.6-10.6-.2-.9-1-1.5-1.9-1.5H22c-1.2 0-2.2 1.1-2 2.3 2 12.8 12.2 23 25.1 25.1 1.2.2 2.3-.8 2.3-2V66.5c0-.9-.6-1.7-1.5-1.9z" fill-opacity=".6"></path>
            <path d="M64.5 54c-1.4 5.2-5.5 9.2-10.6 10.6-.9.2-1.5 1-1.5 1.9V78c0 1.2 1.1 2.2 2.3 2 12.8-2 23-12.2 25.1-25.1.2-1.2-.8-2.3-2-2.3H66.5c-.9-.1-1.7.5-2 1.4z" fill-opacity=".8"></path>
            <path d="M52.5 22v11.4c0 .9.6 1.7 1.5 1.9 5.2 1.4 9.2 5.5 10.6 10.6.2.9 1 1.5 1.9 1.5H78c1.2 0 2.2-1.1 2-2.3-2-12.8-12.2-23-25.1-25.1-1.3-.2-2.4.7-2.4 2z"></path>
        </svg>
    );
}

export default ChartDonutActive;