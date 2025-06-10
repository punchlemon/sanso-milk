import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccessPage from './pages/AccessPage';
import LodgingPage from './pages/LodgingPage';
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
      <div
        style={{
          fontFamily: '"GEN EI Koburi Mincho", serif',
        }}
        className="flex flex-col min-h-screen text-primary-dark relative"
      >
        <Header />

        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/lodging" element={<LodgingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
