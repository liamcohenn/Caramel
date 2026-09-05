import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import categorias from '../data/categorias.json'
import productos from '../data/productos.json'
import ProductoCard from '../components/ProductoCard'
import { useCarrito } from '../context/CarritoContext'

function ProductoDetalle() {
  const { id } = useParams()
  const producto = productos.find((p) => p.id === Number(id))

  if (!producto) {
    return (
      <section className="detalle no-encontrado">
        <div className="wrap">
          <p>Producto no encontrado.</p>
          <Link to="/productos">Volver a productos</Link>
        </div>
      </section>
    )
  }

  return <ProductoEncontrado producto={producto} />
}

function ProductoEncontrado({ producto }) {
  const { dispatch } = useCarrito()
  const { id, nombre, descripcion, precio, categoriaId, fotos, porciones, unidades } = producto
  const categoria = categorias.find((c) => c.id === categoriaId)

  const [fotoActiva, setFotoActiva] = useState(0)
  const [cantidad, setCantidad] = useState(1)

  const relacionados = productos
    .filter((p) => p.categoriaId === categoriaId && p.id !== id)
    .slice(0, 4)

  const precioValido = typeof precio === 'number'

  function handleAgregar() {
    if (!precioValido) return // no se puede agregar al carrito sin precio cargado
    dispatch({
      type: 'AGREGAR',
      payload: { id, nombre, precio, foto: fotos && fotos[0], cantidad },
    })
  }

  return (
    <>
      <div className="wrap crumbs-top">
        <div className="crumbs">
          <Link to="/">Inicio</Link>
          <span className="sep">/</span>
          <Link to="/productos">Productos</Link>
          {categoria && (
            <>
              <span className="sep">/</span>
              <Link to="/productos">{categoria.nombre}</Link>
            </>
          )}
          <span className="sep">/</span>
          <span className="current">{nombre}</span>
        </div>
      </div>

      <section className="detalle">
        <div className="detalle-inner">
          <div className="producto-galeria">
            <div className="galeria-main">
              {fotos && fotos[fotoActiva] && (
                <img
                  src={fotos[fotoActiva]}
                  alt={nombre}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              )}
            </div>
            {fotos && fotos.length > 1 && (
              <div className="galeria-thumbs">
                {fotos.map((foto, index) => (
                  <div
                    key={foto}
                    className={`thumb${index === fotoActiva ? ' active' : ''}`}
                    onClick={() => setFotoActiva(index)}
                  >
                    <img src={foto} alt="" onError={(e) => { e.target.style.display = 'none' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="info">
            {categoria && <span className="cat-tag">{categoria.nombre}</span>}
            <h1>{nombre}</h1>
            <span className="precio">
              {precioValido ? `$${precio.toLocaleString('es-AR')}` : 'Consultar precio'}
            </span>
            {descripcion && <p className="desc">{descripcion}</p>}

            <div className="badges">
              {porciones && <div className="badge">🍽 {porciones} porciones</div>}
              {unidades && <div className="badge">📦 Caja x{unidades} unidades</div>}
              <div className="badge">📅 Con 48hs de anticipación</div>
            </div>

            <div className="qty-row">
              <div className="qty-selector">
                <button type="button" onClick={() => setCantidad((c) => Math.max(1, c - 1))}>
                  −
                </button>
                <span>{cantidad}</span>
                <button type="button" onClick={() => setCantidad((c) => c + 1)}>
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className="add-btn-lg"
              onClick={handleAgregar}
              disabled={!precioValido}
              title={!precioValido ? 'Precio a confirmar' : undefined}
            >
              🛍 Agregar al Carrito
            </button>

            <div className="nota">
              <span className="icon">💬</span>
              <span>
                ¿Necesitás una torta con una fecha o tamaño especial? Coordinalo directo por
                WhatsApp después de agregarla al carrito.
              </span>
            </div>
          </div>
        </div>
      </section>

      {relacionados.length > 0 && (
        <section className="relacionados">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow-line"></div>
              <h2>También te puede gustar</h2>
              <p>Otros productos de la misma categoría.</p>
            </div>
            <div className="grid">
              {relacionados.map((relacionado) => (
                <ProductoCard producto={relacionado} key={relacionado.id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ProductoDetalle