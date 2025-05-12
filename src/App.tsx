import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FacilitiesPage from './pages/FacilitiesPage';
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

function App() {
  // ページ遷移時にスクロールをトップに戻す
  useEffect(() => {
    const handleNavigation = () => {
      window.scrollTo(0, 0);
    };

    // ページ描画後に一度スクロールをトップに戻す
    handleNavigation();
  }, []);

  return (
    <Router>
      <div style={{ 
        fontFamily: '"GEN EI Koburi Mincho", serif' 
      }} className="flex flex-col min-h-screen text-primary-dark bg-natural-light bg-paper-texture relative">
        <div className="absolute top-0 left-0 w-full h-64 pointer-events-none z-0 overflow-hidden">
          <div className="absolute h-64 w-64 -top-20 -left-20 bg-primary opacity-[0.03] rounded-full"></div>
          <div className="absolute h-64 w-64 top-10 right-20 bg-accent opacity-[0.03] rounded-full"></div>
        </div>

        <Header />

        <main className="flex-grow relative z-10">
          <Routes>
            {/* 基本情報カテゴリ */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/monthly-schedule" element={<MonthlySchedulePage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 施設・サービスカテゴリ */}
            <Route path="/facilities" element={<FacilitiesPage />} />
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

      {/* カーソル装飾（自然派要素） - オプション */}
      <div
        className="fixed pointer-events-none w-5 h-5 rounded-full bg-primary opacity-20 hidden lg:block z-50"
        style={{
          left: 'var(--x, 0)',
          top: 'var(--y, 0)',
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s, transform 0.3s',
          mixBlendMode: 'difference',
        }}
      ></div>
    </Router>
  );
}

export default App;
