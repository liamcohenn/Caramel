import { Link } from 'react-router-dom'

const CLASE_CATEGORIA = {
  1: 'cat-1',
  2: 'cat-2',
  3: 'cat-3',
  4: 'cat-4',
}

function CategoriaCard({ categoria }) {
  const clase = CLASE_CATEGORIA[categoria.id] ?? 'cat-1'

  return (
    <Link className={`cat-card ${clase}`} to={`/productos#${categoria.slug}`}>
      {categoria.imagen && (
        <img
          className="cat-card-img"
          src={categoria.imagen}
          alt=""
          onError={(e) => { e.target.style.display = 'none' }}
        />
      )}
      <span>{categoria.nombre}</span>
    </Link>
  )
}

export default CategoriaCard
