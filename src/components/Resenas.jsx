/*
const RESENAS = [
  {
    id: 1,
    texto: 'Pedí la torta de chocolate para un cumpleaños y voló en diez minutos. Súper húmeda, nada empalagosa.',
    nombre: 'Mariana G.',
    inicial: 'M',
  },
  {
    id: 2,
    texto: 'El budín de limón es mi pedido de todos los meses. Llega siempre fresco y bien envuelto.',
    nombre: 'Lucía R.',
    inicial: 'L',
  },
  {
    id: 3,
    texto: 'La caja de cuadraditos como regalo fue un golazo. Ya la pedí tres veces para llevar a lo de amigas.',
    nombre: 'Sofía P.',
    inicial: 'S',
  },
]

function Resenas() {
  return (
    <section className="reviews">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow-line"></div>
          <h2>Lo que dicen quienes ya pidieron</h2>
          <p>Nada convence más que la palabra de alguien que ya lo probó.</p>
        </div>
        <div className="rev-grid">
          {RESENAS.map((resena) => (
            <div className="rev-card" key={resena.id}>
              <div className="stars">★★★★★</div>
              <p>&quot;{resena.texto}&quot;</p>
              <div className="rev-who">
                <div className="rev-avatar">{resena.inicial}</div>
                <span>{resena.nombre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resenas
*/