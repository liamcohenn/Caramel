import categorias from '../data/categorias.json'
import CategoriaCard from './CategoriaCard'

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
          {categorias.map((categoria) => (
            <CategoriaCard categoria={categoria} key={categoria.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categorias
