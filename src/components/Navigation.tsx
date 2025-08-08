import { Link, useLocation } from 'react-router-dom'
import { Sprout, Home, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: Home,
    color: 'sage'
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: User,
    color: 'sage'
  }
]

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className="bg-white border-b border-sage-200 agri-shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-sage-600 p-2 rounded-full">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-sage-900">AgriLogic</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? item.color === 'sage' ? 'bg-sage-100 text-sage-700'
                        : item.color === 'earth' ? 'bg-earth-100 text-earth-700'
                        : item.color === 'moss' ? 'bg-moss-100 text-moss-700'
                        : item.color === 'blue' ? 'bg-blue-100 text-blue-700'
                        : 'bg-sage-100 text-sage-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive && 'bg-sage-100 text-sage-700',
                    !isActive && 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}