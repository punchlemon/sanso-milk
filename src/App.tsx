import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeddingPage from './pages/WeddingPage';
import AccessPage from './pages/AccessPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LodgingPage from './pages/LodgingPage';
import DogRunPage from './pages/DogRunPage';
import FoodClubPage from './pages/FoodClubPage';
import MonthlySchedulePage from './pages/MonthlySchedulePage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';

// フォントに関する直接スタイルを追加
import './custom-fonts.css';

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ 
        fontFamily: '"GEN EI Koburi Mincho", serif' 
      }} className="flex flex-col min-h-screen text-primary-dark relative">
        <Header />

        <main className="flex-grow relative z-10">
          <Routes>
            {/* 基本情報カテゴリ */}
            <Route path="/" element={<HomePage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/monthly-schedule" element={<MonthlySchedulePage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 施設・サービスカテゴリ */}
            <Route path="/lodging" element={<LodgingPage />} />
            <Route path="/dogrun" element={<DogRunPage />} />
            <Route path="/wedding" element={<WeddingPage />} />
            <Route path="/food-club" element={<FoodClubPage />} />

            {/* ショッピングカテゴリ */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
