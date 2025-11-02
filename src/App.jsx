import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Guarantees from './pages/Guarantees';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalog />} />
                <Route path="/catalogo/:categoryId" element={<Catalog />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/sobre-nosotros" element={<About />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/garantias" element={<Guarantees />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

