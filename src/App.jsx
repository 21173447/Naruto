
import './App.css'
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
  <Narutoheader />

 <Space/>
 < SasukeHeader />
 
 <Space/>
 <NarutoQuotes/>
 
 <Space/>
 <Characters/>
   <NarutoScroll/>
 <Footer/>

    </>
  )
}

export default App
