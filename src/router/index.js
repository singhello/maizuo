import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import City from '@/components/City'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    //{path: '/',name: 'home',component: Home},
    {path: '/',name: 'home',component: Home},
    {path: '/city',name: 'city',component: City},
    {path: '/login',name: 'login',component: Login}
  ]
})
