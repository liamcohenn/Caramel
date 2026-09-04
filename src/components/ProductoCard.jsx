import { Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'

function ProductoCard({ producto }) {
  const { dispatch } = useCarrito()
  const { id, nombre, descripcion, precio, fotos } = producto
  const foto = fotos && fotos[0]

  function handleAgregar() {
    dispatch({ type: 'AGREGAR', payload: { id, nombre, precio, foto } })
  }

  return (
    <div className="card">
      <Link className="card-link" to={`/productos/${id}`}>
        <div className="card-img">
          {foto && (
            <img src={foto} alt={nombre} onError={(e) => { e.target.style.display = 'none' }} />
          )}
        </div>
        <div className="card-body">
          <h3>{nombre}</h3>
          {descripcion && <p className="card-desc">{descripcion}</p>}
          <span className="price">${precio.toLocaleString('es-AR')}</span>
        </div>
      </Link>
      <div className="card-footer">
        <button type="button" className="add-btn" onClick={handleAgregar}>
          🛍 Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default ProductoCard
