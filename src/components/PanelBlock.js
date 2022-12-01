import React from "react";
import PropTypes from "prop-types";
import { Funnel, Pie, Line, Column, Area, Bar } from '@ant-design/plots';

const PanelBlock = ({ type, data, width, height }) => {

    data = [
        {
            year: '1999',
            value: 15,
            type: 'A',
            sales: '38',
            time: '2010-01'
        },
        {
            year: '1991',
            value: 3,
            type: 'B',
            sales: '52',
            time: '2010-02'
        },
        {
            year: '1990',
            value: 3,
            type: 'C',
            sales: '52',
            time: '2010-03'
        }
        ,
        {
            year: '1999',
            value: 3,
            type: 'D',
            sales: '52',
            time: '2010-04'
        }
    ];

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
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
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
        xField: 'clock',
        yField: 'value',
        xAxis: {
            range: [0, 1, 2, 3, 4, 5],
        }
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
        case "Pie":
            return (
                <div style={{ width: width, height: height }}>
                    <Pie {...configPie} />
                </div>
            );
        case "line":
            return (
                <div style={{ width: width, height: height }}>
                    <Line {...configLine} />
                </div>
            );
        case "Bar":
            return (
                <div style={{ width: width, height: height }}>
                    <Column {...configColumn} />
                </div>
            );
        case "Area":
            return (
                <div style={{ width: width, height: height }}>
                    <Area {...configArea} />
                </div>
            );
        case "StackedBar":
            return (
                <div style={{ width: width, height: height }}>
                    <Bar {...configStackedBar} />
                </div>
            );
        case "StackedColumn":
            return (
                <div style={{ width: width, height: height }}>
                    <Column {...configStackedColumn} />
                </div>
            );
        default:
            return null;
    }

};

PanelBlock.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};

export default PanelBlock;