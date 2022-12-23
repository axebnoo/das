import React from "react";

import { Table, Button, Modal, Select, Space } from "antd";
import { CloseOutlined } from '@ant-design/icons';

const ModalHost = (props) => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'host',
            render: (text) => <a>{text}</a>,
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            selectedRows = selectedRows.map((item) => {
                return {
                    'label': item.host,
                    'value': item.hostid,
                }
            });

            props.setSelectHost(selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };

    let tHostGroup = props.hostGroup.map((item) => {
        return {
            'label': item.name,
            'value': item.groupid,
        }
    });

    const hostProps = {
        size: 'small',
        mode: 'multiple',
        style: {
            fontSize: '12px',
            width: '300px',
        },
        value: props.listHostGroup,
        options: tHostGroup,
        onChange: (newValue) => {

            if (newValue?.length > 1) {
                newValue.pop();
            }
            else {
                props.setListHost([]);
                props.setListHostGroup(newValue);

            }

        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };


    return (
        <Modal
            mask={true}
            maskStyle={{ backgroundColor: "transparent" }}
            title="Hosts"
            visible={props.modalHost}
            width={600}
            style={{
                top: 50
            }}
            bodyStyle={{
                padding: 10
            }}
            okText="Select"
            cancelText="Cancel"
            cancelButtonProps={{ size: 'small', style: { fontSize: '12px', padding: '0 10px 10px' } }}
            closeIcon={
                <CloseOutlined style={{ fontSize: '12px' }} />
            }
            okButtonProps={{ size: 'small', style: { fontSize: '12px', padding: '0 10px 10px' } }}
            onOk={(e) => props.setModalHost(false)}
            onCancel={(e) => props.setModalHost(false)}
        >

            <div>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', paddingLeft: '40px' }}>
                    <div style={{ color: '#1f2c33', fontSize: '12px', width: '15%' }}>
                        Host group
                    </div>
                    <div>

                        <Space direction="horizontal">
                            <Select
                                {...hostProps}
                            />
                            <Button
                                size={'small'}
                                style={{
                                    fontSize: '12px'
                                }}
                                onClick={() => props.setModalHostGroup(true)}
                            >
                                Select
                            </Button>
                        </Space>

                    </div>
                </div>

                <div style={{ marginTop: '10px' }}>

                    <Table
                        className='tableSmall'
                        rowSelection={{
                            type: 'checkbox',
                            ...rowSelection,
                        }}
                        size={'small'}
                        style={{
                            fontSize: '9px'
                        }}
                        columns={columns}
                        dataSource={props.listHost}
                        pagination={false}
                    />

                </div>

            </div>

        </Modal >

    )
}

export default ModalHost;