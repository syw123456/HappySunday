create your project
first
#全局安装vue-cli
$ npm install --global vue-cli
#创建一个基于Webpack模板的新的项目
$ vue init webpack myproject
#安装依赖
$ cd my-project
$ npm install
$ npm run dev

# myproject
> it is a project for test.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
vuex

一个webapp是有很多个组件组合起来的，组件的变量的作用域是独立的，那问题就出来了，数据怎么在组件中交互。
vuex就很好的解决了这个问题提。
举个例子，在一个app中，我们在购物组件点击了购买一样物品，我们希望订单中心组件中看到购买的物品相应的增加一样。
Vuex通俗来讲，他就是一个在全部组件共享的model层data属性，它是响应式的。
