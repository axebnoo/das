import React, { useState, useEffect, useContext } from 'react';
import PropTypes from "prop-types";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Button, Modal, Row, Col, Tabs, List, Tree, Breadcrumb, Layout } from "antd";
import { API } from '../../../API/API';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import ChartBar from '../../../Layouts/SVG/ChartBar';
import ChartColumn from '../../../Layouts/SVG/ChartColumn';
import ChartStackedBar from '../../../Layouts/SVG/ChartStackedBar';
import ChartStackedColumn from '../../../Layouts/SVG/ChartStackedColumn';
import ChartDonut from '../../../Layouts/SVG/ChartDonut';
import ChartBarActive from '../../../Layouts/SVG/ChartBarActive';
import ChartColumnActive from '../../../Layouts/SVG/ChartColumnActive';
import ChartStackedBarActive from '../../../Layouts/SVG/ChartStackedBarActive';
import ChartStackedColumnActive from '../../../Layouts/SVG/ChartStackedColumnActive';
import GraphPreview from '../../GraphPreview/GraphPreview';
import ChartDonutActive from '../../../Layouts/SVG/ChartDonutActive';
import TreeDirectory from '../../../components/TreeDirectory/TreeDirectory';
import GridLayout from '../../../components/GridLayout';

import { connect } from "react-redux";
import { setType } from '../../../actions/app-actions';

const { Content, Footer, Sider } = Layout;
const { DirectoryTree, TreeNode } = Tree;

