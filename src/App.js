import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from "antd";
import { UserContext } from './context/UserContext';
import Siderbar from './Siderbar/Siderbar';
import ButtonIconTrigger from './components/ButtonIconTrigger/ButtonIconTrigger';

/* Pages */
import Login from './page/Login/Login';
import Dashboards from './page/Dashboards/Dashboards';
import DashboardNew from './page/Dashboards/New/DashboardNew';
import Home from './page/Home/Home';
import SearchDashboard from './page/SearchDashboard/SearchDashboard';
import DashboardTemp from './page/DashboardTemp/DashboardTemp';
import DashboardTemp2 from './page/DashboardTemp2/DashboardTemp2';
import Dashboard from './page/Dashboard/Dashboard';

const { Sider, Content } = Layout;
const history = createBrowserHistory();

const App = () => {

  const [userInfo, setUserInfo] = useState({});
  const [collapsed, setCollapsed] = useState(true);

  const setUser = (p_userid, p_token, p_isauth) => {

    localStorage.setItem('userInfo', JSON.stringify({
      userid: p_userid,
      token: p_token,
      isauth: p_isauth,
    }));

    setUserInfo({
      userid: p_userid,
      token: p_token,
      isauth: p_isauth,
    });

  }

  const getUserData = () => {
    let userInfoResp = localStorage.getItem('userInfo');
    let userInfo = {};
    if (userInfoResp) {
      userInfo = JSON.parse(userInfoResp);
      setUserInfo({ ...userInfo });
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
      <UserContext.Provider value={{ userInfo, setUser }}>
        <Router history={history}>
          {userInfo.isauth ? (
            <Layout>
              <Sider
                collapsible
                collapsedWidth={"57px"}
                collapsed={collapsed}
                onCollapse={() => setCollapsed(!collapsed)}
                style={{
                  overflow: "auto",
                  height: "100vh",
                  position: "sticky",
                  top: 0,
                  left: 0,
                }}
              >
                <Siderbar collapsed={collapsed}/>
              </Sider>
              <Layout style={{ backgroundColor: '#F0F2F5' }}>

                {/* <div style={{ position: 'absolute' }}>
                      {collapsed ?
                        <ButtonIconTrigger onClick={() => setCollapsed(!collapsed)} collapsed />
                        : <ButtonIconTrigger onClick={() => setCollapsed(!collapsed)} />}
                    </div> 
                */}

                <Content>
                  <Routes>
                    <Route path='/dashboardnew' element={<DashboardNew />} />
                    <Route path="/dashboards" element={<Dashboards />} />
                    <Route path='/dashboardtemp' element={<DashboardTemp />} />
                    <Route path='/dashboardtemp2' element={<DashboardTemp2 />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path="/searchdashboard" element={<SearchDashboard />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                  </Routes>
                </Content>

              </Layout>
            </Layout>
          ) : (
            <Login />
          )}
        </Router>
      </UserContext.Provider>
  );
}

export default App;