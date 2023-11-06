import type { AxiosInstance,AxiosError } from "axios";
import axios from "axios";

import { ElLoading } from "element-plus";
import type { LoadingInstance } from "element-plus/es/components/loading/src/loading";
import type { RequestConfig } from "./type";

const DEAFULT_LOADING = true

class WsRequest {
    // axios实例
    instance:AxiosInstance
    // 是否展示loading
    isShowLoading:Boolean
    // 局部请求拦截
    interceptors?:any
    // loading实例
    loading?:LoadingInstance
    constructor(config:RequestConfig){
        this.instance = axios.create(config)
        this.isShowLoading = config.isShowLoading??DEAFULT_LOADING
        this.interceptors = config.interceptors
        this.instance.interceptors.request.use(
            (config)=>{
                console.log('这里后执行');
                if(this.isShowLoading){
                    this.loading = ElLoading.service({
                        fullscreen: true,
                        text: '努力加载中！',
                        background: '#EEE'
                    })  
                }
                console.log(config);
                return config
            },
            (error:AxiosError)=>{
                console.log(error);
            }
        )
        this.instance.interceptors.response.use(
            (response)=>{
                this.loading?.close()
                return response.data
            },
            (err:AxiosError)=>{
                this.loading?.close()
                console.log(err);
            }
        )
    }
    request(config:any){
        return new Promise((resolve,reject)=>{
            this.instance.request(config)
            .then((res)=>{
                console.log('这里执行');
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
    get(config:any){
        return this.request({...config,method:'GET'})
    }
    post(config:any){
        return this.request({...config,method:'POST'})
    }

}
export default WsRequest