import { Link } from 'react-router-dom'
import categorias from '../data/categorias.json'

const INFO_CATEGORIA = {
  1: { emoji: '🎂', clase: 'cat-1' },
  2: { emoji: '🍞', clase: 'cat-2' },
  3: { emoji: '🧈', clase: 'cat-3' },
  4: { emoji: '🥧', clase: 'cat-4' },
}

function Categorias() {
  return (
    <section className="categories">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-line"></div>
          <h2>Elegí tu categoría</h2>
          <p>Todo lo que horneamos, organizado para que encuentres rápido lo que buscás.</p>
        </div>
        <div className="cat-grid">
          {categorias.map((categoria) => {
            const info = INFO_CATEGORIA[categoria.id] ?? { emoji: '🍰', clase: 'cat-1' }
            return (
              <Link
                className={`cat-card ${info.clase}`}
                to={`/productos#${categoria.slug}`}
                key={categoria.id}
              >
                <span className="emoji">{info.emoji}</span>
                <span>{categoria.nombre}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categorias
