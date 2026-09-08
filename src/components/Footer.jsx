import { Link } from 'react-router-dom'

// lucide-react no incluye íconos de marcas (Instagram, Facebook, etc.) por temas de
// trademark, así que este SVG está escrito a mano con el mismo estilo de trazo.
function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div>
          <div className="logo">
            <span>Caramel</span>
          </div>
          <p style={{ marginTop: 14, maxWidth: '32ch' }}>
            Pastelería artesanal que endulza tus momentos especiales con creaciones únicas y deliciosas.
          </p>
        </div>
        <div>
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/pedidos-especiales">Pedidos Especiales</Link></li>
            <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href="#">Buenos Aires, Argentina</a></li>
            <li><a href="#">+54 9 11 5248 2293</a></li>
            <li>
              <a
                className="footer-social-link"
                href="https://instagram.com/caramel.puradulzura"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={16} />
                @caramel.puradulzura
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">© 2026 Caramel · Pura dulzura. Todos los derechos reservados.</div>
    </footer>
  )
}

export default Footer
