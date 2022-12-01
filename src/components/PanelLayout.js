import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import PanelContainer from "./PanelContainer";

const ResponsiveGridLayout = WidthProvider(Responsive);

const PanelLayout = (props) => {
    const { data, layouts } = props;
    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            // onBreakpointChange={this.handleBreakPointChange}
            // onLayoutChange={this.handleLayoutChange}
            isDraggable
            isRearrangeable
            isResizable
            draggableHandle=".grid-item__title"
            breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
            {data.map((item) => (
                <PanelContainer key={item} item={item} />
            ))}
        </ResponsiveGridLayout>

    );
}


export default PanelLayout;