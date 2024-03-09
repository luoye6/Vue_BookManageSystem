//暴露自定义websocket对象
export const socket = {
    //后台请求路径
    url: "",
    //websocket对象
    websocket: null,
    //websocket状态
    websocketState: false,
    //重新连接次数
    reconnectNum: 0,
    //重连锁状态，保证重连按顺序执行
    lockReconnect: false,
    //定时器信息
    timeout: null,
    clientTimeout: null,
    serverTimeout: null,
    //初始化方法，根据url创建websocket对象封装基本连接方法，并重置心跳检测
    initWebSocket(newUrl) {
        socket.url = newUrl;
        socket.websocket = new WebSocket(socket.url);
        socket.websocket.onopen = socket.websocketOnOpen;
        socket.websocket.onerror = socket.websocketOnError;
        socket.websocket.onclose = socket.websocketOnClose;
        this.resetHeartbeat()
    },
    reconnect() {
        //判断连接状态
        if (socket.lockReconnect) return;
        socket.reconnectNum += 1;
        //重新连接三次还未成功调用连接关闭方法
        if (socket.reconnectNum === 3) {
            socket.reconnectNum = 0;
            socket.websocket.onclose()
            return;
        }
        //等待本次重连完成后再进行下一次
        socket.lockReconnect = true;
        //5s后进行重新连接
        socket.timeout = setTimeout(() => {
            socket.initWebSocket(socket.url);
            socket.lockReconnect = false;
        }, 5000);
    },
    //重置心跳检测
    resetHeartbeat() {
        socket.heartbeat();
    },
    //心跳检测
    heartbeat() {
        socket.clientTimeout = setTimeout(() => {
            if (socket.websocket) {
                //向后台发送消息进行心跳检测
                socket.websocketState = false;
                //一分钟内服务器不响应则关闭连接
                socket.serverTimeout = setTimeout(() => {
                    if (!socket.websocketState) {
                        console.log("无响应，我要关闭")
                        socket.websocket.onclose()
                    } else {
                        this.resetHeartbeat()
                    }
                }, 10 * 1000);
            }
        }, 3 * 1000);
    },
    //发送消息
    sendMsg(message) {
        socket.websocket.send(message);
    },
    websocketOnOpen(event) {
        //连接开启后向后台发送消息进行一次心跳检测
        console.log("WebSocket 启动")
        socket.sendMsg("PING");
    },
    websocketOnError(error) {
        console.log(error);
        socket.reconnect();
    },
    websocketOnClose() {
        socket.websocket.close();
    },
};

