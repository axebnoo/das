import React, { useState, useContext, useEffect } from "react";
import { Table, Button, Modal, Row, Col, Tabs, List, Tree, Space, Select, Form, Radio } from "antd";
import { API } from '../../../API/API';

import moment from 'moment';
import { UserContext } from '../../../context/UserContext';
import TreeDirectory from "../../../components/TreeDirectory/TreeDirectory";
import GraphPreview from "../../GraphPreview/GraphPreview";

import ChartBar from "../../../Layouts/SVG/ChartBar";
import ChartBarActive from '../../../Layouts/SVG/ChartBarActive';
import ChartColumn from '../../../Layouts/SVG/ChartColumn';
import ChartColumnActive from '../../../Layouts/SVG/ChartColumnActive';
import ChartStackedBar from '../../../Layouts/SVG/ChartStackedBar';
import ChartStackedColumn from '../../../Layouts/SVG/ChartStackedColumn';
import ChartDonut from '../../../Layouts/SVG/ChartDonut';
import ChartStackedBarActive from '../../../Layouts/SVG/ChartStackedBarActive';
import ChartStackedColumnActive from '../../../Layouts/SVG/ChartStackedColumnActive';
import ChartDonutActive from '../../../Layouts/SVG/ChartDonutActive';
import ChartLine from '../../../Layouts/SVG/ChartLine';
import ChartLineActive from '../../../Layouts/SVG/ChartLineActive';
import GraphPanel from "../GraphPanel/GraphPanel";

