import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FacilitiesPage from './pages/FacilitiesPage';
import WeddingPage from './pages/WeddingPage';
import AccessPage from './pages/AccessPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/wedding" element={<WeddingPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
