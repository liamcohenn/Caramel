import { armarLinkWhatsappMensaje } from '../utils/whatsapp'

const NUMERO_WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMERO

const GRUPOS_FAQ = [
  {
    icono: '📅',
    titulo: 'Pedidos y anticipación',
    preguntas: [
      {
        pregunta: '¿Con cuánto tiempo tengo que pedir?',
        respuesta:
          'Con 48hs de anticipación como mínimo. Para tortas personalizadas o pedidos grandes (eventos, cumpleaños), recomendamos coordinar con al menos 5 días de anticipación.',
      },
      {
        pregunta: '¿Puedo hacer una torta personalizada?',
        respuesta:
          'Sí. Agregá cualquier torta al carrito y coordinamos tamaño, sabor y mensaje directo por WhatsApp al finalizar el pedido.',
      },
      {
        pregunta: '¿Puedo cancelar o cambiar la fecha de mi pedido?',
        respuesta:
          'Sí, siempre que nos avises con al menos 24hs de anticipación a la fecha acordada. Escribinos por WhatsApp y lo resolvemos.',
      },
    ],
  },
  {
    icono: '🚚',
    titulo: 'Entrega y retiro',
    preguntas: [
      {
        pregunta: '¿Hacen envíos?',
        respuesta:
          'Sí, entregamos en toda CABA. El costo de envío varía según la zona y te lo confirmamos al coordinar el pedido por WhatsApp.',
      },
      {
        pregunta: '¿Puedo retirar mi pedido?',
        respuesta:
          'Sí, tenés la opción de retiro sin cargo. Te pasamos la dirección y el horario disponible al coordinar.',
      },
    ],
  },
  {
    icono: '💳',
    titulo: 'Pagos',
    preguntas: [
      {
        pregunta: '¿Qué medios de pago aceptan?',
        respuesta:
          'Mercado Pago y transferencia bancaria. Te pasamos los datos una vez confirmado el pedido por WhatsApp.',
      },
      {
        pregunta: '¿Necesito pagar por adelantado?',
        respuesta:
          'Para pedidos grandes o tortas personalizadas pedimos una seña del 50%. Para productos de stock, se paga al confirmar o al recibir.',
      },
    ],
  },
  {
    icono: '🍰',
    titulo: 'Sobre los productos',
    preguntas: [
      {
        pregunta: '¿Cuánto duran los productos?',
        respuesta:
          'Todo se hornea fresco el día del pedido. Las tortas se conservan 3-4 días en heladera; budines y cuadraditos, hasta una semana bien cerrados.',
      },
      {
        pregunta: '¿Tienen opciones sin TACC?',
        respuesta:
          'Por el momento no elaboramos productos sin TACC. Estamos evaluando sumar opciones — seguinos en Instagram para novedades.',
      },
    ],
  },
]

function PreguntasFrecuentes() {
  return (
    <>
      <div className="page-header centrado">
        <div className="wrap">
          <h1>
            Preguntas <em>frecuentes</em>
          </h1>
          <p>
            Todo lo que necesitás saber antes de pedir. Si no encontrás tu duda acá, escribinos
            directo por WhatsApp.
          </p>
        </div>
      </div>

      <section className="faq-section">
        <div className="wrap">
          {GRUPOS_FAQ.map((grupo, indiceGrupo) => (
            <div className="faq-group" key={grupo.titulo}>
              <div className="faq-group-title">
                <div className="icon">{grupo.icono}</div>
                <h2>{grupo.titulo}</h2>
              </div>
              {grupo.preguntas.map((item, indicePregunta) => (
                <details
                  className="faq-item"
                  open={indiceGrupo === 0 && indicePregunta === 0}
                  key={item.pregunta}
                >
                  <summary>{item.pregunta}</summary>
                  <div className="faq-answer">{item.respuesta}</div>
                </details>
              ))}
            </div>
          ))}

          <div className="faq-cta">
            <p>¿Tenés otra duda? Escribinos y te respondemos al toque.</p>
            <a
              href={armarLinkWhatsappMensaje(
                'Hola! Tengo una consulta sobre sus productos.',
                NUMERO_WHATSAPP
              )}
              target="_blank"
              rel="noreferrer"
            >
              💬 Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default PreguntasFrecuentes
