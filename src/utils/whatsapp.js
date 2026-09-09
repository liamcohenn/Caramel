export function armarLinkWhatsappMensaje(mensaje, numeroTelefono) {
  return `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
}

function formatearLineaPedido(item) {
  const totalItem = (item.precio * item.cantidad).toLocaleString('es-AR');

  if (item.detalle) {
    const desglose = item.detalle.map(d => `${d.cantidad} ${d.nombre}`).join(', ');
    return `- ${item.nombre} (${desglose}) — $${totalItem}`;
  }

  return `- ${item.nombre} x${item.cantidad} — $${totalItem}`;
}

export function armarLinkWhatsapp(carrito, numeroTelefono) {
  const lineas = carrito.map(formatearLineaPedido).join('\n');

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  const mensaje = `Hola! Quiero hacer este pedido:\n\n${lineas}\n\nTotal: $${total.toLocaleString('es-AR')}\n\nNombre:\nFecha de entrega deseada:`;

  return armarLinkWhatsappMensaje(mensaje, numeroTelefono);
}
