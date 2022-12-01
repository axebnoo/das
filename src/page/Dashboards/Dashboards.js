import React, { useState, useEffect, useContext } from 'react';
import { Table, Button, Modal, Row, Col, Tabs, List, Tree } from "antd";
import { API } from '../../API/API';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
const Dashboards = (props) => {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const [dataDashboard, setDataDashboard] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>
    }
  ];

  const onNewDashboard = () => {
    navigate('/dashboardnew');
  };

  const getData = async () => {
    let tData = [];

    await API.post('/zabbix/api_jsonrpc.php',
      {
        "jsonrpc": "2.0",
        "method": "dashboard.get",
        "params": {
          "output": "extend"
        },
        "auth": userInfo.token,
        "id": 1
      }
    ).then(response => {
      if (response.status == 200) {
        tData = response.data.result;
        console.log(response);
      }
    });
    setDataDashboard(tData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
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
          <h1 style={{ fontSize: '20.5px', margin: 0 }}>Dashboards</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button type="primary" style={{ backgroundColor: '#0275b8', margin: 0 }} onClick={onNewDashboard}>Create dashboard</Button>
        </div>
      </div>

      <div style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px' }}>
        <Table
          rowKey={dataDashboard => dataDashboard.dashboardid}
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          dataSource={dataDashboard}
          pagination={false}
        />
      </div>

    </div>
  );
}

export default Dashboards;