import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      {/* Google Maps API を正しく設定するまでの代替表示 */}
      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="font-bold text-gray-700 mb-2">Google Maps</h3>
          <p className="text-sm text-gray-500">
            長野県伊那市横山風の谷9749
          </p>
        </div>
      </div>
      
      {/* Google Maps の埋め込みコード */}
      <div className="w-full h-full">
        {/* 
          Google Maps API を設定する場合は以下のようなコードになります
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d XXXXXX !2d XXXXX !3d XXXXX !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s XXXXXX !2s XXXXX !5e0!3m2!1sen!2sjp!4v XXXXXXX !5m2!1sen!2sjp" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        */}
      </div>
    </div>
  );
};

export default GoogleMap;