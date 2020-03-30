export function initXMLHttpRequestClick() {
    document.getElementById('clickBtnGet').addEventListener("click", () => {
        // 生成对象
        var xhr = new XMLHttpRequest();
        // 初始化请求xhr.open(method, url, async);
        // /comment/list?user=XXX&pwd=XXX
        xhr.open('get','/comment/list',true);
        // onreadystatechange (当readyState属性发生变化时，callback会被触发)
        xhr.onreadystatechange = function() {
            // readyState  = 4	表示DONE(下载操作已完成)
            if(xhr.readyState === 4) {
                // status 就是我们http中常见的网络状态(500，404~)
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    // 返回内容的类型(默认text，json～)
                    console.log(xhr.responseType);
                    // 返回的具体内容
                    console.log(JSON.parse(xhr.response));
                }
            }
        }
        // 如果只有上面这些方法，请求是否可以发出？
        // 即调用该方法后HTTP请求才会被真正发出
        xhr.send();
    });

    document.getElementById('clickBtnPost').addEventListener("click", () => {
        // 生成对象
        var xhr = new XMLHttpRequest();
        // 初始化请求xhr.open(method, url, async);
        // let url = '/comment/listById';
        let url = 'http://localhost:4200/comment/listById';

        xhr.open('post',url,true);
        // xhr.responseType = 'json';
        // 请求参数
        let sendData = {
            name1: "value1",
            name2: "value2"
        };
        // 处理请求参数方式1
        let postData = (function(value){
            var dataString = "";
            let valueKey = Object.keys(value);
            for(let i = 0; i < valueKey.length; i++) {
                let key = valueKey[i];
                if(i === valueKey.length-1) {
                    dataString += key+"="+value[key]; 
                } else {
                    dataString += key+"="+value[key]+"&";
                }
            }
            return dataString;
        }(sendData));

        // 设置请求头(JSON.stringify(sendData)) 对应使用这种方式传递参数
        xhr.setRequestHeader('Content-Type', 'application/json');


        // 表单提交类型（其一）
        // xhr.setRequestHeader('content-type', 'application/x-www-urlencoded');
        // 4200跨域中跨域看到，如果cors没有设置name，就会判断为跨域
        // xhr.setRequestHeader('name', 'yyy'); 

        // 异常处理
        xhr.onerror = function() {
            console.log('Network request failed')
        }
        // 回调函数可以获取资源总大小
        xhr.onprogress = function(event){
            console.log(event.loaded / event.total);
        }
        // 跨域携带cookie
        xhr.withCredentials = true;

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    console.log(xhr.response)
                    console.log('xhr');
                }
            }
        }
        // 请求参数方式1（非JSON格式）
        // xhr.send(postData);
        // 请求参数方式2（JSON格式）
        xhr.send(JSON.stringify(sendData));
    });
}
