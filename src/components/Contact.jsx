const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:example@email.com"
              className="bg-gray-900 dark:bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;