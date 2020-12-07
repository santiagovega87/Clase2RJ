import Hero from './components/Home/Hero'
import Footer from './components/Global/Footer'
import './styles/App.css'
import zapatilla from './assets/img/zapatilla.jpg'

function App () {
    return (
        <>
        <Hero/>
        <img src={zapatilla} alt="Zapatilla de prueba"/>
        <Footer/>
        </>
    )
}

export default App;