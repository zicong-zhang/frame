# 微养车找店

#### 需求背景： 



#### 文件说明：

```
src -- 源代码文件

	- assets 静态文件/或者第三方插件


	- network 请求相关文件

	        · apiMapping真接口文件

		 · mockMapping假数据文件

    	- pages 页面

   	- utils 自定义的第三方方法

    	- app.js 入口文件

    	- app.json 全局配置项

    	- app.wxss 全局的样式文件

mock -- 假数据
    说明：是用express作为服务，开启127.0.0.1:4000的服务；
    使用说明：每个假数据的文件夹要跟pages的文件夹路径保持一致，才能访问到

configs -- 各个环境接口的配置
```



#### 使用说明：

##### 初次下载：

1. npm install
2. 相关命令：

```
	npm run mock -- 跑假数据接口
    npm run mock:lint -- 同上，且加了代码检查eslint
    (特别说明：由于webpack的--watch,和node服务，这两个双进程无法同时执行，优先是执行--watch，所以，每次修改假数据，都要重新run一下)
    npm run dev -- 内测,实时watch
    npm run dev:lint -- 同上，且加了代码检查eslint
    npm run dev-b -- 公测,实时watch
    npm run dev-b:lint -- 同上，且加了代码检查eslint
    npm run dev-r -- 正式,实时watch
    npm run dev-r:lint -- 同上，且加了代码检查eslint
    npm run build -- 内测,不实时，但压缩
    npm run build-b -- 公测,不实时，但压缩
    npm run build-r -- 正式,不实时，但压缩
```



