import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashBoard from '../views/DashBoard.vue'
import CreateUsersPage from '../views/admin/CreateUserPage.vue'
import EditUserPage from '../views/admin/EditUserPage'
import UsersList from '../views/admin/UsersList'
import roles from '../data/roles.json'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/dash-board',
    name: 'dashBoard',
    component: DashBoard
  },
  {
    path: '/create-user',
    name: 'createUser',
    component: CreateUsersPage,
    meta: {
      role: roles.ADMIN
    }
  },
  {
    path: '/edit-user/:id',
    name: 'editUser',
    component: EditUserPage,
    meta: {
      role: roles.ADMIN
    }
  },
  {
    path: '/users-list',
    name: 'usersList',
    component: UsersList,
    meta: {
      role: roles.ADMIN
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'login' && !token) {
    next({ name: 'login' })
  } else {
    const role = localStorage.getItem('role')
    if (!to.meta || (to.meta && !to.meta.role) || (to.meta && role === to.meta.role) || role === roles.ADMIN) {
      next()
    } else {
      alert('Your cant nav to this page with your role')
      next(false)
    }
  }
})

export default router
