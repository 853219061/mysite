import axios from 'axios';
import { showMessage } from '@/utils';

//
const ins = axios.create({})

// 设置拦截结果
ins.interceptors.response.use(function (resp) {
    console.log(resp, '拦截');

    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: 'error',
            duration: 20000000,
        })

        return null;
    }

    return resp.data.data;
    
})



export default  ins;