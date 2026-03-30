import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdminSession } from '@/context/AdminSessionContext'
import { isAllowedEmail, isValidAccessCode } from '@/lib/adminConfig'

function AdminAccessPage() {
  const { session, signIn } = useAdminSession()
  const [email, setEmail] = useState('')
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState('')

  if (session) {
    return <Navigate replace to="/admin/panel" />
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setError('Ingresa tu correo de administrador.')
      return
    }

    if (!isAllowedEmail(email)) {
      setError('Este correo no esta habilitado para acceder al sistema.')
      return
    }

    if (!isValidAccessCode(accessCode)) {
      setError('Codigo de acceso invalido.')
      return
    }

    signIn({ email: email.trim().toLowerCase() })
    setError('')
  }

  return (
    <main className="admin-site">
      <section className="admin-card">
        <p className="eyebrow">Area protegida</p>
        <h1>Acceso Administrativo</h1>
        <p>
          Solo personal designado puede entrar. Este acceso inicial debe
          complementarse con backend y politicas de datos en produccion.
        </p>

        <form className="admin-form" onSubmit={handleSubmit}>
          <label htmlFor="admin-email">Correo admin</label>
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@negocio.com"
            required
          />

          <label htmlFor="admin-code">Codigo de acceso</label>
          <input
            id="admin-code"
            type="password"
            value={accessCode}
            onChange={(event) => setAccessCode(event.target.value)}
            placeholder="******"
          />

          {error ? <p className="error-text">{error}</p> : null}

          <button type="submit" className="cta-primary">
            Entrar al sistema
          </button>
        </form>
      </section>
    </main>
  )
}

export default AdminAccessPage
