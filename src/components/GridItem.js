import React from "react";
import PropTypes from "prop-types";

import GraphBlock from "./GraphBlock";
import Title from "./Title";
import { Card, Badge, Checkbox } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { setType } from "../actions/app-actions";

const GridItem = ({
  title,
  data,
  type,
  className,
  style,
  dispatch,
  root,
  children,
  ...rest
}) => {

  const width = parseInt(style.width, 10);
  const height = parseInt(style.height, 10) - 50;

  return (

    <div className={`grid-item ${className}`} style={style} {...rest}>
      <div className="grid-item__title">

      </div>
      <div style={{
        width: '100%',
        height: '30px',
        backgroundColor: "#fff",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
      >

        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
          <h4 style={{ color: '#3c5563', fontSize: '15px' }}>{title}</h4>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '30px' }}>
            <SettingOutlined key="setting" />
          </div>
          <div>
            <EllipsisOutlined key="ellipsis" />
          </div>
        </div>
      </div>

      <div className="grid-item__graph">
        <GraphBlock type={type} data={data} width={width} height={height} />
      </div>
      {children}
    </div>

    /*
        <div className={`grid-item ${className}`} style={style} {...rest}>
          <div className="grid-item__title">
            <Title title={title} type={type} root={root} />
          </div>
          <div className="grid-item__graph">
            <GraphBlock type={type} data={data} width={width} height={height} />
          </div>
          {children}
        </div>
    */

  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  root: PropTypes.string.isRequired,
  children: PropTypes.array
};

export default GridItem;
