import React from 'react';

const ChartColumnActive = (props) => {
    return (
        <svg  style={{ fill: 'rgb(255,255,255)' }} class="icon waveChartIcon" name="chart-thumb-vbar" viewBox="0 0 100 100">
            <path d="M67 80c-1.1 0-2-.9-2-2V67c0-1.1.9-2 2-2h3.5c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H67z" fill-opacity=".4"></path>
            <path d="M54.5 80c-1.1 0-2-.9-2-2V52c0-1.1.9-2 2-2H58c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2h-3.5z" fill-opacity=".6"></path>
            <path d="M42 80c-1.1 0-2-.9-2-2V37c0-1.1.9-2 2-2h3.5c1.1 0 2 .9 2 2v41c0 1.1-.9 2-2 2H42z" fill-opacity=".8"></path>
            <path d="M29.5 80c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2H33c1.1 0 2 .9 2 2v56c0 1.1-.9 2-2 2h-3.5z"></path>
        </svg>
    );
}

export default ChartColumnActive;