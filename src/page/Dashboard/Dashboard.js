import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { times, reject } from "lodash";
import { Table, Button, Modal, Row, Col, Tabs, List, Tree, Select, Form, Space, Input } from "antd";
import SidePanel from '../SidePanel/SidePanel';
import GridLayout from '../GridLayout/GridLayout';
import NewPanel from './NewPanel/NewPanel';
import GraphPanel from './GraphPanel/GraphPanel';

import { API } from '../../API/API';
import ModalHost from './ModalHost/ModalHost';
import ModalHostGroup from './ModalHostGroup/ModalHostGroup';

const length = 1;
const cols = 12;
const rowHeight = 35;
const padding = [8, 8];
const layoutConfig = {
    cols,
    rowHeight,
    padding
};

const Dashboard = (props) => {
    const { userInfo } = useContext(UserContext);
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(length);

    const [isMainModel, setMainModel] = useState(false);

    const [modalHost, setModalHost] = useState(false);
    const [modalHostGroup, setModalHostGroup] = useState(false);

    const [listHostGroup, setListHostGroup] = useState([]);
    const [listHost, setListHost] = useState([]);

    const [selectHost, setSelectHost] = useState([]);

    // const onSubModel = (e, stateMain = true, stateHost = true, stateHostGroup = false) => {
    //     setMainModel(stateMain);
    //     setModalHost(stateHost);
    //     setModalHostGroup(stateHostGroup);
    // };

    const [isGraphDrag, setIsGraphDrag] = useState(false);
    const [graphLayout, setGraphLayout] = useState();

    const [droppingItem, setDroppingItem] = useState({
        h: 4,
        w: 3
    });

    const [dataHosts, setHosts] = useState([]);
    const [dataHostGroups, setHostGroups] = useState([]);
    const [dataHistory, setHistory] = useState([]);

    const [items, setItems] = useState(
        times(length).map((i, key, list) => ({
            i: key.toString(),
            type: "text",
            layout: {
                x: 0,
                y: 0,
                w: 4,
                h: 8
            },
            children:
                <GraphPanel type={"Bar"}
                    data={[{
                        year: '1999',
                        value: 15,
                        type: 'A',
                        sales: '40',
                    },]} />

        }))
    );

    const getData = async () => {
        fetchHostGroup();
        fetchHost();
    }

    useEffect(() => {
        getData();
    }, []);


    const fetchHost = async () => {
        let tHost = [];

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
            }
        }).catch(response => {

        });

        setHosts(tHost);
    }

    const fetchHostGroup = async () => {
        let tHostGroup = [];

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
        setHostGroups(tHostGroup);
    }
    const onDragStart = (item) => {
        setDroppingItem(item);
    };

    const onEdit = (id) => {
        console.log("onEdit: ", id);
        setVisible(!visible);
    };

    const onDrop = (layout, layoutItem) => {
        console.log("on Drop: ", layout, layoutItem);
        setMainModel(true);
        setIsGraphDrag(true);
        setGraphLayout(layoutItem);
    };

    const onRemoveItem = (id) => {
        console.log("on remove:", id);
        setItems(reject(items, { i: id }));
    };


    const onNewPanel = (graphType) => {
        if (!isGraphDrag) {
            const layoutItem = {
                x: 0,
                y: 0,
                w: 4,
                h: 8
            }
            setItems(
                items.concat({
                    i: count.toString(),
                    type: "text",
                    layout: layoutItem,
                    children:
                        <GraphPanel type={graphType} data={[{
                            year: '1999',
                            value: 15,
                            type: 'A',
                            sales: '38',
                        },]} width={200} height={200} />
                })
            );
            setCount(count + 1);
            setIsGraphDrag(false);
        } else {
            // Шинэ Panel үүсгэх (Drag)
            setItems(
                items.concat({
                    i: count.toString(),
                    type: graphType,
                    layout: graphLayout,
                    children:
                        <GraphPanel
                            type={graphType}
                            data={[{
                                year: '1999',
                                value: 15,
                                type: 'A',
                                sales: '380',
                            },]}
                        />
                })
            );
            setCount(count + 1);
        }
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
                        onClick={() => { setMainModel(true); }}
                        draggable={true}
                        onDragStart={() => onDragStart({ i: "dropping", w: 4, h: 8 })}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.8 64" width="24" height="24">
                            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="96.44" y1="83.7" x2="96.44" y2="-9.48"><stop offset="0" stopColor="#FFF23A"></stop><stop offset=".04" stopColor="#FEE62D"></stop><stop offset=".12" stopColor="#FED41A"></stop><stop offset=".2" stopColor="#FDC90F"></stop><stop offset=".28" stopColor="#FDC60B"></stop><stop offset=".67" stopColor="#F28F3F"></stop><stop offset=".89" stopColor="#ED693C"></stop><stop offset="1" stopColor="#E83E39"></stop>
                            </linearGradient>
                            <path fill='#fff' d="M15.2 22.7H1.9c-1.1 0-1.9.9-1.9 1.9v37.5C0 63.2.9 64 1.9 64h13.3c1.1 0 1.9-.9 1.9-1.9V24.6c0-1.1-.8-1.9-1.9-1.9zM36.3 10.2H23c-1.1 0-1.9.9-1.9 1.9v50c0 1.1.9 1.9 1.9 1.9h13.3c1.1 0 1.9-.9 1.9-1.9v-50c0-1-.9-1.9-1.9-1.9zM57.3 32H44c-1.1 0-1.9.9-1.9 1.9V62c0 1.1.9 1.9 1.9 1.9h13.3c1.1 0 1.9-.9 1.9-1.9V34c0-1.1-.8-2-1.9-2zM70.1 38V26.1c0-3.4 2.7-6.1 6.1-6.1h4.1V2c0-1.1-.9-1.9-1.9-1.9H65.1c-1.1-.1-2 .8-2 1.9v60.1c0 1.1.9 1.9 1.9 1.9h13.3c1.1 0 1.9-.9 1.9-1.9v-18h-4.1c-3.2 0-6-2.8-6-6.1z"></path>
                            <path fill="url(#a)" d="M116.7 24.9H103.6V11.8c0-.6-.5-1.1-1.1-1.1h-12c-.6 0-1.1.5-1.1 1.1v13.1H76.2c-.6 0-1.1.5-1.1 1.1v12c0 .6.5 1.1 1.1 1.1h13.2v13.2c0 .6.5 1.1 1.1 1.1h11.9c.6 0 1.1-.5 1.1-1.1V39.1h13.1c.6 0 1.1-.5 1.1-1.1V26.1c.1-.6-.4-1.2-1-1.2z"></path>
                        </svg>

                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', backgroundColor: 'rgba(240, 243, 253, 1)', height: '100vh', padding: '5px' }}>
                {/* <SidePanel onDragStart={onDragStart} /> */}
                <GridLayout
                    droppingItem={droppingItem}
                    items={items}
                    onEdit={onEdit}
                    onDrop={onDrop}
                    onRemove={onRemoveItem}
                    {...layoutConfig}
                />
            </div>

            <NewPanel
                isMainModel={isMainModel}
                setMainModel={setMainModel}
                onNewPanel={onNewPanel}
                setModalHost={setModalHost}
                host={
                    dataHosts.map((item) => {
                        return {
                            'label': item.host,
                            'value': item.hostid,
                        }
                    })
                }
                selectHost={selectHost} /* Host */
                setSelectHost={setSelectHost}
            />

            <ModalHost
                modalHost={modalHost}
                listHostGroup={listHostGroup}
                setListHostGroup={setListHostGroup}
                setListHost={setListHost}
                setModalHostGroup={setModalHostGroup}
                listHost={listHost}
                hostGroup={dataHostGroups}
                setModalHost={setModalHost}
                setSelectHost={setSelectHost}
            />

            <ModalHostGroup
                modalHostGroup={modalHostGroup}
                setModalHostGroup={setModalHostGroup}
                hostGroup={dataHostGroups}
                host={dataHosts}
                setListHostGroup={setListHostGroup}
                setListHost={setListHost}
            />

        </div >
    );
};

export default Dashboard;