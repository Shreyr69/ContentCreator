import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ThemeProvider from './components/ThemeProvider'
import AuthProvider from './contexts/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
