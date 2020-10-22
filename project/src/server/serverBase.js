class ServerBase {
    constructor(parame){
        this.parame = [];
        this.fixedParameter(parame);
    }
    // 固定参数的传递
    fixedParameter(parame){
        if(typeof parame != 'object'){
            console.error('固定参数传递不正确，你需要传递一个对象，数组或者对象');
        }
        if(!Array.isArray(parame)){
            parame = [parame];
        }
        for(var value of parame){
            this.parame.push(value)
        }
    }

    // 对象添加迭代器
    addIterator(parame){
        parame.__proto__.constructor.prototype[Symbol.iterator] = function () {
            const keys = Object.keys(this);
            let index = 0;
        
            return {
                next: () => {
                    return {
                        value: this[keys[index++]], // 每次迭代的结果
                        done: index > keys.length // 迭代结束标识 false停止迭代，true继续迭代
                    };
                }
            }
        }
        return parame;
    }
}

export default ServerBase;