import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Control Diario de Caja',
    description:
      'Visualiza ingresos, egresos y margen en una sola vista para tomar decisiones sin esperar cierres mensuales.',
  },
  {
    title: 'Inventario Vivo',
    description:
      'Detecta productos de alta rotacion, roturas de stock y compras necesarias antes de perder ventas.',
  },
  {
    title: 'Panel de Rendimiento',
    description:
      'Convierte datos de operaciones en indicadores accionables por sede, vendedor y categoria.',
  },
]

function PublicLandingPage() {
  return (
    <main className="public-site">
      <header className="public-nav">
        <p className="brand">Vendefacil Admin</p>
        <div className="nav-actions">
          <a href="#services">Servicios</a>
          <a href="#impact">Impacto</a>
          <Link to="/admin" className="cta-secondary">
            Acceso Admin
          </Link>
        </div>
      </header>

      <section className="hero-block">
        <p className="eyebrow">Soluciones para negocios en crecimiento</p>
        <h1>Tu operacion en orden, tus decisiones con datos</h1>
        <p className="hero-copy">
          Diseñamos sistemas internos para negocios que necesitan control real,
          velocidad operativa y visibilidad completa de ventas, inventario y
          rendimiento.
        </p>
        <div className="hero-actions">
          <a className="cta-primary" href="mailto:contacto@vendefacil.app">
            Solicitar demo
          </a>
          <Link className="cta-secondary" to="/admin">
            Soy admin
          </Link>
        </div>
      </section>

      <section id="services" className="services-grid">
        {features.map((feature) => (
          <article key={feature.title} className="service-card">
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <section id="impact" className="impact-band">
        <p>
          Implementacion orientada a resultados: menos caos operativo, mejores
          cierres de caja y decisiones semanales basadas en evidencia.
        </p>
      </section>
    </main>
  )
}

export default PublicLandingPage
