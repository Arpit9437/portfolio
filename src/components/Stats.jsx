import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TerminalSquare, Github, Code, Codepen, Coffee, Award, ExternalLink } from "lucide-react";

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
      <section id="stats" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center min-h-64">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-8 w-8 bg-primary/20 dark:bg-primary-light/20 rounded-full mb-4"></div>
              <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-xl mb-4"></div>
              <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    );

  if (error)
    return (
      <section id="stats" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="text-red-600 dark:text-red-400 text-center flex items-center">
                <span className="inline-block mr-2">⚠️</span>
                Error loading LeetCode stats: {error}
              </p>
            </div>
          </div>
        </div>
      </section>
    );

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
      icon: <Code size={18} />,
      url: "https://www.geeksforgeeks.org/user/arpitkaple13",
      color: "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600",
    },
    {
      name: "LeetCode",
      icon: <Code size={18} />,
      url: "https://leetcode.com/Arknight9437",
      color: "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600",
    },
    {
      name: "Code360",
      icon: <Code size={18} />,
      url: "https://www.naukri.com/code360/profile/0de48a93-6c3b-4645-9e7b-1894b484205a",
      color: "bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600",
    },
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
            Coding Stats
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mt-4">
            This section summarizes my coding journey, highlighting my growth and passion for continuous learning and problem-solving.
            For complete coding summary, visit my{" "}
            <a 
              href="https://codolio.com/profile/arpitkaple" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent dark:text-accent-light font-medium hover:underline flex items-center inline-flex"
            >
              Codolio profile <ExternalLink size={14} className="ml-1" />
            </a>.
          </p>
        </div>

        {/* LeetCode Stats */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Award size={24} className="text-yellow-500 mr-2" />
            <h3 className="text-2xl font-bold text-secondary dark:text-secondary-light">
              LeetCode Statistics
            </h3>
          </div>

          {/* Circular stats in a responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl w-32 h-32 shadow-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 border border-primary/10 dark:border-primary-light/10">
                <h3 className="text-sm font-semibold text-secondary dark:text-secondary-light">
                  Total Solved
                </h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary dark:from-primary-light dark:to-secondary-light bg-clip-text text-transparent">
                  {totalSolved}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl w-32 h-32 shadow-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 border border-green-300/30 dark:border-green-500/30">
                <h3 className="text-sm font-semibold text-secondary dark:text-secondary-light">
                  Easy
                </h3>
                <p className="text-3xl font-bold text-green-500">{easySolved}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl w-32 h-32 shadow-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 border border-yellow-300/30 dark:border-yellow-500/30">
                <h3 className="text-sm font-semibold text-secondary dark:text-secondary-light">
                  Medium
                </h3>
                <p className="text-3xl font-bold text-yellow-500">
                  {mediumSolved}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl w-32 h-32 shadow-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 border border-red-300/30 dark:border-red-500/30">
                <h3 className="text-sm font-semibold text-secondary dark:text-secondary-light">
                  Hard
                </h3>
                <p className="text-3xl font-bold text-red-500">{hardSolved}</p>
              </div>
            </div>
          </div>

          {/* Monthly Submission Calendar with horizontal scroll */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-12 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-secondary dark:text-secondary-light mb-3 md:mb-0">
                Monthly Submission Calendar
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={scrollRight}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  <span className="mr-1">←</span> Older
                </button>
                <button
                  onClick={scrollLeft}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  Newer <span className="ml-1">→</span>
                </button>
              </div>
            </div>

            {/* Scrollable container */}
            <div
              ref={calendarRef}
              className="overflow-x-auto pb-4 hide-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
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
                          let bgColorClass;
                          
                          if (count > 5) {
                            bgColorClass = "bg-gradient-to-br from-primary to-primary/70 dark:from-primary-light dark:to-primary-light/70";
                          } else if (count > 2) {
                            bgColorClass = "bg-gradient-to-br from-yellow-500 to-yellow-400 dark:from-yellow-500 dark:to-yellow-600";
                          } else if (count > 0) {
                            bgColorClass = "bg-gradient-to-br from-green-500 to-green-400 dark:from-green-500 dark:to-green-600";
                          } else {
                            bgColorClass = "bg-gray-200 dark:bg-gray-700";
                          }
                          
                          return (
                            <div
                              key={`${month}-${day}`}
                              className={`w-6 h-6 rounded-md ${bgColorClass} transform transition-all hover:scale-110 hover:shadow-md`}
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
        </div>

        {/* Coding Profile Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-secondary dark:text-secondary-light mb-6 flex items-center">
            <Code size={20} className="mr-2 text-accent dark:text-accent-light" />
            My Coding Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 ${profile.color} text-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                {profile.icon}
                <span>{profile.name}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;