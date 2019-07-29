import Vue from 'vue'
import Router from 'vue-router'

import Friends from '@/components/Friends'
import Profile from '@/components/Profile'
import ProfileSettings from '@/components/ProfileSettings'
import Blog from '@/components/Blog'
import Homepage from '@/components/Homepage'
import Users from '@/components/Users'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/users/:user_id',
      name: 'profile',
      component: Profile
    },
    {
      path: '/settings/:user_id',
      name: 'profile_settings',
      component: ProfileSettings
    },
    {
      path: '/blogs/:user_id',
      name: 'blog',
      component: Blog
    },
    {
      path: '/friends/:user_id',
      name: 'friends',
      component: Friends
    },
  ]
})