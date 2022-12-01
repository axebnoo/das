import React from 'react';

const MenuDiv = (props) => {
    return (
        <div className='menuDiv'
            onClick={props?.onClick}
            // style={{ backgroundColor: props?.active ? "#3E2FA0" : "#4736B4", height: 65, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexDirection: 'column' }}>
            style={{ backgroundColor: props?.active ? "#3E2FA0" : "#0a466a", height: 65, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexDirection: 'column' }}>
            <div>{props?.icon}</div>
            <div style={{ fontWeight: 400, fontSize: 10, color: '#FFFFFF', lineHeight: 1.4 }}>{props?.title}</div>
        </div>
    );
}

export default MenuDiv;