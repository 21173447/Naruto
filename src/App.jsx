
import './App.css'
import NarutoScroll from './Components/NarutoScroll'
import Characters from './sections/Characters'
import Narutoheader from './sections/Narutoheader'
import NarutoQuotes from './sections/Quotes'
import SasukeHeader from './sections/SasukeHeader'

function App() {

  return (
    <>
  <Narutoheader />
  <NarutoScroll/>
 < SasukeHeader />
 <NarutoQuotes/>
 <Characters/>

    </>
  )
}

export default App
