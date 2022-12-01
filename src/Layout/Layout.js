import React, { useState } from 'react';
import { Drawer } from 'antd';
import Header from './Header/Header';
import MenuDiv from './MenuDiv/MenuDiv';
import MenuDiwoIcon from './SVG/MenuDiwoIcon';
import MenuHRIcon from './SVG/MenuHRIcon';
import MenuTimeIcon from './SVG/MenuTimeIcon';
import MenuSalaryIcon from './SVG/MenuSalaryIcon';
import MenuReport from './SVG/MenuReport';
import MenuSocial from './SVG/MenuSocial';
import MenuChat from './SVG/MenuChat';
import SubMenuItem from './SubMenuItem/SubMenuItem';
import HrSubMenuEmp from './SVG/HrSubMenuEmp';
import HrSubMenuStructure from './SVG/HrSubMenuStructure';
import HrSubMenuBenefit from './SVG/HrSubMenuBenefit';
import MenuSettings from './SVG/MenuSettings';
import SettingsGrantType from './SVG/SettingsGrantType';
import SettingsGrant from './SVG/SettingsGrant';
import SettingsDeduction from './SVG/SettingsDeduction';

const Layout = (props) => {

    const [menuType, setMenuType] = useState("");
    const [showSubMenu, setShowSubMenu] = useState(false);

    const onNav = (pValue) => {
        setShowSubMenu(false);

        let vRefresh = false;
        if (props?.pathname?.indexOf("/hrsuite") >= 0 && pValue?.indexOf("/pr") >= 0) {
            vRefresh = true;
        }

        if (props?.navigate) {
            if (props?.type == "next") {
                props.navigate.push(pValue)
            } else {
                props.navigate(pValue);
            }
        }

        if (vRefresh) {
            window.location.reload();
        }
    }

    const onSubMenu = (pValue) => {
        setShowSubMenu(true);
        setMenuType(pValue);
    }

    let vMenuPanel = null;

    if (menuType == "hr") {
        vMenuPanel = (
            <div>
                <SubMenuItem onClick={() => onNav("/hrsuite/employee")} icon={<HrSubMenuEmp />} text="Ажилтан" />
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <SubMenuItem onClick={() => onNav("/hrsuite/structure")} icon={<HrSubMenuStructure />} text="Бүтэц" />
                </div>
                <SubMenuItem onClick={() => onNav("/hrsuite/benefit")} icon={<HrSubMenuBenefit />} text="Нэмэгдэл" />
            </div>
        );
    } else if (menuType == "settings") {
        vMenuPanel = (
            <div>
                <SubMenuItem onClick={() => onNav("/hrsuite/settings/granttype")} icon={<SettingsGrantType />} text="Нэмэгдэл төрөл" />
                <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <SubMenuItem onClick={() => onNav("/hrsuite/settings/grant")} icon={<SettingsGrant />} text="Нэмэгдэл" />
                </div>
                <SubMenuItem onClick={() => onNav("/hrsuite/settings/deduction")} icon={<SettingsDeduction />} text="Суутгал" />
            </div>
        );
    }

    return (
        <div style={{ height: '100vh', width: '100wh', display: 'flex', flexDirection: 'column' }}>
            <Header type={props?.type} pathname={props?.pathname} navigate={props?.navigate} onPasswordChange={props?.onPasswordChange} userInfo={props?.userInfo} location={props?.location} />
            <div style={{ display: 'flex', flex: 1 }}>
                <div style={{ width: 55, backgroundColor: "#09466A", display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1 }}>
                        {/* <MenuDiv active={props?.pathname?.indexOf("/hrsuite/home") >= 0} onClick={() => onNav("/hrsuite/home")} icon={<MenuDiwoIcon />} title="" /> */}
                        <MenuDiv active={(props?.pathname?.indexOf("/hrsuite") >= 0
                            && props?.pathname?.indexOf("/hrsuite/home") < 0
                            && props?.pathname?.indexOf("/hrsuite/report") < 0
                            && props?.pathname?.indexOf("/hrsuite/social") < 0
                            && props?.pathname?.indexOf("/hrsuite/chat") < 0
                            && props?.pathname?.indexOf("/hrsuite/settings") < 0)} onClick={() => onSubMenu("hr")} icon={<MenuHRIcon />} title="" />
                        <MenuDiv active={props?.pathname?.indexOf("/pr/timedata") >= 0} onClick={() => onNav("/pr/timedata")} icon={<MenuTimeIcon />} title="" />
                        <MenuDiv active={props?.pathname?.indexOf("/pr/salary") >= 0} onClick={() => onNav("/pr/salary")} icon={<MenuSalaryIcon />} title="" />
                        <MenuDiv active={props?.pathname?.indexOf("/hrsuite/report") >= 0} onClick={() => onNav("/hrsuite/report")} icon={<MenuReport />} title="" />
                        <div style={{ borderBottom: '1px solid rgba(239, 239, 239, 0.3)', margin: "20px 15px" }}>
                            
                        </div>
                            <MenuDiv active={props?.pathname?.indexOf("/hrsuite/social") >= 0} onClick={() => onNav("/hrsuite/social")} icon={<MenuSocial />} title="" />
                        {/* <MenuDiv active={props?.pathname?.indexOf("/hrsuite/chat") >= 0} onClick={() => onNav("/hrsuite/chat")} icon={<MenuChat />} title="" /> */}
                    </div>
                    {/* <div>
                        <MenuDiv active={props?.pathname?.indexOf("/hrsuite/settings") >= 0} onClick={() => onSubMenu("settings")} icon={<MenuSettings />} title="Тохиргоо" />
                    </div> */}
                </div>
                <div style={{ flex: 1, overflow: 'auto', position: 'relative' }}>
                    <Drawer
                        width={191}
                        placement="left"
                        closable={false}
                        onClose={() => { setShowSubMenu(false); }}
                        visible={showSubMenu}
                        getContainer={false}
                        style={{ position: 'absolute' }}
                    >
                        {vMenuPanel}
                    </Drawer>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;