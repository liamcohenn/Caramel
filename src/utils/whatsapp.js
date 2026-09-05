export function armarLinkWhatsappMensaje(mensaje, numeroTelefono) {
  return `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
}

export function armarLinkWhatsapp(carrito, numeroTelefono) {
  const lineas = carrito.map(
    item => `- ${item.nombre} x${item.cantidad} — $${(item.precio * item.cantidad).toLocaleString('es-AR')}`
  ).join('\n');

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  const mensaje = `Hola! Quiero hacer este pedido:\n\n${lineas}\n\nTotal: $${total.toLocaleString('es-AR')}\n\nNombre:\nFecha de entrega deseada:`;

  return armarLinkWhatsappMensaje(mensaje, numeroTelefono);
}
