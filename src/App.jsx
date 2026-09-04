import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Carrito from './components/Carrito'
import Home from './pages/Home'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import Nosotras from './pages/Nosotras'
import Contacto from './pages/Contacto'

function AppRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/nosotras" element={<Nosotras />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <Carrito />
    </>
  )
}

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
