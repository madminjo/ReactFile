import './App.css'
import Header from './components/header/Header'
import SectionPizza from './components/secrtionPizza/SectionPizza'
import Menu from './components/menu/Menu'

function App() {

  return (
    <div className="boody">
      <div className='container'>
        <Header />
        <SectionPizza />
        <Menu />
      </div>
    </div>
  )
}

export default App
