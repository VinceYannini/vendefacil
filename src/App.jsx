import { Navigate, Route, Routes } from 'react-router-dom'
import RequireAdmin from '@/components/RequireAdmin'
import { AdminSessionProvider } from '@/context/AdminSessionContext'
import AdminAccessPage from '@/pages/AdminAccessPage'
import AdminPanelPage from '@/pages/AdminPanelPage'
import NotFoundPage from '@/pages/NotFoundPage'
import PublicLandingPage from '@/pages/PublicLandingPage'
import './App.css'

function App() {
  return (
    <AdminSessionProvider>
      <Routes>
        <Route path="/" element={<PublicLandingPage />} />
        <Route path="/admin" element={<AdminAccessPage />} />
        <Route
          path="/admin/panel"
          element={
            <RequireAdmin>
              <AdminPanelPage />
            </RequireAdmin>
          }
        />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AdminSessionProvider>
  )
}

export default App
