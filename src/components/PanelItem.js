import React, { useState } from "react";
import { EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import PanelBlock from "./PanelBlock";
import { Card } from 'antd';

const PanelItem = (props) => {

    const width = parseInt(props.panelStyle.width, 10);
    const height = parseInt(props.panelStyle.height, 10) - 50;

    return (
        <div>
            <Card
                size="small"
                title={props.title}
                style={props.panelStyle}
                className="grid-item__title"
            >
                <PanelBlock type={props.type} data={props.data} width={width - 30} height={height - 30} />
            </Card>
        </div>
    );

}


export default PanelItem;