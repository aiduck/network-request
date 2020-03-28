export function initJQ() {
    $("#app").html("<h1>hello world</h1>");

    // $.ajax({
    //     url: '/comment/listById',
    //     type: 'post',
    //     dataType: 'json', // 设置返回值类型
    //     contentType: 'application/json', // 设置参数类型 默认application/x-www-form-urlencoded（application/json）
    //     // headers: {'Content-Type':'application/json'},// 设置请求头
    //     xhrFields: { withCredentials: true }, // 跨域携带cookie
    //     data: JSON.stringify({a: [{b:1, a:1}]}), // 传递参数 post json格式
    //     // data: {a: [{b:1, a:1}]}, // get form格式 复杂对象处理不了需要用json
    //     error:function(xhr,status){  // 错误处理
    //        console.log(xhr,status);
    //     },
    //     success: function (data,status) {  // 获取结果
    //        console.log(data,status);
    //     }
    // })
    $.ajax({
        url: '/jsonp/getData',
        dataType: "jsonp",
        jsonp: 'callback',
        jsonpCallback: 'localJsonpCallback',
        success: (res) => {
            console.log(res)
        }
    });
}