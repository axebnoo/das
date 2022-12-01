import React, { useState, useEffect } from 'react';
import { PanelType, Persona, PersonaSize, Panel } from '@fluentui/react';
import { Dropdown, Menu } from 'antd';
import MenuBlackIcon from '../SVG/MenuBlackIcon';
import MenuMainIcon from '../SVG/MenuMainIcon';
import MenuBack from '../SVG/MenuBack';
import QuestionIcon from './QuestionIcon';
import NotificationIcon from './NotificationIcon';
import MenuLogo from '../SVG/MenuLogo';
import './Header.css';


const Header = (props) => {

    const [showMenu, setShowMenu] = useState(false);
    const [backPath, setBackPath] = useState();

    useEffect(() => {

        let tBackPath = '';
        if (props?.pathname) {
            let tPath = props?.pathname?.split('/');
            if (tPath.length >= 1) {

                if (props?.type == "next") {
                    if (tPath.length > 3) {
                        tPath.pop();
                        tBackPath = tPath.join('/');
                    }
                } else {
                    if (tPath.length > 4) {
                        tPath.pop();
                        tPath.pop();
                        tBackPath = tPath.join('/');
                    }
                }

            }
        }

        setBackPath(tBackPath);
    }, [props?.pathname]);

    const logOut = () => {
        localStorage.removeItem('userInfo');
        if (props?.type == "next") {
            props.navigate.push("/");
        } else {
            window.location.reload();
        }
    }

    let userComp = (
        <Menu >
            <Menu.Item onClick={() => {
                if (props?.onPasswordChange) {
                    props?.onPasswordChange(true);
                }
            }} key={0}>
                Нууц үг солих
            </Menu.Item>
            <Menu.Item onClick={logOut} key={1}>
                Гарах
            </Menu.Item>
        </Menu >
    );

    const onPressMenu = () => {
        setShowMenu(r => !r);
    }

    const onPressQuestion = () => {

    }

    const onPressBack = () => {
        if (props?.navigate) {
            if (props?.type == "next") {
                props.navigate.push(backPath);
            } else {
                if (props?.location?.state?.backurl) {
                    props.navigate(backPath);
                } else {
                    props.navigate(-1);
                }
            }
        }
    }

    return (
        <div>
            <div style={{
                width: '100%',
                height: '48px',
                // backgroundColor: "#0a466a",
                backgroundColor: "#0A466A",
                // backgroundColor: "#fff",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '14px',
                paddingRight: '16px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {backPath ? (
                        <div onClick={onPressBack} style={{ cursor: 'pointer', marginRight: 16, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                            <MenuBack />
                        </div>
                    ) : null}
                    <div onClick={onPressMenu} style={{ cursor: 'pointer', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <MenuLogo />
                    </div>
                    <div style={{ marginLeft: 22, alignItems: 'center', justifyContent: 'center', display: 'flex', fontSize: 14, fontWeight: 'bold', color: "#FFFFFF" }}>
                        {props?.userInfo?.companyname?.substring(0, 60)}{props?.userInfo?.companyname?.length > 60 && "..."}
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ height: 20, cursor: 'pointer' }}>
                        <NotificationIcon />
                    </div>
                    <div onClick={onPressQuestion} style={{ cursor: 'pointer', height: 20, margin: '0px 16px' }}>
                        <QuestionIcon />
                    </div>
                    {/* <div style={{ cursor: 'pointer' }}>
                        <Dropdown overlay={userComp} trigger={['click']}>
                            <Persona hidePersonaDetails text={props?.userInfo?.userid} size={PersonaSize.size32} />
                        </Dropdown>
                    </div> */}
                </div>
            </div>
            <Panel
                headerText='diwo'
                isOpen={showMenu}
                onDismiss={onPressMenu}
                hasCloseButton={false}
                isLightDismiss={true}
                type={PanelType.smallFixedNear}
                isFooterAtBottom={true}
                onRenderHeader={() => {
                    return (
                        <div onClick={onPressMenu} style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 36, justifyItems: 'center', cursor: 'pointer' }}>
                            <div style={{ marginLeft: 24 }}>
                                <MenuBlackIcon />
                            </div>
                            <div style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 10 }}>
                                diwo
                            </div>
                        </div>
                    );
                }}
            >
                <div onClick={() => {
                    setShowMenu(false);
                }}
                    style={{ display: 'flex', marginBottom: 26, cursor: 'pointer', alignItems: 'center' }}>
                    <div>
                        <MenuMainIcon />
                    </div>
                    <div style={{ marginLeft: 10 }}>
                        Хүний нөөцийн систем
                    </div>
                </div>
            </Panel>
        </div>
    );
}

export default Header;