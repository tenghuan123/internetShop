import React, { useState, useRef } from 'react'
import { Tabs, message } from 'antd';
import Loginform from './Loginform'
import Regsterform from './regsterform'
import LoginformMobile from './loginformMobile'
import './index.scss'
import severContainer from '../../server/index'

const { TabPane } = Tabs;

const Login = () => {
    let server = { token: '', name: '滕环' };
    const [Vericode, setVericode] = useState();
    const [codeShow, setcodeShow] = useState(false);
    const [codeValue, setcodeValue] = useState('')
    const inputref = useRef(null)
    const [Mobile, setMobile] = useState(() => {
        return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    });


    const onFinish = (values, flag) => {
        console.log('Success:', values);
        if (flag == 0) {
            loginPushData(values);
        } else {
            regsterPushData(values);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const loginPushData = (values) => {
        const { loginContainer } = severContainer;
        loginContainer.loginInto(values, server);
    }

    const regsterPushData = async (values) => {
        const { loginContainer } = severContainer;
        const inputValue = inputref.current.state.value;
        const { code, msg } = await Vericationverify(inputValue);
        if (code == 200) {
            loginContainer.regsterInto(values, server);
        } else {
            message.info(msg);
        }
    }


    const getVericationCode = async () => {
        const { VericationCode } = severContainer;
        const { status, data } = await VericationCode.getVericationCode();
        if (status == 200) {
            setVericode(data);
            setcodeShow(true);
        }
    }

    const Vericationverify = async (code) => {
        const { VericationCode } = severContainer;
        const { data } = await VericationCode.checkoutCode({ verificationCode: code });
        return data
    }

    return (
        <div className="loginContainer">
            <LoginHeadText></LoginHeadText>
            <div className='formContainer'>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="登录" key="1">
                        <Loginform
                            onFinish={(values) => onFinish(values, 0)}
                            onFinishFailed={(values) => onFinishFailed(values)}
                        />
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <Regsterform
                            codeValue={codeValue}
                            inputRef={inputref}
                            Vericode={Vericode}
                            codeShow={codeShow}
                            getVericationCode={(values) => getVericationCode(values)}
                            onFinish={(values) => onFinish(values, 1)}
                            onFinishFailed={(values) => onFinishFailed(values)} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

const LoginHeadText = () => {
    const [Text, setText] = useState("欢迎使用Internet Shop");
    return <div className="loginTextContainer">
        <p className="loginText">{Text}</p>
    </div>
}


export default Login;