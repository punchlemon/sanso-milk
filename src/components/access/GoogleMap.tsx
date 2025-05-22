import React, { useState, useEffect, useRef } from 'react';

const GoogleMap: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);
  
  // iframeによる地図表示
  useEffect(() => {
    if (mapRef.current) {
      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.border = '0';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2930651102426!2d138.00364341176816!3d35.72667177260186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601c56971e089569%3A0xbf6b373dfcea8ac5!2z44CSMzk2LTAwMjkg6ZW36YeO55yM5LyK6YKj5biC5qiq5bGx6aKo44Gu6LC377yZ77yX77yU77yZ!5e0!3m2!1sja!2sjp!4v1716348120902!5m2!1sja!2sjp';
      
      iframe.onload = () => {
        setIsLoading(false);
      };
      
      // コンテナの中身をクリア
      while (mapRef.current.firstChild) {
        mapRef.current.removeChild(mapRef.current.firstChild);
      }
      
      mapRef.current.appendChild(iframe);
    }
  }, []);

  return (
    <div className="w-full h-full relative">
      {/* 読み込み中の表示 */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent mx-auto animate-spin"></div>
            </div>
            <h3 className="font-bold text-gray-700 mb-2">地図を読み込み中...</h3>
            <p className="text-sm text-gray-500">
              長野県伊那市横山風の谷9749
            </p>
          </div>
        </div>
      )}
      
      {/* Google マップを表示する要素 */}
      <div 
        ref={mapRef} 
        className="w-full h-full"
        aria-label="山荘ミルクの地図"
      />
    </div>
  );
};

export default GoogleMap;