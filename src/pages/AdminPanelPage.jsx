import { Link } from 'react-router-dom'
import { useAdminSession } from '@/context/AdminSessionContext'

function AdminPanelPage() {
  const { session, signOut } = useAdminSession()

  return (
    <main className="admin-site">
      <section className="admin-card">
        <p className="eyebrow">Sistema interno</p>
        <h1>Panel Administrativo</h1>
        <p>
          Sesion iniciada como <strong>{session?.email}</strong>. Esta vista ya
          queda separada del sitio publico para evolucionar hacia
          <strong> admin.tudominio.com</strong>.
        </p>

        <div className="admin-actions">
          <button type="button" className="cta-primary" onClick={signOut}>
            Cerrar sesion
          </button>
          <Link className="cta-secondary" to="/">
            Ir al sitio publico
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AdminPanelPage