const { DirectoryTree, TreeNode } = Tree;
const NewPanel = (props) => {
    const { userInfo } = useContext(UserContext);
    const { onDragStart } = props;
    const [activeChart, setActiveChart] = useState('Area');
    const [dataCheckedItem, setCheckedItem] = useState([]);
    const [dataItems, setItem] = useState([]);
    const [data, setData] = useState([]);
    const [tabKey, setTabKey] = useState("1");
    const [activeId, setActiveId] = useState(0);

    const [dataHosts, setHosts] = useState([]);
    const [dataHostGroups, setHostGroups] = useState([]);
    const [dataHistory, setHistory] = useState([]);

    const [form] = Form.useForm();

    const getData = async () => {
        let tHostGroup = [];
        let tHost = [];
        let tItem = [];
        let tHistory = [];

        /* Host Group */
        await API.post('/zabbix/api_jsonrpc.php',
            {
                "jsonrpc": "2.0",
                "method": "hostgroup.get",
                "params": {
                    "output": "extend"
                },
                "auth": userInfo.token,
                "id": 1
            }
        ).then(response => {
            if (response.status == 200) {
                tHostGroup = response.data.result;
            }
        }).catch(response => {

        });

        /* Host */
        await API.post('/zabbix/api_jsonrpc.php',
            {
                "jsonrpc": "2.0",
                "method": "host.get",
                "params": {
                    "output": ["hostid", "host"],
                    "selectGroups": "extend"
                },
                "auth": userInfo.token,
                "id": 2
            }
        ).then(response => {
            if (response.status == 200) {
                tHost = response.data.result;
                // console.log('tHost', tHost);
            }
        }).catch(response => {

        });

        /* Item */
        await API.post('/zabbix/api_jsonrpc.php',
            {
                "jsonrpc": "2.0",
                "method": "item.get",
                "params": {
                    "output": ["hostid", "name"],
                    "filter": {
                        "host": [
                            // "ECE-agpu7",
                            "zabbix6-demo",
                            // "Zabbix server",
                            // "zabbix-ILO",
                            // "agent"
                        ]
                    },
                },
                "auth": userInfo.token,
                "id": 1
            }
        ).then(response => {
            if (response.status == 200) {
                tItem = response.data.result;
            }
        }).catch(response => {

        });

        /* History */
        await API.post('/zabbix/api_jsonrpc.php',
            {
                "jsonrpc": "2.0",
                "method": "history.get",
                "params": {
                    "output": "extend",
                    "history": 0,
                    "itemids": "23304",
                    "sortfield": "clock",
                    "sortorder": "DESC",
                    "limit": 20,
                },
                "auth": userInfo.token,
                "id": 3
            }
        ).then(response => {
            if (response.status == 200) {
                tHistory = response.data.result;
            }
        }).catch(response => {

        });

        tHost = tHost.map((item) => {
            return {
                'groupid': item.groups[0].groupid,
                'group': item.groups[0].name,
                'host': item.host,
                'hostid': item.hostid
            }
        });

        tItem = tItem.map(item => {
            const obj = tHost.find(o => o.hostid === item.hostid);
            return { ...item, ...obj };
        });

        setHostGroups(tHostGroup);
        setHosts(tHost);
        setItem(tItem);
        setHistory(tHistory);
        setData(convertArrayValues(tHistory));
    }

    useEffect(() => {
        getData();
    }, []);


    const [graph, setTemp] = useState([
        {
            title: "graph",
            icon: <ChartLine />,
            iconActive: <ChartLineActive />
        },
        {
            title: "ChartBar",
            icon: <ChartBar />,
            iconActive: <ChartBarActive />
        },
        {
            title: "Bar",
            icon: <ChartColumn />,
            iconActive: <ChartColumnActive />
        },
        {
            title: "StackedBar",
            icon: <ChartStackedBar />,
            iconActive: <ChartStackedBarActive />
        },
        {
            title: "StackedColumn",
            icon: <ChartStackedColumn />,
            iconActive: <ChartStackedColumnActive />
        },
        {
            title: "Pie",
            icon: <ChartDonut />,
            iconActive: <ChartDonutActive />
        },
        {
            title: "Area",
            icon: <ChartLine />,
            iconActive: <ChartLineActive />
        }
    ]);

    const onChangeTab = (key) => {
        setTabKey(key);
    };

    const onFormatDate = (date) => {
        return !date ? '' : moment(date).format("MM.DD HH:mm:ss");
    };

    function convertArrayValues(array) {
        for (var i = 0; i < array.length; i++) {
            array[i].clock = onFormatDate(parseInt(array[i].clock));
        }
        return array;
    }

    const onChartSelect = (index, item) => {
        setActiveId(index);
        setActiveChart(item.title);
    }

    const onCreateTree = (treeData, treeKeys) => {
        return treeData.reduce((r, o, i) => {
            treeKeys.reduce((level, k) => {
                var temp = (level.children = level.children || []).find(({ title }) => title === o[k]);
                if (!temp) level.children.push(temp = {
                    title: o[k],
                    key: level.key + '-' + level.children.length,
                    value: level.value + '-' + level.children.length,
                    groupid: o.groupid,
                    hostid: o.hostid,
                    itemid: o.itemid
                });
                return temp;
            }, { children: r, key: '0', value: '0' });
            return r;
        }, []);
    };

    const onCheck = (checkedKeys, e) => {
        // Сонгогдсон item тодорхойлох
        if (!e.node.expanded) { // Хамгийн сүүлд сонгогдох item list
            if (e.checked) { // Check хийгдсэн эсэх
                setCheckedItem([...dataCheckedItem, e.node.itemid]);
            } else {
                setCheckedItem(dataCheckedItem.filter((en) => (en !== e.node.itemid)))
            }
        }
    };

    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
        });
    }

    const onPanel = () => {
        props.onNewPanel(activeChart);
        props.setMainModel(false);
    }

    const hostProps = {
        allowClear: true,
        size: 'small',
        mode: 'multiple',
        style: {
            fontSize: '12px',
            width: '300px',
        },

        value: props.selectHost,
        options: props.host,
        onChange: (newValue) => {
            props.setSelectHost(newValue);
        },
        placeholder: 'Select Item...',
    };
    
    return (
        <div>
            <Modal
                title="Add a new panel"
                open={props.isMainModel}
                onOk={(e) => onPanel()}
                // onOk={(e) => props.setMainModel(true)}
                onCancel={() => props.setMainModel(false)}
                width={800}
                style={{
                    top: 50,
                }}
                bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
            >
                <Row>
                    <Col span={10}>
                        <div>
                            <Tabs
                                defaultActiveKey={'1'}
                                onChange={onChangeTab}
                                items={[
                                    {
                                        label: 'Data set',
                                        key: '1',
                                        children:
                                            <div style={{ paddingRight: '25px' }}>

                                                <Form
                                                    form={form}
                                                    layout="vertical"
                                                >

                                                    <Form.Item label="Data set" name="requiredMarkValue">
                                                        <div style={{ display: 'flex' }}>

                                                            <Select
                                                                {...hostProps}
                                                            />
                                                            <Button
                                                                size={'small'}
                                                                style={{
                                                                    fontSize: '12px',
                                                                    marginLeft: '10px'
                                                                }}
                                                                onClick={() => props.setModalHost(true)}
                                                            >
                                                                Select
                                                            </Button>
                                                        </div>
                                                    </Form.Item>
                                                </Form>

                                            </div>
                                    }
                                ]}
                            />

                        </div>

                    </Col>
                    <Col span={14}>

                        <div>
                            <div>
                                <div style={{ color: '#54698d', backgroundColor: '#eef1f6', padding: '15px' }}>
                                    <div>
                                        Preview
                                    </div>
                                    <div style={{ backgroundColor: "#FFF", marginTop: '10px', padding: '15px', borderRadius: '5px' }}>
                                        <div>
                                            <h1 style={{ fontSize: '18px', margin: 0, color: '#16325c' }}>{activeChart}</h1>
                                        </div>
                                        <div style={{ marginTop: '15px', height: '280px' }}>
                                            <GraphPreview type={activeChart} data={data} />
                                            {/* <GraphPanel type={activeChart} data={data}/> */}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ padding: '15px' }}>
                                    <div style={{ color: '#54698d' }}>
                                        Preview
                                    </div>
                                    <div style={{ marginTop: '10px' }}>
                                        <List
                                            grid={{ gutter: 10, column: 10 }}
                                            dataSource={graph}
                                            renderItem={(item, index) => (
                                                <List.Item onClick={() => onChartSelect(index, item)}>
                                                    {index === activeId ?
                                                        <div style={{ width: '40px', height: '40px', border: '1.5px solid rgb(1, 118, 211)', borderRadius: '5px', backgroundColor: 'rgb(1, 118, 211)' }}>
                                                            {item.iconActive}
                                                        </div>
                                                        :
                                                        <div style={{ width: '40px', height: '40px', border: '1.5px solid rgba(216, 221, 230, 1)', borderRadius: '5px' }}>
                                                            {item.icon}
                                                        </div>
                                                    }
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Modal>
        </div>
    )
}

export default NewPanel;