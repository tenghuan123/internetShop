import React, {  } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

const { Search } = Input;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        span: 24,
    },
};
const regsterForm = (props) => {

    return <div className="regsterForm">
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={props.onFinish}
            onFinishFailed={props.onFinishFailed}
        >
            <Form.Item
                label="Count"
                name="Count"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}>
                <Input />
            </Form.Item>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="phone"
                name="phone"
                rules={[
                    {
                        required: false,
                        message: 'Please input your phone!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="IDCard"
                name="IDCard"
                rules={[
                    {
                        required: false,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="bank_count"
                name="bank_count"
                rules={[
                    {
                        required: false,
                        message: 'Please input your username!',
                    },
                ]}
            ><Input />
            </Form.Item>
            <Form.Item
                label="rediess"
                name="rediess"
                rules={[
                    {
                        required: false,
                        message: 'Please input your username!',
                    },
                ]}
            ><Input />
            </Form.Item>
            <Form.Item
                label="veriCode"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Veriticationcode!',
                    },
                ]}

            >
                {props.codeShow ? <div className="inputBox">
                    <Input value={props.value} ref={props.inputRef} />
                    <div dangerouslySetInnerHTML={{ __html: props.Vericode }} className="veriCodebox"></div>
                </div> : <Search placeholder="input search text"
                    allowClear
                    enterButton="Vericode"
                    onSearch={() => props.getVericationCode()} />}
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button block={true} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
}
export default regsterForm;