import { lazy } from 'react'
import { RouteConfig, RouteGroup } from '../types/route'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const Profile = lazy(() => import('../pages/Profile'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const routeConfig: RouteConfig[] = [
  {
    id: 'dashboard',
    path: '/',
    component: Dashboard,
    title: 'Dashboard',
    description: 'Agricultural overview and analytics',
    requiresAuth: false,
    layout: 'default',
    meta: {
      breadcrumb: 'Dashboard',
      category: 'overview',
      order: 1
    }
  },
  {
    id: 'profile',
    path: '/profile',
    component: Profile,
    title: 'Profile',
    description: 'User profile and settings',
    requiresAuth: false,
    layout: 'default',
    meta: {
      breadcrumb: 'Profile',
      category: 'user',
      order: 2
    }
  }
]

export const notFoundRoute: RouteConfig = {
  id: 'not-found',
  path: '*',
  component: NotFound,
  title: 'Page Not Found',
  description: 'The requested page could not be found',
  requiresAuth: false,
  layout: 'default'
}

export const routeGroups: RouteGroup[] = [
  {
    id: 'overview',
    name: 'Overview',
    routes: routeConfig.filter(route => route.meta?.category === 'overview'),
    order: 1
  },
  {
    id: 'user',
    name: 'User',
    routes: routeConfig.filter(route => route.meta?.category === 'user'),
    order: 2
  }
]