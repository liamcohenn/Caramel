import { ShoppingCart } from 'lucide-react'
import { useCarrito } from '../context/CarritoContext'

function CarritoIcono() {
  const { carrito, abrirCarrito } = useCarrito()
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <button type="button" className="cart" onClick={abrirCarrito}>
      <ShoppingCart size={20} />
      <span>{totalItems}</span>
    </button>
  )
}

export default CarritoIcono
