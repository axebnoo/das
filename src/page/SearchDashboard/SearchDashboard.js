import React, { useState, useEffect, useContext } from "react";
import { API } from "../../API/API";
import { Input, Collapse, Select, Space, Table, Tag, Button } from 'antd';
import { SettingOutlined, FolderOutlined, FolderOpenOutlined, DownOutlined } from '@ant-design/icons';
import { UserContext } from '../../context/UserContext';

const { Panel } = Collapse;
const { Option } = Select;
const text = `
  Text
`;




const SearchDashboard = (props) => {
    const [expandIconPosition, setExpandIconPosition] = useState('start');
    const [showTable, setShowTable] = useState(false);
    const [dataDashboard, setDataDashboard] = useState([]);
    const { userInfo } = useContext(UserContext);

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const handleChangeTable = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (text) => <div>Dashboard</div>,
        },
        {
            title: 'Location',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags'
        }

    ];


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
            console.log(userInfo.token);
            if (response.status == 200) {
                tData = response.data.result;
            }
        });
        setDataDashboard(tData);
    }

    useEffect(() => {
        getData();
    }, []);

    const onPositionChange = (newExpandIconPosition) => {
        setExpandIconPosition(newExpandIconPosition);
    };

    const onChange = (key) => {
        setExpandIconPosition(key);
    };

    const onChangeSearch = (event) => {
        setShowTable(false);
        const keyword = event.target.value;
        if (keyword.length == 0) {
            setShowTable(true);
            getData();
        } else {
            if (keyword !== '') {
                setDataDashboard(
                    dataDashboard.filter((gpu) =>
                        gpu.name.toLowerCase().includes(keyword.toLowerCase())
                    )
                );
            }
        }

    }

    const genExtra = (status) => (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
            </svg>
        </div>
    );

    function sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }


    const handleChange = (value) => {

        if (value == 1) {
            setSortedInfo({
                order: 'ascend',
                columnKey: 'name',
            });
        } else {
            setSortedInfo({
                order: 'descend',
                columnKey: 'name',
            });
        }

    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
            <div
                className="site-layout-background"
                style={{
                    padding: '24px',
                    width: '1400px',
                    height: '100%',
                    margin: '0px auto',
                    background: "#fff",
                    border: '1px solid rgba(204, 204, 220, 0.07)'
                }}
            >
                <div >
                    <Input placeholder="Search dashboards by name" bordered={false}
                        style={{
                            borderBottom: '2px solid #E6EAF0',
                            fontSize: '20px',
                            lineHeight: '38px'
                        }}
                        onChange={onChangeSearch}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '16px', paddingTop: '16px' }}> */}

                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', paddingTop: '16px' }}>
                        <div style={{ display: 'flex' }}>
                            A
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Select
                                defaultValue="A"
                                style={{ width: 120 }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 1,
                                        label: 'A-Z',
                                    },
                                    {
                                        value: 2,
                                        label: 'Z-A',
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                {showTable ? <div>
                    <div>
                        <Collapse
                            defaultActiveKey={['1']}
                            onChange={onChange}
                            expandIconPosition={expandIconPosition}
                            expandIcon={({ isActive }) => isActive ? <FolderOpenOutlined /> : <FolderOutlined />}
                        >

                            <Panel header="General" key="1" extra={genExtra()}>
                                <div>
                                    {
                                        dataDashboard.map(item =>
                                            <div style={{ marginBottom: '6px' }}>
                                                <div style={{ padding: '8px 16px', backgroundColor: '#E6EAF0', height: '40px', marginBlock: '5px', cursor: 'pointer' }}>
                                                    <span>{item.name}</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </Panel>

                        </Collapse>
                    </div>
                </div> :
                    <div>
                        {/* <Table columns={columns} dataSource={dataDashboard} /> */}
                        <Table columns={columns} dataSource={dataDashboard} onChange={handleChangeTable} />
                    </div>
                }


            </div>
        </div>

    );
}

export default SearchDashboard;