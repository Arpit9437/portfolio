import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TerminalSquare, Github, Code, Codepen, Coffee } from "lucide-react";

const Stats = () => {
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await axios.get(
          "https://leetcode-api-faisalshohag.vercel.app/Arknight9437"
        );
        setLeetcodeStats(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  const getMonthWiseSubmissions = () => {
    const monthlyData = {};
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Initialize all days of each month
    Object.entries(leetcodeStats.submissionCalendar).forEach(
      ([timestamp, count]) => {
        const date = new Date(timestamp * 1000);
        const monthKey = `${months[date.getMonth()]} ${date.getFullYear()}`;

        if (!monthlyData[monthKey]) {
          monthlyData[monthKey] = {
            totalSubmissions: 0,
            days: {},
            daysInMonth: new Date(
              date.getFullYear(),
              date.getMonth() + 1,
              0
            ).getDate(),
          };
          // Initialize all days with 0 submissions
          for (let i = 1; i <= monthlyData[monthKey].daysInMonth; i++) {
            monthlyData[monthKey].days[i] = 0;
          }
        }
        monthlyData[monthKey].days[date.getDate()] = count;
        monthlyData[monthKey].totalSubmissions += count;
      }
    );

    // Sort months chronologically (newest first)
    const sortedMonths = Object.entries(monthlyData).sort((a, b) => {
      const aDate = new Date(a[0]);
      const bDate = new Date(b[0]);
      return bDate - aDate;
    });

    return Object.fromEntries(sortedMonths);
  };

  // Scroll handlers for the calendar
  const scrollLeft = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (isLoading)
    return (
      <div className="text-center text-gray-700 dark:text-gray-300">
        Loading stats...
      </div>
    );
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  const {
    totalSolved,
    easySolved,
    mediumSolved,
    hardSolved,
    submissionCalendar,
  } = leetcodeStats;

  // Coding profile links
  const codingProfiles = [
    {
      name: "GeeksForGeeks",
      icon: "",
      url: "https://www.geeksforgeeks.org/user/arpitkaple13 ",
      color:
        "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600",
    },
    {
      name: "LeetCode",
      icon: "",
      url: "https://leetcode.com/Arknight9437",
      color:
        "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600",
    },
    {
      name: "Code360",
      icon: "",
      url: "https://www.naukri.com/code360/profile/0de48a93-6c3b-4645-9e7b-1894b484205a",
      color:
        "bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600",
    },
    // { name: "Buy Me a Coffee", icon: <Coffee size={20} />, url: "https://www.buymeacoffee.com/Arknight9437", color: "bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-500" }
  ];

  return (
    <section
      id="stats"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-background-dark dark:to-gray-900 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <TerminalSquare
            size={32}
            className="text-primary dark:text-primary-light mb-4"
          />
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-secondary to-primary dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
            LeetCode Stats
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-2">
            To get complete coding summary{" "}
            <a 
              href="https://codolio.com/profile/arpitkaple" 
              className="text-accent dark:text-accent-light font-medium hover:underline"
            >
              click here
            </a>.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-4">
          This section summarizes my coding journey, highlighting my growth and passion for continuous learning and problem-solving.
          </p>
          {/* Added link for complete coding summary */}
          
        </div>

        {/* Circular stats in a single line */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="bg-white dark:bg-gray-800 rounded-full w-32 h-32 shadow-lg flex flex-col items-center justify-center">
              <h3 className="text-sm font-semibold text-secondary dark:text-secondary-light">
                Total Solved
              </h3>
              <p className="text-3xl font-bold text-primary dark:text-primary-light">
                {totalSolved}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white dark:bg-gray-800 rounded-full w-32 h-32 shadow-lg flex flex-col items-center justify-center">
              <h3 className="text-sm font-semibold text-secondary dark:text-secondary-light">
                Easy
              </h3>
              <p className="text-3xl font-bold text-green-500">{easySolved}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white dark:bg-gray-800 rounded-full w-32 h-32 shadow-lg flex flex-col items-center justify-center">
              <h3 className="text-sm font-semibold text-secondary dark:text-secondary-light">
                Medium
              </h3>
              <p className="text-3xl font-bold text-yellow-500">
                {mediumSolved}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white dark:bg-gray-800 rounded-full w-32 h-32 shadow-lg flex flex-col items-center justify-center">
              <h3 className="text-sm font-semibold text-secondary dark:text-secondary-light">
                Hard
              </h3>
              <p className="text-3xl font-bold text-red-500">{hardSolved}</p>
            </div>
          </div>
        </div>

        {/* Monthly Submission Calendar with horizontal scroll */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-secondary dark:text-secondary-light">
              Monthly Submission Calendar
            </h3>
            <div className="flex gap-2">
              <button
                onClick={scrollRight}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                ← Older
              </button>
              <button
                onClick={scrollLeft}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                Newer →
              </button>
            </div>
          </div>

          {/* Scrollable container */}
          <div
            ref={calendarRef}
            className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
          >
            <div className="flex gap-6" style={{ minWidth: "min-content" }}>
              {Object.entries(getMonthWiseSubmissions()).map(
                ([month, data]) => (
                  <div key={month} className="flex flex-col min-w-64">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {month}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {[...Array(data.daysInMonth)].map((_, index) => {
                        const day = index + 1;
                        const count = data.days[day] || 0;
                        return (
                          <div
                            key={`${month}-${day}`}
                            className={`w-6 h-6 rounded-full ${
                              count > 5
                                ? "bg-primary dark:bg-primary-light"
                                : count > 2
                                ? "bg-yellow-500"
                                : count > 0
                                ? "bg-green-500"
                                : "bg-gray-300 dark:bg-gray-700"
                            }`}
                            title={`${month} ${day}: ${count} submissions`}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Coding Profile Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-secondary dark:text-secondary-light mb-6">
            My Coding Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 ${profile.color} text-white rounded-lg shadow-md transition-transform hover:scale-105`}
              >
                {profile.icon}
                <span>{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;