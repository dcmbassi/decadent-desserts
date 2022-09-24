import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import MainNavigation from './components/MainNavigation'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer/Footer'

function App() {

    return (
        <CartProvider>
            <div className="App">
                <MainNavigation />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/about' element={<About />} />
                </Routes>

            </div>
            <Footer />
        </CartProvider>
    )
}

export default App
