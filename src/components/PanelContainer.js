import React, { useState } from "react";
import PanelItem from "./PanelItem";

import layoutConfig from '../layoutConfig';

const initialState = {
    data: {
        graph1: {
            type: "line",
            title: "Graph 1",
            data: [
                {
                    time: "5:08 AM",
                    value: 3738
                },
                {
                    time: "4:52 PM",
                    value: 2135
                },
                {
                    time: "4:04 AM",
                    value: 2649
                }
            ]
        },
        graph2: {
            type: "Bar",
            title: "Graph 2",
            data: [
                {
                    time: "11:01 PM",
                    value: 2584
                },
                {
                    time: "5:27 AM",
                    value: 4601
                },
                {
                    time: "12:25 AM",
                    value: 2051
                }
            ]
        },
        graph3: {
            type: "Pie",
            title: "Graph 3",
            data: [
                {
                    time: "8:09 AM",
                    value: 4408
                },
                {
                    time: "10:28 AM",
                    value: 3644
                },
                {
                    time: "8:11 PM",
                    value: 4861
                }
            ]
        },
        graph4: {
            type: "area",
            title: "Graph 4",
            data: [
                {
                    time: "8:54 PM",
                    value: 1690
                },
                {
                    time: "10:50 AM",
                    value: 2876
                },
                {
                    time: "2:22 AM",
                    value: 2779
                }]
        },
        graph5: {
            type: "Bar",
            title: "Graph 5",
            data: [
                {
                    time: "10:28 AM",
                    value: 1285
                },
                {
                    time: "4:22 PM",
                    value: 3740
                },
                {
                    time: "1:31 AM",
                    value: 549
                }
            ]
        },
        graph6: {
            type: "Pie",
            title: "Graph 6",
            data: [
                {
                    time: "12:47 AM",
                    value: 4135
                },
                {
                    time: "1:29 PM",
                    value: 2915
                },
                {
                    time: "4:47 AM",
                    value: 119
                }
            ]
        },
        graph7: {
            type: "line",
            title: "Graph 7",
            data: [
                {
                    time: "2:52 PM",
                    value: 2262
                },
                {
                    time: "1:39 PM",
                    value: 4843
                },
                {
                    time: "11:19 PM",
                    value: 4611
                }
            ]
        }
    },
    layouts: layoutConfig,
    breakpoint: "lg"
};



const PanelContainer = (props) => {
    const panelData = initialState.data[props.item];
    return (
        <PanelItem title={panelData.title} type={panelData.type} data={panelData.data} root={props.item} panelStyle={props.style}>
        </PanelItem>
    );
}


export default PanelContainer;