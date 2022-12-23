import React, { useState, useContext } from "react";
import { Form, Input, Col, Row, Button } from "antd";
import { UserContext } from "../../context/UserContext";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { useNavigate } from 'react-router-dom';
import { API } from '../../API/API';

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const { userInfo, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);

        let userToken = null;
        await API.post('/zabbix/api_jsonrpc.php',
            {
                "jsonrpc": "2.0",
                "method": "user.login",
                "params": {
                    // "user": "Admin",
                    // "password": "zabbix"
                    "user": "customer",
                    "password": "RacomDemo1234"
                },
                "auth": null,
                "id": 0
            }
        ).then(response => {
            if (response.status == 200) {
                userToken = response.data.result;
            }
        }).catch(response => {

        });

        setUser("Admin", userToken, true);
        navigate('/home');
        setLoading(false);
    };
    return (
        <div>
            <Row
                style={{
                    height: "100%",
                    width: "100%",
                    position: "fixed",
                }}
            >
                <Col span={12}>
                    <div className="login-screen"></div>
                </Col>
                <Col span={12}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100vh",
                            justifyContent: "center",
                        }}
                    >
                        <div className="LoginForm">
                            <h1>Login</h1>
                            <Form name="basic" layout="vertical" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                                <Form.Item label="Username" name="username" rules={[{ required: true, message: "Нэвтрэх нэрээ оруулна уу!" }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item label="Password" name="password" rules={[{ required: true, message: "Нууц үгээ оруулна уу!" }]}>
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    {loading ? <div style={{ textAlign: 'center' }}> <LoadSpinner /></div> : (
                                        <Button type="primary" block htmlType="submit">
                                            Нэвтрэх
                                        </Button>
                                    )}
                                </Form.Item>

                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Login;