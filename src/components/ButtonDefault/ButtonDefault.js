import React from 'react';
import { Button } from "antd";
import { Color } from '../../const/Const';

const ButtonDefault = (props) => {

    let vFull = {};
    if (props.full) {
        vFull = {
            width: '100%'
        }
    }

    let vBColor = {
        backgroundColor: Color.blue,
        color: Color.white,
        border: '1px solid #0358A7'
    }

    if (props.disabled == true) {
        vBColor = {
            backgroundColor: Color.grayButton,
            color: Color.white
        }
    }

    return (
        <div>
            <Button disabled={props.disabled == true ? true : false} style={{ ...vBColor, ...vFull }} onClick={props.onClick}>
                {props.text}
            </Button>
        </div>
    );
}

export default ButtonDefault;