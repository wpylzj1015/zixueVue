<template>
  <div>这是使用reactive响应式创建的：{{ state.count }}</div>
  <button @click="increment">增加reactive响应式count</button>

  <div>{{ obj }}</div>
  <button @click="mutateDeeply">更新</button>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: "reactiveBase",
  setup() {
    /**
     * 我们可以使用 reactive()函数创建一个响应式对象或数组
     * 要在组件模板中使用响应式状态,需要在setup()函数中定义并返回
     * */
        // 栗子
    const state = reactive({count: 0});

    /**
     * 自然，我们也可以在同一个作用域下定义更新响应式状态的函数，并将他们作为方法与状态一起暴露出去
     * */
    // 栗子
    function increment() {
      state.count++
    }

    /**
     * DOM更新时机
     * 当你更改响应式状态后，DOM会自动更新。然而，你得注意DOM的更新并不是同步的，相反
     * Vue将缓冲它们直到更新周期的 "下个时机" 以确保无论你进行了多少次状态更改，每个组件都只更新一次
     * 若要等待一个状态改变后的DOM更新完成，你可以使用nextTick()这个全局API
     * */

    /**
     * 深层响应性
     * 在Vue中，状态都是默认深层响应式的，这意味着即使在更改深层次的对象或数组，你的改动也能被检测到
     * */
        // 栗子
    const obj = reactive({
          nested: {num: 0},
          arr: ['foo', 'bar']
        })

    function mutateDeeply() {
      obj.nested.num++;
      obj.arr.push('baz')
      obj.nested.name = '张三'
    }

    /**
     * 为保证访问代理的一致性，对同一个原始对象调用reactive()会总是返回同样的代理对象，
     * 而对一个已存在代理对象调用reactive()会返回其本身
     *
     * // 在同一个对象上调用 reactive() 会返回相同的代理
     * console.log(reactive(raw) === proxy) // true
     * // 在一个代理上调用 reactive() 会返回它自己
     * console.log(reactive(proxy) === proxy) // true
     * */


    /**
     * reactive()的局限性
     * reactive()API有两条限制
     * 1.仅对对象类型有效(对象、数组和Map、Set这样的集合类型),而对string、number、boolean这样的原始类型无效
     * 2.因为Vue的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用
     * 这意味着我们不可以随意地替换一个响应式对象，因为这将导致对初始引用的响应性连接丢失
     *
     * let state = reactive({count:0});
     * 上面的引用({count:0})将不再被追踪(响应性连接已丢失)
     * state = reactive({count:1});
     *
     * 同时这也意味着当我们将响应式对象的属性赋值或解构至本地变量时，或是将该属性传入一个函数时，
     * 我们会失去响应性
     *
     * const state = reactive({ count : 0 })
     * n是一个局部变量，通state.count失去响应性连接
     * let n = state.count;
     * 不影响原始的state
     * n++;
     *
     * count也和state.count失去了响应性连接
     * let { count } = state
     * 不会影响原始的state
     * count++
     *
     * 该函数接收一个普通数字，并且将无法跟踪state.count的变化
     * callSomeFunction(state.count)
     * */

    /**
     * 用ref()定义响应式变量
     * reactive()的种种限制归根结底是因为javascript没有可以作用于所有值类型的引用机制
     * 为此，Vue提供了一个ref()方法来允许我们创建可以使用任何值类型的响应式ref
     * */
    return {
      state,
      increment,
      obj,
      mutateDeeply
    }
  }
}
</script>

<style scoped>

</style>