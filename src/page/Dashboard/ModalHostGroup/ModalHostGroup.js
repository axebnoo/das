import React, { useState, useEffect, useContext } from "react";
import { API } from "../../../API/API";
import { UserContext } from "../../../context/UserContext";
import { Table, Button, Modal, Row, Col, Tabs, List, Tree, Select, Form, Space, Input } from "antd";
import { CloseOutlined } from '@ant-design/icons';


const ModalHostGroup = (props) => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, item) => <a>
                <div onClick={() =>
                    onHostGroupSelected(text, item)
                }>
                    {text}
                </div>
            </a>
        }
    ];

    const onHostGroupSelected = (text, item) => {

        props.setListHostGroup([
            {
                label: text,
                value: text
            }
        ]);

        let tHost = props.host;
        tHost = tHost.map((item) => {
            return {
                'key': item.hostid,
                'groupid': item.groups[0].groupid,
                'group': item.groups[0].name,
                'host': item.host,
                'hostid': item.hostid
            }
        });

        const selectedHost = tHost.filter(employee => {
            return employee.groupid === item.groupid;
        });

        props.setListHost(selectedHost);
        props.setModalHostGroup(false);
    }

    return (
        <Modal
            mask={true}
            maskStyle={{ backgroundColor: "transparent" }}
            title="Host groups"
            visible={props.modalHostGroup}
            width={600}
            style={{
                top: 50
            }}
            bodyStyle={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 0
            }}
            okText="Select"
            cancelText="Cancel"
            cancelButtonProps={{ size: 'small', style: { fontSize: '12px', padding: '0 10px 10px' } }}
            closeIcon={
                <CloseOutlined style={{ fontSize: '12px' }} />
            }
            okButtonProps={{ style: { display: 'none' } }}
            onOk={(e) => props.setModalHostGroup(false)}
            onCancel={(e) => props.setModalHostGroup(false)}
        >
            <div>
                <Table
                    scroll={{ y: 400 }}
                    className='tableSmall'
                    size={'small'}
                    style={{
                        fontSize: '9px'
                    }}
                    columns={columns}
                    dataSource={props.hostGroup}
                    pagination={false}
                />

            </div>

        </Modal>
    )
}

export default ModalHostGroup;