import { Link } from 'react-router-dom'

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
            <li><Link to="/nosotras">Nosotras</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href="#">Buenos Aires, Argentina</a></li>
            <li><a href="#">+54 9 11 0000 0000</a></li>
            <li><a href="#">hola@caramel.com.ar</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom">© 2026 Caramel · Pura dulzura. Todos los derechos reservados.</div>
    </footer>
  )
}

export default Footer
