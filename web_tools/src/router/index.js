import Vue from "vue";
import Router from "vue-router";


import tools from "@/views/tools/index.vue";
Vue.use(Router);

export default new Router({
  routes: [

    {
      path: "/",
      name: "tools",
      component: tools
    },
    {
      path:"/tools",
      name:"tools",
      component: tools
    }
  ]
});
