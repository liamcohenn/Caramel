import { Link } from 'react-router-dom'
import productosData from '../data/productos.json'
import ProductoCard from './ProductoCard'

// Fallback por si productos.json queda vacío de nuevo
const PRODUCTOS_EJEMPLO = [
  { id: 1, nombre: 'Torta de chocolate', precio: 28500, fotos: [] },
  { id: 2, nombre: 'Budín de limón', precio: 8500, fotos: [] },
  { id: 3, nombre: 'Caja de cuadraditos x12', precio: 14000, fotos: [] },
  { id: 4, nombre: 'Torta vainilla y dulce de leche', precio: 26000, fotos: [] },
]

function ProductosDestacados() {
  const productos = productosData.length > 0 ? productosData : PRODUCTOS_EJEMPLO

  return (
    <section className="products">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-line"></div>
          <h2>Productos destacados</h2>
          <p>Nuestras creaciones más pedidas, hechas con ingredientes premium y mucho amor.</p>
        </div>
        <div className="grid">
          {productos.slice(0, 4).map((producto) => (
            <ProductoCard producto={producto} key={producto.id} />
          ))}
        </div>
        <div className="see-all">
          <Link to="/productos">Ver todos los productos</Link>
        </div>
      </div>
    </section>
  )
}

export default ProductosDestacados
