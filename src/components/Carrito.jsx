import { useCarrito } from '../context/CarritoContext'
import { armarLinkWhatsapp } from '../utils/whatsapp'

const NUMERO_WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMERO

function Carrito() {
  const { carrito, dispatch, carritoAbierto, cerrarCarrito } = useCarrito()
  const carritoVacio = carrito.length === 0
  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  return (
    <>
      <div
        className={`overlay${carritoAbierto ? ' open' : ''}`}
        onClick={cerrarCarrito}
      ></div>
      <aside className={`drawer${carritoAbierto ? ' open' : ''}`}>
        <div className="drawer-head">
          <h2>Tu pedido</h2>
          <button type="button" className="drawer-close" onClick={cerrarCarrito}>
            ✕
          </button>
        </div>

        <div className="drawer-items">
          {carritoVacio ? (
            <p className="drawer-empty">
              Todavía no agregaste nada.
              <br />
              Elegí algo rico del catálogo 🍰
            </p>
          ) : (
            carrito.map((item) => (
              <div className="drawer-item" key={item.id}>
                <div className="di-img">
                  {item.foto && (
                    <img
                      src={item.foto}
                      alt={item.nombre}
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  )}
                </div>
                <div className="di-info">
                  <h4>{item.nombre}</h4>
                  <span className="di-price">
                    ${(item.precio * item.cantidad).toLocaleString('es-AR')}
                  </span>
                </div>
                <div className="di-qty">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({ type: 'CAMBIAR_CANTIDAD', payload: { id: item.id, delta: -1 } })
                    }
                  >
                    −
                  </button>
                  <span>{item.cantidad}</span>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({ type: 'CAMBIAR_CANTIDAD', payload: { id: item.id, delta: 1 } })
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="di-remove"
                  title="Quitar"
                  onClick={() => dispatch({ type: 'QUITAR', payload: { id: item.id } })}
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        <div className="drawer-foot">
          <div className="drawer-total">
            <span>Total</span>
            <span>${total.toLocaleString('es-AR')}</span>
          </div>
          <a
            className={`whatsapp-btn${carritoVacio ? ' disabled' : ''}`}
            href={carritoVacio ? undefined : armarLinkWhatsapp(carrito, NUMERO_WHATSAPP)}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (carritoVacio) e.preventDefault()
            }}
          >
            💬 Finalizar pedido por WhatsApp
          </a>
        </div>
      </aside>
    </>
  )
}

export default Carrito
