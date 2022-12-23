import React from 'react';

const ChartStackedColumn = (props) => {
    return (
        <svg style={{ fill: 'rgb(92, 122, 153)' }} name="chart-thumb-stackvbar" viewBox="0 0 100 100">
            <path d="M65 67.5V78c0 1.1.9 2 2 2h3.5c1.1 0 2-.9 2-2V67.5H65zM27.5 72v6c0 1.1.9 2 2 2H33c1.1 0 2-.9 2-2v-6h-7.5z"></path>
            <path d="M27.5 67v2H35v-2c0-1.1-.9-2-2-2h-3.5c-1.1 0-2 .9-2 2zM65 57.3h7.5v7.2H65z" fill-opacity=".8"></path>
            <path d="M65 52v2.2h7.5V52c0-1.1-.9-2-2-2H67c-1.1 0-2 .9-2 2z" fill-opacity=".6"></path>
            <path d="M40 64v14c0 1.1.9 2 2 2h3.5c1.1 0 2-.9 2-2V64H40z"></path>
            <path fill-opacity=".8" d="M40 53h7.5v8H40z"></path>
            <path fill-opacity=".6" d="M40 43h7.5v7H40z"></path>
            <path d="M40 37v3h7.5v-3c0-1.1-.9-2-2-2H42c-1.1 0-2 .9-2 2z" fill-opacity=".4"></path>
            <path fill-opacity=".6" d="M52.5 37.4H60v8.1h-7.5z"></path>
            <path d="M52.5 22v3H60v-3c0-1.1-.9-2-2-2h-3.5c-1.1 0-2 .9-2 2z" fill-opacity=".2"></path>
            <path fill-opacity=".4" d="M52.5 28H60v6.4h-7.5z"></path>
            <path d="M52.5 61v17c0 1.1.9 2 2 2H58c1.1 0 2-.9 2-2V61h-7.5z"></path>
            <path fill-opacity=".8" d="M52.5 48.5H60V58h-7.5z"></path>
        </svg>
    );
}

export default ChartStackedColumn;