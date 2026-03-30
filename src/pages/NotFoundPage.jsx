import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="admin-site">
      <section className="admin-card">
        <p className="eyebrow">404</p>
        <h1>Ruta no encontrada</h1>
        <p>La pagina que buscas no existe o fue movida.</p>
        <Link className="cta-primary" to="/">
          Volver al inicio
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
