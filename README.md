## Vue-seed-spa Project

## 目录结构说明

<pre>
vue-seed-spa
│  .babelrc                  //babel配置
│  .eslintignore             //eslint忽略配置
│  .eslintrc.js              //eslint配置
│  .gitignore                //git忽略配置
│  index.html                //主页
│  package-lock.json         //package锁定文件
│  package.json              //package配置
│  pathmap.json              //webpack alias配置
│  README.md                 //readme
│  
├─build                      //构建配置目录
│      build.js
│      proxy.js
│      utils.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.dev.server.js
│      webpack.prod.conf.js
│      webpack.test.conf.js
│
├─config                    //构建全局配置目录
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│
└─src
    │  App.vue             //页面根组件
    │  index.js            //入口文件
    │  
    ├─api                  //api定义目录
    │      index.js
    │      user.js
    │
    ├─assets               //静态资源目录
    │  ├─fonts             //字体
    │  ├─images            //图片
    │  │      logo.png
    │  │      study.png
    │  │
    │  ├─js                //脚本
    │  │      common.js
    │  │
    │  └─styles            //样式
    ├─components           //组件目录
    │            
    │
    ├─config              //全局配置目录
    │  │  index.js        //项目整体配置文件
    │  │  
    │  └─interceptor      //拦截器配置
    │          axios.js   //请求拦截器配置
    │          router.js  //路由跳转拦截器
    │
    ├─plugins             //插件相关，数据请求等实例
    │      api.js
    │      axios.js
    │      eventbus.js
    │      index.js
    │
    ├─router              //路由配置
    │      index.js
    │      routers.js
    │
    ├─store               //vuex目录
    │  │  index.js
    │  │  
    │  └─modules
    │          app.js
    │
    └─utils               //工具类
    │      index.js
    │
    └─views             	//页面

</pre>

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build
```
## 说明
1. `build/webpack.dev.server.js`中

   ```javascript
   const proxyurl = 'http://server.host:8081';
   ```

   接口代理到`server.host`的`8081`端口。可通过`switchHosts`工具配置后端的`ip`地址为`server.host`，实现不同后端地址的快速切换。

   ```javascript
   app.use('/xiaozhi-back-api/*', proxy(proxyurl));
   ```

   代理所有接口前缀为`xiaozhi-back-api`的真实的URL地址。

2. `config/index.js`中：

   ```javascript
   spaMode: true
   ```

   设置是否单页模式

   ```javascript
   entry: function() {
     return this.spaMode ? './src/index.js' : './src/views/**/*.js';
   }
   ```

   设置入口文件

   ```javascript
   htmlTemplate: function() {
     return this.spaMode ? 'index.html' : './src/views/**/*.html';
   }
   ```

   设置html模板文件

   ```javascript
   // 开发配置
   dev: {
     // 打包输出目录
     assetsRoot: path.resolve(__dirname, '../dist'),
     // 打包输出目录下的二级目录
     assetsSubDirectory: 'assets',
     // 发布路径，hash模式下使用'./'，history模式下使用'/'
     assetsPublicPath: '/',
   }
   ```

3. `src/config/index.js`

   ```javascript
   // axios 默认配置
   export const AXIOS_DEFAULT_CONFIG = {
     // 超时时间
     timeout: 20000,
     maxContentLength: 20000,
     headers: {
       // 默认Content-Type
       'Content-Type': 'application/json' 
     },
     // 接口前缀
     baseURL: '/xiaozhi-back-api'
   };
   
   // 开启请求参数打印
   export const CONSOLE_REQUEST_ENABLE = true;
   // 开启响应参数打印
   export const CONSOLE_RESPONSE_ENABLE = true;
   
   // 面包屑的 主页是dashboard
   export const HOME_NAME = 'dashboard';
   
   // Router 默认配置
   export const ROUTER_DEFAULT_CONFIG = {
     mode: 'history',
     base: '/'
   };
   
   // API 默认配置
   export const API_DEFAULT_CONFIG = {
     mockBaseURL: 'http://yapi.demo.qunar.com', // mock地址
     mock: false, // 是否开启mock
     debug: false, // 是否开启debug模式
     sep: '/' // 接口调用分隔符
   };
   ```

4. 未加入axios拦截器和路由拦截器