import axios from 'axios';
import baseConfig from './config'


const vericationCode = {
    // 验证码获取，后台传入的对象是一个html的svg
    getVericationCode:function(){
        return axios.get(`${baseConfig.url}/verificationCode`);
    },
    // 验证码校验
    checkoutCode(data, parmes){
       return axios.get(`${baseConfig.url}/checkoutCode`,{...data,parmes});
    }
}
export default vericationCode;