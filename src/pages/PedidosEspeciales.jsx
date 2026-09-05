import { armarLinkWhatsappMensaje } from '../utils/whatsapp'

const NUMERO_WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMERO

const TIPOS_EVENTO = [
  {
    icono: '🎂',
    titulo: 'Cumpleaños',
    texto: 'Tortas temáticas, mesas dulces completas o combos de cajas para compartir con los invitados.',
  },
  {
    icono: '💍',
    titulo: 'Casamientos y 15',
    texto: 'Candy bar, mesa de postres o torta principal, coordinado con tiempo para que salga como lo imaginás.',
  },
  {
    icono: '🏢',
    titulo: 'Eventos corporativos',
    texto: 'Cajas individuales o mesas dulces para reuniones, lanzamientos y fin de año de empresa.',
  },
]

const GALERIA_EJEMPLOS = ['🎂', '🧁', '🍰', '🍬']

const PASOS_EVENTO = [
  { titulo: 'Nos contás tu idea', texto: 'Fecha, cantidad de invitados y qué tenías en mente.' },
  { titulo: 'Te armamos una propuesta', texto: 'Sabores, diseño y presupuesto a medida.' },
  { titulo: 'Confirmás con una seña', texto: 'Reservamos tu fecha en nuestra agenda de producción.' },
  { titulo: 'Entrega el día del evento', texto: 'Retiro o envío coordinado, listo para tu celebración.' },
]

function PedidosEspeciales() {
  const linkIdea = armarLinkWhatsappMensaje(
    'Hola! Quiero contarte la idea para mi evento.',
    NUMERO_WHATSAPP
  )
  const linkEmpezar = armarLinkWhatsappMensaje(
    'Hola! Quiero armar un pedido especial para un evento.',
    NUMERO_WHATSAPP
  )

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <h1>
              Para ese día
              <em>que es único</em>
            </h1>
            <p>
              Cumpleaños, casamientos, mesas dulces, eventos de empresa. Armamos tu pedido a
              medida: tamaño, sabores y diseño pensados para tu ocasión.
            </p>
            <a className="cta" href={linkIdea} target="_blank" rel="noreferrer">
              💬 Contanos tu idea por WhatsApp
            </a>
          </div>
          <div className="hero-photo">
            <svg viewBox="0 0 24 24" fill="none" stroke="#B54784" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span>Foto de una mesa dulce acá</span>
          </div>
        </div>
      </section>

      <section className="tipos">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-line"></div>
            <h2>¿Para qué ocasión?</h2>
            <p>Algunos de los eventos para los que más nos piden.</p>
          </div>
          <div className="tipos-grid">
            {TIPOS_EVENTO.map((tipo) => (
              <div className="tipo-card" key={tipo.titulo}>
                <div className="icon">{tipo.icono}</div>
                <h3>{tipo.titulo}</h3>
                <p>{tipo.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="galeria">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-line"></div>
            <h2>Algunos trabajos anteriores</h2>
            <p>Una idea de lo que ya armamos para otros eventos.</p>
          </div>
          <div className="galeria-grid">
            {GALERIA_EJEMPLOS.map((emoji, index) => (
              <div className="galeria-item" key={index}>
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pasos pasos-eventos">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow-line"></div>
            <h2>Cómo coordinamos tu pedido</h2>
          </div>
          <div className="pasos-grid">
            {PASOS_EVENTO.map((paso, index) => (
              <div className="paso" key={paso.titulo}>
                <div className="paso-num">{index + 1}</div>
                <h3>{paso.titulo}</h3>
                <p>{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-final">
        <h2>Cada evento merece algo hecho a medida</h2>
        <p>Contanos qué estás celebrando y armamos juntas la propuesta — sin compromiso.</p>
        <a href={linkEmpezar} target="_blank" rel="noreferrer">
          💬 Empezar por WhatsApp
        </a>
        <div className="nota">
          Recomendamos coordinar con al menos 2 semanas de anticipación para eventos grandes.
        </div>
      </section>
    </>
  )
}

export default PedidosEspeciales
