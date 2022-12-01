import React from 'react';

const ChartBar = (props) => {
    return (
        <svg style={{ fill: 'rgb(92, 122, 153)' }} class="icon waveChartIcon" name="chart-thumb-hbar" viewBox="0 0 100 100">
            <path d="M20 29.5c0-1.1.9-2 2-2h56c1.1 0 2 .9 2 2V33c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-3.5z"></path>
            <path d="M20 42c0-1.1.9-2 2-2h41c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2V42z" fill-opacity=".8"></path>
            <path d="M20 54.5c0-1.1.9-2 2-2h26c1.1 0 2 .9 2 2V58c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-3.5z" fill-opacity=".6"></path>
            <path d="M20 67c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2V67z" fill-opacity=".4"></path>
        </svg>
    );
}

export default ChartBar;