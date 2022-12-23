import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from 'react-router-dom';
import {
    AreaChartOutlined,
    UserOutlined,
    SearchOutlined,
    HomeOutlined
} from "@ant-design/icons";
import ChartLineActive from "../Layouts/SVG/ChartLineActive";

import Icon from "@ant-design/icons";
import TempIcon from "../Layouts/SVG/TempIcon";


const Siderbar = (props) => {
    const [current, setCurrent] = useState("0");
    const navigate = useNavigate();
    const items = [
        {
            label: <div>Home</div>,
            icon:   <HomeOutlined />,
            key: "0",
        },
        // {
            // label: <div to="/a">Dashboard</div>,
            // icon: <div><AreaChartOutlined /></div>,
            // key: "1",
        // },
        // {
        //     label: <div to="/a">Dashboard</div>,
        //     icon: <AreaChartOutlined />,
        //     key: "2",
        // },
        // ,
        // {
        //     label: <div to="/b">Dashboard</div>,
        //     icon: <AreaChartOutlined />,
        //     key: '3',
        // },
        ,
        {
            label: <div to="/b">Dashboard</div>,
            icon: <AreaChartOutlined />,
            key: '6',
        },
        {
            label: <div to="/b">Search dashboards</div>,
            icon: <SearchOutlined />,
            key: '4',
        },
        {
            label: <div to="/b">Admin</div>,
            icon: <UserOutlined />,
            key: 'submenu',
            children: [{ label: 'Sign out', key: '5' }],
        },
    ];

    const onMenu = (e) => {
        setCurrent(e.key);
        switch (e.key) {
            case "0":
                navigate('/home');
                break;
            case "1":
                navigate('/dashboards');
                break;
            case "2":
                navigate('/dashboardtemp');
                break;
            case "3":
                navigate('/dashboardtemp2');
                break;
            case "4":
                navigate('/searchdashboard');
                break;
            case "6":
                navigate('/dashboard');
                break;
            case "5":
                localStorage.removeItem('userInfo');
                window.location.reload();
                break;
        }
    };

    return (
        <div>
            <div className="logo"></div>
            <Menu theme="dark" mode="inline" onClick={onMenu} defaultSelectedKeys={[current]} selectedKeys={[current]} items={items} />
        </div>
    );

};

export default Siderbar;