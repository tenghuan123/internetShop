import React, { useState, useEffect } from 'react'
import Loginform from './Loginform'
import './index.scss'
import severContainer from '../../server/index'

const Login = () => {
    let server = {}; 
    const { serverBase } = severContainer;
    const params = { token: '', name: '滕环' };
    server= new serverBase(params);

    const onFinish = (values) => {
        console.log('Success:', values);
        const { loginContainer } = severContainer;
        var logincontainer = new loginContainer(values);
        logincontainer.baseServer(server);
        console.log(logincontainer);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="loginContainer">
            <LoginHeadText></LoginHeadText>
            <div className='formContainer'>
                <h3>登录</h3>
                <Loginform onFinish={(values) => onFinish(values)} onFinishFailed={(values) => onFinishFailed(values)}></Loginform>
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