import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { ThemeContext } from '../components/ThemeContext'

function Home() {
  const { isAuthenticated, user } = useContext(AuthContext)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Full Stack App
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isDark
                        ? 'text-white hover:bg-gray-700'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Welcome to Full Stack Project
          </h1>
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A modern authentication system with OTP verification
          </p>

          {isAuthenticated ? (
            <div className={`max-w-2xl mx-auto p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                You're Logged In! 🎉
              </h2>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Welcome back, <strong>{user?.name}</strong>!
              </p>
              <Link
                to="/dashboard"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Dashboard →
              </Link>
            </div>
          ) : (
            <div className="flex justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className={`px-8 py-4 text-lg rounded-lg transition-colors shadow-lg ${
                  isDark
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Login
              </Link>
            </div>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-4xl mb-4">🔐</div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Secure Authentication
            </h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              OTP-based signup with email verification and secure JWT tokens
            </p>
          </div>

          <div className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-4xl mb-4">🎨</div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Beautiful UI
            </h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Modern design with Tailwind CSS and dark mode support
            </p>
          </div>

          <div className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Fast & Modern
            </h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Built with React, Node.js, and MongoDB for optimal performance
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
