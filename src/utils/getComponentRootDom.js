 // 实例化 并返回 dom 结构
 import Vue from 'vue';
 export default function getComponentRootDom(comp,props){
   const vm = new Vue({
     render:(h)=>h(comp,{props}),
   });
   vm.$mount();
   return vm.$el;
 }
 