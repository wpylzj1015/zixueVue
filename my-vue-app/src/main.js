import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import reuse from "./components/reuse.vue";
const app = createApp(App)

//应用配置
// 应用实例会暴露一个.config对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器
// 用来捕获所有子组件上的错误
app.config.errorHandler = (err)=>{
    console.log(err) // 可用于捕捉全局错误防止程序崩溃
}
//应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件
app.component('reuse',reuse)
console.log(app)
app.mount('#app')


/**
* 多个应用实例
* 应用实例并不只限于一个，createApp API允许你在同一个页面中创建多个共存的Vue应用
* 而且每个应用都拥有自己的用于配置和全局资源的作用域
 *
 * 如果你正在使用Vue来增强服务端渲染HTML，并且只想要Vue去控制一个大型页面中特殊的一小部分
 * 应避免将一个单独的Vue应用实例挂载到整个页面上，而是应该创建多个小的应用实例，将它们分别挂载到
 * 所需要的元素上去
* */
