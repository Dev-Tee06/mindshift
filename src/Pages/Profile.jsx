import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaBrain,
  FaSeedling,
  FaHeart,
  FaWallet,
  FaCheckCircle,
  FaCompass,
  FaQuoteLeft,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Profile() {
  const progress = [
    { title: "Spiritual Growth", value: 75, icon: FaBrain },
    { title: "Purpose & Direction", value: 60, icon: FaSeedling },
    { title: "Relationships", value: 50, icon: FaHeart },
    { title: "Financial Mindset", value: 40, icon: FaWallet },
  ];

  return (
    <section
      className="
        relative
        min-h-screen 
        w-full md:w-[calc(100%-16rem)] md:ml-64
        bg-gradient-to-br from-indigo-900 via-emerald-900 to-amber-800
        text-white
        px-4 md:px-8 pt-25 
        overflow-hidden
      "
    >
      {/* Optional floating shapes */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-6 mb-24"
        >
          <FaUserCircle className="text-8xl text-white/90" />
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Welcome back, <span className="text-amber-400">Testimony</span>
            </h1>
            <p className="text-gray-200 mt-2 text-lg max-w-xl">
              Your journey toward clarity, purpose, and a transformed mindset
              continues here.
            </p>
          </div>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-28">
          {[
            { label: "Member Since", value: "March 2025" },
            { label: "Courses Enrolled", value: "8" },
            { label: "Lessons Completed", value: "42" },
            { label: "Mindset Level", value: "Growing 🌱" },
          ].map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl text-center"
            >
              <p className="text-gray-300 text-sm">{item.label}</p>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Growth Progress */}
        <motion.div className="mb-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Personal Growth Tracker
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {progress.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="text-3xl text-emerald-300" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>

                  <div className="w-full bg-white/20 rounded-full h-4">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>

                  <p className="mt-2 text-sm text-gray-200">
                    {item.value}% completed
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Mindset Focus Section */}
        <motion.div className="mb-28 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaCompass,
              title: "Current Focus",
              text: "Discovering purpose and aligning daily actions with meaning.",
            },
            {
              icon: FaCalendarAlt,
              title: "Weekly Intention",
              text: "Practice conscious living and intentional communication.",
            },
            {
              icon: FaBrain,
              title: "Mindset Challenge",
              text: "Replace limiting beliefs with disciplined thinking.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl"
              >
                <Icon className="text-4xl text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.text}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Reflection / Quote */}
        <motion.div className="mb-28 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl text-center max-w-4xl mx-auto">
          <FaQuoteLeft className="text-4xl text-emerald-400 mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            “When your mindset shifts, your decisions change. When your
            decisions change, your life transforms.”
          </p>
          <p className="mt-4 text-gray-300">— Mindset Shift</p>
        </motion.div>

        {/* Recent Achievements */}
        <motion.div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Recent Achievements
          </h2>

          <ul className="space-y-4 max-w-3xl mx-auto">
            {[
              "Understanding True Purpose",
              "Healthy Boundaries in Relationships",
              "Conscious Media Consumption",
              "Financial Discipline Foundations",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 bg-white/10 p-4 rounded-xl"
              >
                <FaCheckCircle className="text-emerald-400 text-xl" />
                <span className="text-gray-100">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
