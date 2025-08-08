import { ComponentType, LazyExoticComponent } from 'react'

export interface RouteConfig {
  id: string
  path: string
  component: LazyExoticComponent<ComponentType<Record<string, unknown>>>
  title: string
  description?: string
  requiresAuth?: boolean
  layout?: 'default' | 'auth' | 'fullscreen'
  meta?: {
    breadcrumb?: string
    category?: string
    order?: number
  }
}

export interface RouteGroup {
  id: string
  name: string
  routes: RouteConfig[]
  order: number
}