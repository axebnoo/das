import React, { useState } from "react";
import PanelLayout from "../../components/PanelLayout";

const DashboardTemp2 = () => {
    const [data, setData] = useState([
        "graph1",
        "graph2",
        "graph3",
        "graph4",
        "graph5",
        "graph6",
        "graph7"
    ]);

    const [layouts, setLayouts] = useState(
        {
            "lg": [
                {
                    "w": 8,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph1"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 8,
                    "y": 0,
                    "i": "graph2"
                },
                {
                    "w": 5,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph3"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 5,
                    "y": 0,
                    "i": "graph4"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 9,
                    "y": 2,
                    "i": "graph5"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 3,
                    "y": 2,
                    "i": "graph6"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 0,
                    "y": 2,
                    "i": "graph7"
                }
            ],
            "md": [
                {
                    "w": 6,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph1"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 6,
                    "y": 0,
                    "i": "graph2"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph3"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 3,
                    "y": 0,
                    "i": "graph4"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 6,
                    "y": 2,
                    "i": "graph5"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 3,
                    "y": 2,
                    "i": "graph6"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 0,
                    "y": 2,
                    "i": "graph7"
                }
            ],
            "sm": [
                {
                    "w": 6,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph1"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph2"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 3,
                    "y": 0,
                    "i": "graph3"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph4"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 3,
                    "y": 2,
                    "i": "graph5"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 0,
                    "y": 2,
                    "i": "graph6"
                },
                {
                    "w": 3,
                    "h": 2,
                    "x": 3,
                    "y": 2,
                    "i": "graph7"
                }
            ],
            "xs": [
                {
                    "w": 4,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph1"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph2"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph3"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 0,
                    "y": 0,
                    "i": "graph4"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 0,
                    "y": 2,
                    "i": "graph5"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 0,
                    "y": 2,
                    "i": "graph6"
                },
                {
                    "w": 4,
                    "h": 2,
                    "x": 0,
                    "y": 2,
                    "i": "graph7"
                }
            ]
        }
    );

    return (
        <div>
            <div style={{
                width: '100%',
                height: '45px',
                backgroundColor: "#fff",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px',
                borderBottom: '1px solid #dfe4e7'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '20.5px', margin: 0 }}>Dashboards</h1>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <Button type="primary" style={{ backgroundColor: '#0275b8', margin: 0 }} onClick={onNewDashboard}>Create dashboard</Button> */}
                </div>
            </div>
            <PanelLayout data={data} layouts={layouts} />
        </div>
    );
}


export default DashboardTemp2;