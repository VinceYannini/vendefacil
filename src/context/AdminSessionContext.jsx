/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'

const STORAGE_KEY = 'vendefacil-admin-session'
const AdminSessionContext = createContext(null)

const readSession = () => {
  const raw = window.sessionStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return null
  }

  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function AdminSessionProvider({ children }) {
  const [session, setSession] = useState(readSession)

  const signIn = ({ email }) => {
    const nextSession = {
      email,
      signedAt: new Date().toISOString(),
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession))
    setSession(nextSession)
  }

  const signOut = () => {
    window.sessionStorage.removeItem(STORAGE_KEY)
    setSession(null)
  }

  const value = useMemo(
    () => ({ session, isAuthenticated: Boolean(session), signIn, signOut }),
    [session],
  )

  return (
    <AdminSessionContext.Provider value={value}>
      {children}
    </AdminSessionContext.Provider>
  )
}

export function useAdminSession() {
  const context = useContext(AdminSessionContext)

  if (!context) {
    throw new Error('useAdminSession must be used inside AdminSessionProvider')
  }

  return context
}
