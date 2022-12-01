import React from 'react';

const SubMenuItem = (props) => {
    return (
        <div onClick={props?.onClick} style={{ display: 'flex', cursor: 'pointer' }}>
            <div>{props?.icon}</div>
            <div style={{ fontWeight: 400, fontSize: 14, color: '#212121', marginLeft: 10 }}>{props?.text}</div>
        </div>
    );
}

export default SubMenuItem;