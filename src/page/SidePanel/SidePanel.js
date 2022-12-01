import React from "react";
// import { Container, AddItem } from "./styles";

// interface Props {
//   onDragStart: (item: any) => void;
// }

const SidePanel = (props) => {
    const { onDragStart } = props;

    return (
        <div style={{ height: '100%', width: '120px', marginRight: '12px' }}>
            <div
                draggable={true}
                onDragStart={() => onDragStart({ i: "dropping", w: 4, h: 3 })}
                style={{
                    height: '48px',
                    width: '120px',
                    lineHeight: '48px',
                    background: 'lightgray',
                    textAlign: 'center',
                    marginBottom: '40px',
                    float: 'left'
                }}
            >
                Add chart
            </div>
            <div
                style={{
                    height: '48px',
                    width: '120px',
                    lineHeight: '48px',
                    background: 'lightgray',
                    textAlign: 'center',
                    marginBottom: '40px',
                    float: 'left'
                }}
                draggable={true}
                onDragStart={() => onDragStart({ i: "dropping", w: 3, h: 1 })}
            >
                Add filter
            </div>
            <div
                style={{
                    height: '48px',
                    width: '120px',
                    lineHeight: '48px',
                    background: 'lightgray',
                    textAlign: 'center',
                    marginBottom: '40px',
                    float: 'left'
                }}
                draggable={true}
                onDragStart={() => onDragStart({ i: "dropping", w: 2, h: 1 })}
            >
                Add Text
            </div>
        </div>
    );
};

export default SidePanel;