import React from "react";
import PropTypes from "prop-types";
import { Pie, Line, Column, Area, Funnel, Bar } from '@ant-design/plots';

const GraphPanel = ({ type, data, width, height }) => {

    data = [
        {
            year: '1999',
            value: 15,
            type: 'A',
            sales: '38',
        },
        {
            year: '1991',
            value: 3,
            type: 'B',
            sales: '53',
        },
        {
            year: '1990',
            value: 3,
            type: 'C',
            sales: '52',
        },
        {
            year: '1999',
            value: 3,
            type: 'D',
            sales: '52',
        }
    ];

    const configGraph = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'sales',
    };


    const configLine = {
        data,
        padding: 'auto',
        xField: 'time',
        yField: 'value',
        xAxis: {
            tickCount: 10,
        },
    };

    const configPie = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: '',
            },
        },
    };

    const configColumn = {
        data,
        xField: 'type',
        yField: 'value',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        }
    };

    const configArea = {
        data,
        xField: 'type',
        yField: 'value',
        xAxis: {
            range: [0, 1, 2, 3, 4, 5],
        }
    };

    const configFunnel = {
        data: data,
        xField: 'clock',
        yField: 'value',
        legend: false,
    };


    const configStackedBar = {
        data: data.reverse(),
        isStack: true,
        xField: 'value',
        yField: 'year',
        seriesField: 'type',
        label: {
            position: 'middle',
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };

    const configChartBar = {
        data,
        yField: 'year',
        xField: 'value',
        yAxis: {
            label: {
                autoRotate: false,
            },
        },
        scrollbar: {
            type: 'vertical',
        },
    };

    const configStackedColumn = {
        data,
        isStack: true,
        xField: 'year',
        yField: 'value',
        seriesField: 'type',
        label: {
            position: 'middle',
            layout: [
                {
                    type: 'interval-adjust-position',
                },
                {
                    type: 'interval-hide-overlap',
                },
                {
                    type: 'adjust-color',
                },
            ],
        },
    };

    switch (type) {
        case "graph":
            return (
                <Area {...configGraph} />
            );
        case "Pie":
            return (
                <Pie {...configPie} />
            );
        case "line":
            return (
                <Line {...configLine} />
            );
        case "Bar":
            return (
                <Column {...configColumn} />
            );
        case "Area":
            return (
                <Area {...configArea} />
            );
        case "Funnel":
            return (
                <Funnel {...configFunnel} />
            );
        case "StackedBar":
            return (
                <Bar {...configStackedBar} />
            );
        case "StackedColumn":
            return (
                <Column {...configStackedColumn} />
            );
        case "ChartBar":
            return (
                <Bar {...configChartBar} />
            );
        default:
            return null;
    }
};

export default GraphPanel;