const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-gray-600 dark:text-gray-400 font-medium text-lg">
          © {new Date().getFullYear()} Arpit Kaple. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
