<template>
  <div>
    <!--
      指令是带有v-前缀的特殊attribute。Vue提供了许多内置指令，常见的有v-if，v-html
      指令attribute的期望值为一个js表达式(除了少数几个例外)，即之后要讨论到的v-for
      一个指令的任务是在其表达式的值变化时响应式地更新DOM
    -->
  </div>
</template>

<script>
export default {
  name: "Directives"
}
// 参数Arguments
// 某些指令会需要一个参数，在指令名后通过一个冒号隔开做标识符
// 例如 v-bind指令来响应式地更新一个HTML attribute
// 栗子
// <a v-bind:href="url"></a>
/**
 * 这里的href就是一个参数，它告诉v-bind指令将表达式url的值绑定到元素的href
 * attribute上，在简写中，参数前的一切(例如v-bind:)都会被缩略为一个 :字符
 *
 * v-on:submit.prevent = "onSubmit"
 * Name-Argument-Modifiers-Value
 * */

</script>

<style scoped>

</style>