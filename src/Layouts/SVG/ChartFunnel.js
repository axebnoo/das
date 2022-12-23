import React from 'react';

const ChartFunnel = (props) => {
    return (
        <svg style={{ fill: 'rgb(92, 122, 153)' }} name="chart-thumb-funnel" viewBox="0 0 100 100">
            <path d="M78 28H22c-1.5 0-2.5 1.7-1.7 3l2.6 4.5h54.3l2.6-4.5c.7-1.4-.3-3-1.8-3z"></path>
            <path fill-opacity=".8" d="M74.2 40.5H25.8l4.3 7.5h39.8z"></path>
            <path fill-opacity=".6" d="M67.3 52.5H32.7L37 60h26z"></path>
            <path d="M60.4 64.5H39.6l3.7 6.5c.4.6 1 1 1.7 1h9.7c.7 0 1.4-.4 1.7-1l4-6.5z" fill-opacity=".4"></path>
        </svg>
    );
}

export default ChartFunnel;