import { Button, Col, Divider, Form, Input, notification, Row } from "antd"
import { registerUserApi } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (value) => {
        const res = await registerUserApi(value.fullName, value.email, value.password, value.phone);
        if (res.data) {
            notification.success({
                message: "Register user",
                description: "Đăng kí user thành công!"
            })
            navigate("/login");
        } else {
            notification.error({
                message: "Register user error",
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ margin: "30px" }}
            // onFinishFailed={onFinishFailed}
            >
                <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>
                <Row justify={"center"}>
                    <Col xs={24} md={16} lg={12} xl={8}>
                        <Form.Item
                            label="Full Name"
                            name="fullName"
                            rules={[{ required: true, message: 'Please input your Full Name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={16} lg={12} xl={8}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={16} lg={12} xl={8}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={16} lg={12} xl={8}>
                        <Form.Item
                            label="Phone number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    pattern: new RegExp(/\d+/g),
                                    message: "Wrong format!"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={8}>
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                            {/* <Button type="primary" onClick={() => {
                            form.setFieldsValue({
                                email: "test@gmail.com"
                            })
                        }}>
                            Test
                        </Button> */}
                        </Form.Item>
                        <Divider />
                        <div>Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link></div>
                    </Col>
                </Row>
            </Form >
        </>
    )
}

export default RegisterPage;