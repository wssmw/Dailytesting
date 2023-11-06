import WsRequest from "@/api";

export function getMvList(){
    return WsRequest.get({
        url:"/user/friends/blocked"
    })
}