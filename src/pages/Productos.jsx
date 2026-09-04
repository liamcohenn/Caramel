import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import categorias from '../data/categorias.json'
import productos from '../data/productos.json'
import ProductoCard from '../components/ProductoCard'

const EMOJI_CATEGORIA = {
  1: '🎂',
  2: '🍞',
  3: '🧈',
  4: '🥧',
}

function Productos() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const seccion = document.getElementById(location.hash.slice(1))
    if (seccion) seccion.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <div className="page-header">
        <div className="wrap">
          <div className="crumbs">
            <Link to="/">Inicio</Link>
            <span className="sep">/</span>
            <span className="current">Productos</span>
          </div>
          <h1>
            Todo lo que <em>horneamos</em>
          </h1>
          <p>
            Tortas, budines, boxes dulces y tartas, hechos frescos con encargo previo. Elegí una
            categoría o mirá todo el catálogo.
          </p>
        </div>
      </div>

      <div className="cat-index">
        <div className="wrap cat-index-list">
          {categorias.map((categoria) => (
            <a className="cat-pill" href={`#${categoria.slug}`} key={categoria.id}>
              {EMOJI_CATEGORIA[categoria.id] ?? '🍰'} {categoria.nombre}
            </a>
          ))}
        </div>
      </div>

      {categorias.map((categoria) => {
        const productosCategoria = productos.filter((p) => p.categoriaId === categoria.id)
        if (productosCategoria.length === 0) return null

        return (
          <section className="cat-section" id={categoria.slug} key={categoria.id}>
            <div className="wrap">
              <div className="cat-heading">
                <div className="cat-heading-left">
                  <div className="emoji-badge">{EMOJI_CATEGORIA[categoria.id] ?? '🍰'}</div>
                  <h2>{categoria.nombre}</h2>
                </div>
                <span className="count">{productosCategoria.length} productos</span>
              </div>
              <div className="grid">
                {productosCategoria.map((producto) => (
                  <ProductoCard producto={producto} key={producto.id} />
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default Productos
