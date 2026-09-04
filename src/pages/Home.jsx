import Hero from '../components/Hero'
import InfoStrip from '../components/InfoStrip'
import Categorias from '../components/Categorias'
import ProductosDestacados from '../components/ProductosDestacados'
import ComoPedis from '../components/ComoPedis'
/*import Resenas from '../components/Resenas'*/

function Home() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <Categorias />
      <ProductosDestacados />
      <ComoPedis />
    </>
  )
}

export default Home
