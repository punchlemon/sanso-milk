const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10073.919490098202!2d137.88898989128387!3d35.84329449101198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601cef9a171402b5%3A0xceb8a3a72850ac20!2z44Of44Or44Kv!5e0!3m2!1sen!2sus!4v1747904449360!5m2!1sen!2sus"
        className="w-full h-full border-0 shadow-sm"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="山荘ミルクの地図"
      />
    </div>
  );
};

export default GoogleMap;