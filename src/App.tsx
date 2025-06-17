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
import ImagePreloader from './components/ImagePreloader';
import { useEffect, useState } from 'react';
import {
  getAllImages,
  getCriticalImages,
  getLogoForBackground,
} from './constants/images';

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
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const allImages = getAllImages();
  const criticalImages = getCriticalImages();

  // 開発時にクエリパラメータでローディングスキップ
  const isDev = import.meta.env.DEV;
  const urlParams = new URLSearchParams(window.location.search);
  const skipLoading = isDev && urlParams.get('skipLoading') === 'true';

  const handleLoadComplete = () => {
    console.log('🎯 App: handleLoadComplete called');
    setImagesLoaded(true);
    // セッションストレージに画像読み込み完了を記録
    sessionStorage.setItem('imagesLoaded', 'true');
  };

  // 開発時にローディングをスキップする場合のみ
  useEffect(() => {
    if (skipLoading && !imagesLoaded) {
      console.log('⏭️ Skipping image loading for development');
      handleLoadComplete();
    }
  }, [skipLoading, imagesLoaded]);

  return (
    <ImagePreloader
      images={skipLoading ? [] : allImages} // スキップ時は空配列
      priorityImages={criticalImages}
      timeout={60000} // Slow 4G環境では60秒に延長
      onLoadComplete={handleLoadComplete}
      showLoadingScreen={!imagesLoaded}
      loadingScreenProps={{
        className: 'bg-white',
        logoSrc: getLogoForBackground('light', 'logo'), // 明るい背景用の黒いロゴ
        logoAlt: '山荘ミルク',
      }}
    >
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
    </ImagePreloader>
  );
}

export default App;
