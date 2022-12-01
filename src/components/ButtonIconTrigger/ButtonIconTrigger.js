import React from 'react';

const ButtonIconTrigger = (props) => {

    let SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='#fff'>
        <path d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"></path>
    </svg>;

    if (props.collapsed) {
        SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='#fff'>
            <path d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"></path>
        </svg>
    }

    return (
        <button aria-label="Open navigation menu"
            onClick={props.onClick}
            style={{
                width: '24px',
                height: '24px',
                background: '#001529',
                padding: 0,
                margin: 0,
                outline: 'none',
                boxShadow: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '43px',
                right: 0,
                transform: 'translateX(50%)',
                border: '1px solid rgba(204, 204, 220, 0.07)',
                borderRadius: '50%',
                zIndex: 1021
            }}>
            <div class="css-wf08df-Icon" style={{ display: 'inline-block', lineHeight: 0 }}>
                {SVG}
            </div>
        </button>
    );
}

export default ButtonIconTrigger;