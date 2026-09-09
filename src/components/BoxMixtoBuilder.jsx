import { useState } from 'react'
import productos from '../data/productos.json'
import { useCarrito } from '../context/CarritoContext'

function BoxMixtoBuilder({ producto }) {
  const { dispatch } = useCarrito()
  const { precio, saboresPorCaja, unidadesPorSabor } = producto

  const sabores = productos.filter(
    (p) => p.categoriaId === 3 && p.unidades === 16 && !p.excluirDeCajaMixta
  )

  const [seleccionados, setSeleccionados] = useState([])
  const completo = seleccionados.length === saboresPorCaja

  function toggleSabor(sabor) {
    setSeleccionados((actual) => {
      const yaElegido = actual.some((s) => s.id === sabor.id)
      if (yaElegido) return actual.filter((s) => s.id !== sabor.id)
      if (actual.length >= saboresPorCaja) return actual
      return [...actual, sabor]
    })
  }

  function handleAgregar() {
    if (!completo) return
    dispatch({
      type: 'AGREGAR_PERSONALIZADO',
      payload: {
        id: `caja-mixta-${Date.now()}`,
        nombre: 'Caja Mixta',
        precio,
        cantidad: 1,
        detalle: seleccionados.map((sabor) => ({
          nombre: sabor.nombreCorto ?? sabor.nombre,
          cantidad: unidadesPorSabor,
        })),
      },
    })
    setSeleccionados([])
  }

  return (
    <div className="box-mixto-builder">
      <div className="box-mixto-contador">
        {seleccionados.length} de {saboresPorCaja} sabores elegidos
      </div>
      <div className="box-mixto-grid">
        {sabores.map((sabor) => {
          const elegido = seleccionados.some((s) => s.id === sabor.id)
          const foto = sabor.fotos && sabor.fotos[0]
          return (
            <button
              type="button"
              key={sabor.id}
              className={`box-mixto-chip${elegido ? ' elegido' : ''}`}
              onClick={() => toggleSabor(sabor)}
              disabled={!elegido && completo}
            >
              <div className="box-mixto-chip-img">
                {foto && (
                  <img
                    src={foto}
                    alt={sabor.nombre}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                )}
              </div>
              <span>{sabor.nombreCorto ?? sabor.nombre}</span>
            </button>
          )
        })}
      </div>
      <button type="button" className="add-btn-lg" onClick={handleAgregar} disabled={!completo}>
        🛍 Agregar al Carrito
      </button>
    </div>
  )
}

export default BoxMixtoBuilder
