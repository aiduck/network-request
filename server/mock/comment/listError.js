var Mock = require("mockjs")

module.exports = async function(ctx, next) {
    try {
        //调用mock方法模拟数据
        var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1 + param.name,
                'name|2-10': 'abd'
            }]
          }
        );
        // 接口返回文件信息
        ctx.body = {
            code: '0',
            desc: 'success',
            data: data
        };
    } catch (error) {
      console.error(error);
      // 发生错误
      ctx.body = {
        code: '0',
        desc: error,
        data: {
          url: '//yun.dui88.com/babi/img/f7h8s7nb6h.jpg'
        }
      };
    }
  };