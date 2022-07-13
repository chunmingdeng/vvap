# 规范 & 个人 & 搭建基础的vite + vue3 + Typescript项目

## 官方脚手架
```js
npm init vite@latest
// 然后按照cli的提示步骤一步步执行即可
```

## 打包配置
> 在vue文件中使用的变量，必须以`VITE_`开头        

- 公共配置`.env`

- 开发环境配置`.env.development`
  ```js
  VITE_AXIOS_PREFIX = '/api'
  VITE_AXIOS_BASEURL = ''
  ```

- 生产环境配置`.env.production`
  ```js
  VITE_AXIOS_PREFIX = ''
  VITE_AXIOS_BASEURL = 'http://serverIp:serverPort'
  ```

- vue文件中使用
  ```js
  const projectName = import.meta.env.VITE_PRO_TITLE;
  ```

- 自定义打包mode
  > 例如我们新增一个mode为`staging`的mode       
  - 在root目录下新增`.env.staging`文件    
  - 在`.env.staging`新增想配置的变量
  - 修改`package.json`文件的脚本命令部分,添加以下一行命令      
    ```json
    "build:staging": "vue-tsc --noEmit && vite build --mode test",
    ```

## 配置axios
```js
npm install axios
```
- 添加http文件夹，添加index.ts文件，status.ts文件，并添加相关的配置


## 配置项目路径的alias
- 在`vite.config.ts`中配置
  ```js
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
  ```
- ts项目中需要在`tsconfig.json`添加如下配置
  ```js
  // 这里需要注意斜杠，[]中的所有路径以相对路径计算的（相对于服务根目录），所以不要以/开头
  // * 的含义代表所有
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
  // 在tsconfig.json文件中已经有了include字段了，一般定义已经够用，如果有规则之外的文件需要添加，那则需要自己手动添加匹配
  ```

## pinia
```js
// install
npm install pinia
// persist
npm install pinia-plugin-persist
```
- 在`store/index.ts`中新增
  ```js
  import piniaPersist from 'pinia-plugin-persist'

  const store = createPinia()
  store.use(piniaPersist);
  ```
- 在`store/user.ts`中新增
  ```js
  // 持久化存储的策略
  persist: {
    enabled: true, 
    strategies:[
      { storage: localStorage}
    ]
  }
  ```