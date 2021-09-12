import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component:Admin,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  const token = window.sessionStorage.getItem("token")
  if (to.path==='/login') return next()
  if (!token && to.path==='/admin'){
    next('/login')
  }else{
    next()
  }
})

export default router
