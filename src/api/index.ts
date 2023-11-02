import WsRequest from "./request";
import type { RequestConfig } from "./request/type";

const config:RequestConfig = {
    baseURL:'/api',
    timeout:10000,
    // 跨域时候允许携带凭证
	withCredentials: true,

}

export default new WsRequest(config)