const PASOS = [
  {
    numero: 1,
    titulo: 'Elegí tu producto',
    texto: 'Recorré el catálogo y armá tu pedido: tortas, budines, boxes dulces o tartas.',
  },
  {
    numero: 2,
    titulo: 'Coordinamos por WhatsApp',
    texto: 'Confirmamos disponibilidad, fecha de entrega y cualquier detalle de tu pedido.',
  },
  {
    numero: 3,
    titulo: 'Retirás o te lo llevamos',
    texto: 'Elegís retiro o entrega en tu zona de CABA. Pagás por Mercado Pago o transferencia.',
  },
]

function ComoPedis() {
  return (
    <section className="pasos">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-line"></div>
          <h2>¿Cómo pedís?</h2>
          <p>Tres pasos, sin vueltas.</p>
        </div>
        <div className="pasos-grid">
          {PASOS.map((paso) => (
            <div className="paso" key={paso.numero}>
              <div className="paso-num">{paso.numero}</div>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComoPedis
