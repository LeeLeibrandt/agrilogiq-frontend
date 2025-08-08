import { ComponentType, LazyExoticComponent } from 'react'

export interface IRouteConfig {
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

export interface IRouteGroup {
  id: string
  name: string
  routes: IRouteConfig[]
  order: number
}