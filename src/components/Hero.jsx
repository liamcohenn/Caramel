import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <h1>
            Pura dulzura
            <em>en cada bocado</em>
          </h1>
          <p>
            Tortas, budines, boxes dulces y tartas caseras, horneados en Buenos Aires con
            ingredientes de verdad. Sin conservantes, sin apuro.
          </p>
          <Link className="cta" to="/productos">
            Ver productos
          </Link>
        </div>
        <div className="hero-art">
          <img src="/images/hero.png" alt="Logo Caramel" className="hero-logo" />
        </div>
      </div>
    </section>
  )
}

export default Hero
