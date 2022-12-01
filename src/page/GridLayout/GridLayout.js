import React, { useState, useRef, useLayoutEffect } from "react";
import { Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined, RadiusUprightOutlined, SearchOutlined } from "@ant-design/icons";
import { WidthProvider, Responsive } from "react-grid-layout";
import GridBackground from "./GridBackground";
import { Color } from "../../const/Const";

const resizeHanlder = ["s", "w", "n", "e", "sw", "se", "nw", "ne"];

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = (props) => {
    const {
        padding,
        cols,
        rowHeight,
        droppingItem,
        items,
        onEdit,
        onDrop,
        onRemove
    } = props;
    const [width, setWidth] = useState(0);

    const [isHover, setIsHover] = useState(false);


    const onWidthChange = (containerWidth) => {
        setWidth(containerWidth);
    };

    const onLayoutChange = (layout, ...rest) => {
        console.log("layout change: ", layout, rest);
    };

    const onDragStop = (layouts, oldItem, newItem) => {
        console.log("onDragStop: ", layouts, newItem);
    };

    const renderItem = (item) => {
        const { i, layout, children } = item;

        return (
            <div key={i} data-grid={layout}
                style={{
                    background: Color.white,
                    borderRadius: '2px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // outline: '1.4px dashed #44a2f5'
                }}

                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >

                <div style={{ width: '100%', height: '100%', paddingTop: '40px', paddingLeft: '5px', paddingRight: '5px', paddingBottom: '5px' }}>
                    {children}
                </div>

                <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    cursor: 'pointer'
                }}>
                    Title
                </div>


                <div style={{
                    visibility: isHover ? 'visible' : 'hidden',
                    opacity: isHover ? 1 : 0,
                    transition: isHover ? 'visibility 0s linear 0s, opacity 300ms' : 'visibility 0s linear 300ms, opacity 300ms',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer'
                }}>
                    <EditOutlined style={{ fontSize: "12px", padding: '5px', color: '#706e6b' }} />
                    <DeleteOutlined onClick={() => onRemove(i)} style={{ fontSize: "12px", padding: '5px', color: '#706e6b' }} />
                </div>

            </div>
        );
    };

    return (
        <div
            style={{
                position: 'relative',
                minHeight: '400px',
                flexGrow: '1'
            }}
        >
            <GridBackground
                containerWidth={width}
                cols={cols}
                rowHeight={rowHeight}
                padding={padding}
            />

            <ResponsiveReactGridLayout
                resizeHanlder={resizeHanlder}
                margin={padding}
                containerPadding={[0, 0]}
                cols={{ lg: cols }}
                rowHeight={rowHeight}
                breakpoints={{ lg: 600 }}
                compactType={null}
                resizeHandles={["se", "ne", "sw", "nw"]}
                isDroppable={true}
                droppingItem={droppingItem}
                onDragStop={onDragStop}
                // @ts-ignore
                onDrop={onDrop}
                onWidthChange={onWidthChange}
                onLayoutChange={onLayoutChange}
            >
                {items.map(renderItem)}
            </ResponsiveReactGridLayout>
        </div >
    );
};

GridLayout.defaultProps = {
    padding: [16, 16],
    cols: 12,
    rowHeight: 36
};

export default GridLayout;