import { createContext, useContext, useReducer, useState } from 'react'

const CarritoContext = createContext(null)

function carritoReducer(carrito, action) {
  switch (action.type) {
    case 'AGREGAR': {
      const { cantidad = 1, ...producto } = action.payload
      const existente = carrito.find((item) => item.id === producto.id)
      if (existente) {
        return carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        )
      }
      return [...carrito, { ...producto, cantidad }]
    }
    case 'QUITAR':
      return carrito.filter((item) => item.id !== action.payload.id)
    case 'CAMBIAR_CANTIDAD': {
      const { id, delta } = action.payload
      return carrito
        .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + delta } : item))
        .filter((item) => item.cantidad > 0)
    }
    default:
      return carrito
  }
}

export function CarritoProvider({ children }) {
  const [carrito, dispatch] = useReducer(carritoReducer, [])
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  const abrirCarrito = () => setCarritoAbierto(true)
  const cerrarCarrito = () => setCarritoAbierto(false)

  return (
    <CarritoContext.Provider
      value={{ carrito, dispatch, carritoAbierto, abrirCarrito, cerrarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  )
}

export function useCarrito() {
  return useContext(CarritoContext)
}

export default CarritoContext
