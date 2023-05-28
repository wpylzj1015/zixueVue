<template>
  <div>
    {{count}}
  </div>
  <button @click="countNum">增加1</button>
  <reuse></reuse>
  <ReactiveBase></ReactiveBase>
</template>


<script>
import ReactiveBase from "./components/reactiveBase.vue";
  export default {
    components:{
      ReactiveBase
    },
    data(){
      return {
        count:1,
        obj:{
          a:1,
          b:2
        }
      }
    },
    methods:{
      countNum(){
        console.log('出发了')
        this.count++;
        console.log(obj.c)
      }
    }
  }
</script>