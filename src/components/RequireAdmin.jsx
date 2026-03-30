import { Navigate } from 'react-router-dom'
import { useAdminSession } from '@/context/AdminSessionContext'

function RequireAdmin({ children }) {
  const { isAuthenticated } = useAdminSession()

  if (!isAuthenticated) {
    return <Navigate replace to="/admin" />
  }

  return children
}

export default RequireAdmin
