
import './App.css'
import Navbar from './Components/Navbar'
import NarutoScroll from './Components/NarutoScroll'
import Characters from './sections/Characters'
import Narutoheader from './sections/Narutoheader'
import NarutoQuotes from './sections/Quotes'
import SasukeHeader from './sections/SasukeHeader'
import Space from './Components/Space'
import Footer from './sections/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div id="hero">
        <Narutoheader />
      </div>

      <Space/>
      <div id="sasuke">
        <SasukeHeader />
      </div>
      
      <Space/>
      <div id="quotes">
        <NarutoQuotes/>
      </div>
      
      <Space/>
      <div id="characters">
        <Characters/>
      </div>
      <div id="scroll">
        <NarutoScroll/>
      </div>
      <Footer/>
    </>
  )
}

export default App
