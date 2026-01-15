import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPrayingHands,
  FaMoneyBillWave,
  FaHeart,
  FaBullseye,
  FaRing,
  FaMobileAlt,
  FaMedal,
  FaOm,
  FaEye,
  FaUserFriends,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

const coursesData = [
  { title: "Spirituality", progress: 0.8, icon: FaPrayingHands },
  { title: "Finance", progress: 0.4, icon: FaMoneyBillWave },
  { title: "Relationship", progress: 0.6, icon: FaHeart },
  { title: "Right Use of Media", progress: 0.3, icon: FaMobileAlt },
  { title: "Purpose", progress: 0.9, icon: FaBullseye },
  { title: "Marriage", progress: 0.5, icon: FaRing },
  { title: "What Success Truly Means", progress: 0.7, icon: FaMedal },
  { title: "Meditation", progress: 0.2, icon: FaPrayingHands },
  { title: "How to be Conscious", progress: 0.1, icon: FaEye },
  { title: "Modesty", progress: 0.4, icon: FaShieldAlt },
  { title: "Power of Friendship", progress: 0.6, icon: FaUserFriends },
  { title: "Honour", progress: 0.3, icon: FaStar },
];

const iconColors = [
  "text-yellow-400",
  "text-emerald-400",
  "text-pink-400",
  "text-indigo-400",
  "text-purple-400",
  "text-teal-400",
];

export default function Courses() {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    /* FULL HEIGHT – NO WHITE GAP */
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-slate-900 to-black overflow-x-hidden">
      <div className="flex min-h-screen w-full">
        {/* Sidebar spacer (prevents overlap) */}
        <div className="hidden md:block md:w-64 shrink-0" />

        {/* Content */}
        <main className="flex-1 min-h-screen">
          <div className="px-4 sm:px-6 lg:px-10 py-10 max-w-7xl mx-auto min-h-screen">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-emerald-400 to-indigo-400"
            >
              Explore MindShift Courses
            </motion.h1>

            {/* Search */}
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full sm:w-1/2 mb-10 px-4 py-3 rounded-xl
                bg-white/20 backdrop-blur-xl
                text-white placeholder-white/70
                border border-white/30
                focus:outline-none focus:ring-2 focus:ring-emerald-400
              "
            />

            {/* Courses Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCourses.map((course, idx) => {
                const Icon = course.icon;
                const iconColor = iconColors[idx % iconColors.length];

                return (
                  <motion.div
                    key={course.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="
                      rounded-2xl p-6
                      bg-white/20 backdrop-blur-2xl
                      border border-white/30
                      shadow-lg
                      hover:bg-white/30
                      transition-all
                      flex flex-col
                    "
                  >
                    {/* Icon (NO glow) */}
                    <div
                      className={`
                        w-12 h-12 mb-4 rounded-xl
                        flex items-center justify-center
                        bg-white/30
                        ${iconColor}
                      `}
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                      {course.title}
                    </h3>

                    <p className="text-sm text-white/80 mb-4">
                      Practical teachings for clarity, purpose, and disciplined
                      living.
                    </p>

                    {/* Progress */}
                    <div className="w-full bg-white/30 h-2 rounded-full mb-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress * 100}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-emerald-400 rounded-full"
                      />
                    </div>

                    <button className="mt-auto py-2 rounded-xl bg-white/25 hover:bg-white/40 text-sm font-semibold text-white transition">
                      Learn More
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredCourses.length === 0 && (
              <p className="text-white/70 text-center mt-20">
                No courses found.
              </p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
