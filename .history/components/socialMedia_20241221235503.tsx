const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      {/* GitHub Link */}
      <a
        href="https://github.com/19-Dee"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
      >
        <img src="/git.svg" alt="GitHub" className="w-6 h-6" />
      </a>

      {/* Twitter Link */}
      <a
        href="https://twitter.com/yourhandle" // Replace with your Twitter handle
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
      >
        <img src="/twit.svg" alt="Twitter" className="w-6 h-6" />
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/19dishen/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
      >
        <img src="/link.svg" alt="LinkedIn" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialMedia;
