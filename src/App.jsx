import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import ComplaintForm from './pages/Complaint/ComplaintForm'
import AdminDashboard from './pages/Admin/AdminDashboard'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import './App.css'
import AdminSecret from './pages/Auth/AdminSecret'
import AdminRegister from './pages/Auth/AdminRegister'
import AdminDeptDashboard from './pages/Admin/AdminDeptDashboard'
import AdminLogin from './pages/Auth/AdminLogin'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/complaint" 
            element={
              <ProtectedRoute>
                <ComplaintForm />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute adminOnly>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
           <Route path="/admin/secret" element={<AdminSecret />} />
           <Route path="/admin/register" element={<AdminRegister/>}></Route>
           <Route path="/admin/login" element={<AdminLogin />} />
           <Route path="/admin/:dept" element={<ProtectedRoute adminOnly><AdminDeptDashboard /></ProtectedRoute>} />
        </Routes>
       
      </div>
    </AuthProvider>
  )
}

export default App
