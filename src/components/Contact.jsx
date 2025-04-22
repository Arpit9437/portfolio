const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background-dark dark:to-gray-800 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-primary dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Currently open to new opportunities. Feel free to reach out with any questions or if you'd like to connect!
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:arpitkaple13@email.com"
              className="bg-primary dark:bg-primary-light text-white px-8 py-3 rounded-lg hover:bg-primary-dark dark:hover:bg-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact