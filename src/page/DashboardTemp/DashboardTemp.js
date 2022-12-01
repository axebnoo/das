import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

let idCounter = 0;
const getId = () => {
    idCounter++;
    return idCounter.toString();
};

const DashboardTemp = () => {

    const [defaultProps, setDefaultProps] = useState({
        isDraggable: true,
        isResizable: true,
        items: 5,
        rowHeight: 30,
        preventCollision: false,
        cols: 12
    });

    const [layout, setLayout] = useState([]);

    const addNewItem = () => {
        const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };

        if (layout.some(item => item.x === 0 && item.y === 0)) {
            setLayout(layout.map(item => {
                if (item.x === 0) {
                    return { y: item.y++, ...item };
                }
                return item;
            }).concat([newItem])
            )
        } else {
            setLayout(layout.concat([newItem]));
        }
    };

    console.log('layout', layout);
    return (
        <div>
            <button onClick={addNewItem}>Add item</button>
            <ReactGridLayout
                {...defaultProps}
                onLayoutChange={layout => setLayout(layout)}
            >
                {
                    layout.map(item => <div key={item.i} data-grid={item}>
                        <span>{item.i}</span>
                    </div>)
                }

            </ReactGridLayout>
        </div>

    );
}


export default DashboardTemp;