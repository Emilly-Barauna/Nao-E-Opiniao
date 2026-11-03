import Header from './components/Header'
import HeroInicio from './components/HeroInicio'
import Temas from './components/Temas'
import DadosDestaque from './components/DadosDestaque'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main id="inicio">
        <HeroInicio />
        <Temas />
        <DadosDestaque />
      </main>

      <Footer />
    </>
  )
}

export default App