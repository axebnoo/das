import React from "react";


const HeaderTemp = (props) => {
    return (

        <div style={{
            width: '100%',
            height: '45px',
            backgroundColor: "#fff",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 10px',
            borderBottom: '1px solid #dfe4e7'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* <h1 style={{ fontSize: '20.5px', margin: 0 }}></h1> */}
                {props.title}
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>

                <div
                    style={{
                        display: 'flex',
                        padding: '0px 10px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "rgb(3, 88, 167)",
                        border: "1px solid rgb(3, 88, 167)",
                        borderRadius: '2px'
                    }}
                    // onClick={() => { props.onClick}}
                    onClick={props.onClick}
                    draggable={true}
                // onDragStart={() => onDragStart({ i: "dropping", w: 4, h: 8 })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.8 64" width="24" height="24" class="css-eyx4do">
                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="96.44" y1="83.7" x2="96.44" y2="-9.48"><stop offset="0" stop-color="#FFF23A"></stop><stop offset=".04" stop-color="#FEE62D"></stop><stop offset=".12" stop-color="#FED41A"></stop><stop offset=".2" stop-color="#FDC90F"></stop><stop offset=".28" stop-color="#FDC60B"></stop><stop offset=".67" stop-color="#F28F3F"></stop><stop offset=".89" stop-color="#ED693C"></stop><stop offset="1" stop-color="#E83E39"></stop>
                        </linearGradient>
                        <path fill='#fff' d="M15.2 22.7H1.9c-1.1 0-1.9.9-1.9 1.9v37.5C0 63.2.9 64 1.9 64h13.3c1.1 0 1.9-.9 1.9-1.9V24.6c0-1.1-.8-1.9-1.9-1.9zM36.3 10.2H23c-1.1 0-1.9.9-1.9 1.9v50c0 1.1.9 1.9 1.9 1.9h13.3c1.1 0 1.9-.9 1.9-1.9v-50c0-1-.9-1.9-1.9-1.9zM57.3 32H44c-1.1 0-1.9.9-1.9 1.9V62c0 1.1.9 1.9 1.9 1.9h13.3c1.1 0 1.9-.9 1.9-1.9V34c0-1.1-.8-2-1.9-2zM70.1 38V26.1c0-3.4 2.7-6.1 6.1-6.1h4.1V2c0-1.1-.9-1.9-1.9-1.9H65.1c-1.1-.1-2 .8-2 1.9v60.1c0 1.1.9 1.9 1.9 1.9h13.3c1.1 0 1.9-.9 1.9-1.9v-18h-4.1c-3.2 0-6-2.8-6-6.1z"></path>
                        <path fill="url(#a)" d="M116.7 24.9H103.6V11.8c0-.6-.5-1.1-1.1-1.1h-12c-.6 0-1.1.5-1.1 1.1v13.1H76.2c-.6 0-1.1.5-1.1 1.1v12c0 .6.5 1.1 1.1 1.1h13.2v13.2c0 .6.5 1.1 1.1 1.1h11.9c.6 0 1.1-.5 1.1-1.1V39.1h13.1c.6 0 1.1-.5 1.1-1.1V26.1c.1-.6-.4-1.2-1-1.2z"></path>
                    </svg>

                </div>

            </div>
        </div>

    )
}

export default HeaderTemp;