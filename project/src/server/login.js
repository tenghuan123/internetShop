import axios from 'axios';
import baseConfig from './config'

class loginContainer{
    constructor(props = ''){
        this.props = props || [];
    }

    baseServer(parmes){
        this.parmes = parmes;
        
        return this;
    }
    
    loginInto(){
        axios.post(baseConfig);
    }
}
export default loginContainer;