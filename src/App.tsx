import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactNode, Suspense, useEffect } from 'react'
import { ErrorBoundary } from './components/ErrorBoundary'
import { routeConfig, notFoundRoute } from './config/routes'
import { IRouteConfig } from './types/i-route'
import Navigation from './components/Navigation'
import LoadingSpinner from './components/LoadingSpinner'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  useEffect(() => {
    document.title = 'AgriLogic'
  }, [])

  return (
    <Router>
      <div className="min-h-screen agri-gradient-sage">
        <Navigation />
        <main>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner text="Loading page..." />}>
              <Routes>
                {routeConfig.map((route) => (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={
                      <RouteWrapper route={route}>
                        <route.component />
                      </RouteWrapper>
                    }
                  />
                ))}
                <Route
                  path={notFoundRoute.path}
                  element={
                    <RouteWrapper route={notFoundRoute}>
                      <notFoundRoute.component />
                    </RouteWrapper>
                  }
                />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  )
}

function RouteWrapper({ route, children }: { route: IRouteConfig; children: ReactNode }) {
  useEffect(() => {
    document.title = `${route.title} - AgriLogic`
  }, [route.title])

  if (route.requiresAuth) {
    return (
      <ProtectedRoute requiresAuth={route.requiresAuth}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </ProtectedRoute>
    )
  }

  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  )
}

export default App