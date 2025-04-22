import { Trophy } from "lucide-react"
import { achievements } from "../data/portfolioData"

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-background-light to-white dark:from-gray-900 dark:to-background-dark transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Trophy size={32} className="text-primary dark:text-primary-light mb-4" />
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary to-primary dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-2">
          Highlights of my participation in various hackathons, showcasing collaboration, problem-solving, and innovation.
          </p>
        </div>

        {/* Desktop View - Clean Card Layout */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={achievement.image || "/placeholder.svg"}
                  alt={`${achievement.title} achievement`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-primary dark:text-primary-light font-semibold mb-1">
                  {achievement.month} {achievement.year}
                </div>
                <h3 className="text-lg font-bold text-secondary dark:text-secondary-light mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description || ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Clean Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="w-full h-32 overflow-hidden">
                <img
                  src={achievement.image || "/placeholder.svg"}
                  alt={`${achievement.title} achievement`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-primary dark:text-primary-light font-semibold mb-1">
                  {achievement.month} {achievement.year}
                </div>
                <h3 className="text-lg font-bold text-secondary dark:text-secondary-light mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description || ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements