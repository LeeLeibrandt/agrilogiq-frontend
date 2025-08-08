import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface ProtectedRouteProps {
  children: ReactNode
  requiresAuth?: boolean
  fallbackPath?: string
}

export default function ProtectedRoute({ 
  children, 
  requiresAuth = true,
  fallbackPath = '/login' 
}: ProtectedRouteProps) {
  const location = useLocation()
  
  // TODO: Replace with actual authentication logic
  // For now, always allow access since auth is not implemented
  const isAuthenticated = true // useAuth() or similar
  
  if (requiresAuth && !isAuthenticated) {
    return (
      <Navigate 
        to={fallbackPath} 
        state={{ from: location }} 
        replace 
      />
    )
  }

  return <>{children}</>
}

// Hook for future authentication state management
export function useAuth() {
  // TODO: Implement actual authentication state
  return {
    isAuthenticated: true,
    user: null,
    login: () => {},
    logout: () => {},
    loading: false
  }
}