const DashboardNew = (props) => {
    const navigate = useNavigate();
    const { userInfo } = useContext(UserContext);

    const [dataHostGroups, setHostGroups] = useState([]);
    const [dataHosts, setHosts] = useState([]);
    const [dataItems, setItems] = useState([]);
    const [dataHistory, setHistory] = useState([]);
    const [data, setData] = useState([]);
    const [dataCheckedItem, setCheckedItem] = useState([]);
    const [isMainModel, setMainModel] = useState(false);
    const [tabKey, setTabKey] = useState("1");
    const [activeId, setActiveId] = useState(0);
    const [activeChart, setActiveChart] = useState('Area');
    const [chart, setChart] = useState();
    const [panel, setPanel] = useState([]);
    const [widthWindow, setWidth] = useState(window.innerWidth);
    const [layouts, setLayout] = useState([]);

    const [showPanel, setShowPanel] = useState(false);

    const [graph, setTemp] = useState([
        {
            title: "Area",
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
        /*
        {
          title: "ChartLine",
          icon: <ChartLine />,
          iconActive: <ChartLineActive/>
        },
        */
        {
            title: "Pie",
            icon: <ChartDonut />,
            iconActive: <ChartDonutActive />
        },
        /*
        {
          title: "Funnel",
          icon: <ChartFunnel />,
          iconActive: <ChartFunnelActive/>
        },*/
        /*
        {
          title: "ChartScatterPlot",
          icon: <ChartScatterPlot />,
          iconActive: <ChartScatterPlotActive />
        } 
        */
    ]);

    const onFormatDate = (date) => {
        return !date ? '' : moment(date).format("MM.DD HH:mm:ss");
    };

    function convertArrayValues(array) {
        for (var i = 0; i < array.length; i++) {
            array[i].clock = onFormatDate(parseInt(array[i].clock));
        }
        return array;
    }

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
                console.log('tHostGroup', tHostGroup);
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
                console.log('tHost', tHost);
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
                    // "selectHosts": "extend",
                    // "hostids": "10084",
                    // "itemids": "22862",
                    // "groupids": ["42243"]
                    // "with_triggers": true,
                    // "search": {
                    //   "key_": "vm.memory.size[available]"
                    // },
                    // "sortfield": "name"
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
        setItems(tItem);
        setHistory(tHistory);
        setData(convertArrayValues(tHistory));
    }

    useEffect(() => {
        getData();
    }, []);

    const createNewTreeData = (treeData, checkedKeys) => {
        return treeData.reduce((acc, treeDataItem) => {
            if (checkedKeys.includes(treeDataItem.key)) {
                if (treeDataItem.children) {
                    acc.push({
                        ...treeDataItem,
                        children: createNewTreeData(treeDataItem.children, checkedKeys)
                    });
                } else {
                    acc.push(treeDataItem);
                }
            }

            return acc;
        }, []);
    };

    const onChartSelect = (index, item) => {
        setActiveId(index);
        setActiveChart(item.title);
    }
    const onSelect = (keys, info) => {
        // console.log('Trigger Select', keys, info);
    };
    const onExpand = (keys, info) => {
        // console.log('Trigger Expand', keys, info);
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

    const onCheckedKeys = (treeData) => {
        var itemid = dataCheckedItem;
        var itemIdObj = {};

        itemid.forEach(function (element) {
            itemIdObj[element] = true;
        });

        var filteredArray = [];

        treeData.forEach(function (element) {
            if (itemIdObj[element.itemid])
                filteredArray.push(element)
        });

        var checkedItemid = [];

        filteredArray.map((item) => {
            checkedItemid.push(item.value);
        });

        return checkedItemid;
    }

    const renderTreeNodes = (data) =>
        data.map((item) => {
            // console.log("item", item);
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });


    const onChangeTab = (key) => {
        setTabKey(key);
    };

    const onNewPanel = () => {
        setChart(activeChart);

        const updateUsers = [
            ...layouts,
            {
                id: layouts.length + 1,
                "w": 6,
                "h": 2,
                "x": 0,
                "y": 0,
                "i": "graph" + layouts.length
            }
        ];

        setLayout(updateUsers);
        setPanel([...panel, "graph" + layouts.length]);

        let root = null;

        if (panel.length == 0) {
            root = "graph0";
        } else {
            root = "graph" + layouts.length
        }

        const value = activeChart;
        props.setType({ key: root, value, item: "type" });

        setMainModel(false);
        setShowPanel(true);
    }

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
                    <h1 style={{ fontSize: '20.5px', margin: 0 }}>New dashboard</h1>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button type="primary" style={{ backgroundColor: '#0275b8', margin: 0 }} onClick={setMainModel}>New</Button>
                    {/* <Button type="primary" style={{ backgroundColor: '#0275b8', margin: 0 }} onClick={onNewPanel}>New</Button> */}
                </div>
            </div>

            <div style={{ padding: '0 10px 0px' }}>
                <Breadcrumb style={{ margin: '10px 0', fontSize: '12px' }}>
                    <Breadcrumb.Item> <a href="">All dashboards</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">New dashboard</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div>
                {showPanel ? <GridLayout data={panel} layouts={{ lg: layouts }} chart={activeChart} graph={panel} /> :
                    <div></div>
                }
            </div>

            {/* Modal */}
            <div>
                <Modal
                    title="Add a new panel"
                    open={isMainModel}
                    onOk={(e) => onNewPanel()}
                    // onOk={(e) => handleClick(e)}
                    onCancel={() => setMainModel(false)}
                    width={800}
                    style={{
                        top: 20,
                    }}
                    bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
                >
                    <Row>
                        <Col span={10}>
                            <div style={{ paddingRight: '23px' }}>

                                <Tabs
                                    defaultActiveKey={'1'}
                                    onChange={onChangeTab}
                                    items={[
                                        {
                                            label: 'Group',
                                            key: '1',
                                            children:
                                                <DirectoryTree
                                                    checkable
                                                    multiple
                                                    onCheck={onCheck}
                                                    treeData={onCreateTree(dataItems, ['group', 'host', 'name'])}
                                                    height={600}
                                                />
                                        },
                                        {
                                            label: 'Host',
                                            key: '2',
                                            children:
                                                <TreeDirectory
                                                    data={onCreateTree(dataItems, ['host', 'name'])}
                                                    checkLabel={'Host'}
                                                    checkID={dataCheckedItem}
                                                    checkKey={2}
                                                />
                                        },
                                        {
                                            label: 'Item',
                                            key: '3',
                                            children:
                                                <TreeDirectory
                                                    data={onCreateTree(dataItems, ['name'])}
                                                    checkLabel={'Item'}
                                                    checkID={dataCheckedItem}
                                                    checkKey={3}
                                                />
                                            ,
                                        },
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
                                                <GraphPreview type={activeChart} data={data} width={200} height={280} />
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
        </div>
    );
}


DashboardNew.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    layouts: PropTypes.object.isRequired
};

export default connect(null, { setType })(DashboardNew);