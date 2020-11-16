import axios from 'axios';
import baseConfig from './config'


const loginContainer = {
    loginInto:function(data, parmes){
        axios.post(`${baseConfig.url}/login`,{...data,parmes}).then(value => console.log(value));
    },
    regsterInto(data, parmes){
        axios.post(`${baseConfig.url}/regster`,{...data,parmes}).then(value => console.log(value));
    }
}
export default loginContainer;