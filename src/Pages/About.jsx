import { motion } from "framer-motion";
import { FaBrain, FaSeedling, FaUsers, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="
        relative min-h-screen
        w-full md:w-[calc(100%-16rem)]   /* 100% minus sidebar width (64px * 4) */
        md:ml-64                        /* push content right on medium+ screens */
        bg-gradient-to-br from-indigo-900 via-emerald-900 to-amber-800
        text-white
        py-16 px-4 md:px-8 pt-25
        overflow-hidden
      "
    >
      {/* Optional floating shapes behind content */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About <span className="text-amber-400">Mindset Shift</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200 text-lg md:text-xl">
            Mindset Shift is a transformational platform dedicated to helping
            young people gain the right knowledge, clarity, and awareness to
            shape their mindset and ultimately shape their life.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-amber-300">
              Our Mission
            </h2>
            <p className="text-gray-100 leading-relaxed mb-4">
              Our mission is simple yet powerful: to realign minds with truth,
              purpose, and wisdom. Mindset Shift exists to guide young people
              toward clarity and intentional living.
            </p>
            <p className="text-gray-200 leading-relaxed">
              We believe that the right mindset is the foundation for success in
              spirituality, finance, relationships, purpose, and personal
              growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-emerald-300">
              Our Vision
            </h2>
            <p className="text-gray-100 leading-relaxed mb-4">
              We envision a generation of conscious individuals who understand
              life deeply, make informed decisions, and live purpose-driven
              lives.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Mindset Shift aims to become a trusted space for learning,
              reflection, and growth—online and beyond.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-center shadow-xl">
              <FaBrain className="text-4xl mx-auto mb-4 text-indigo-300" />
              <h3 className="text-xl font-semibold mb-2">Mental Awareness</h3>
              <p className="text-gray-200 text-sm">
                Helping you understand how thoughts shape decisions and life
                outcomes.
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-center shadow-xl">
              <FaLightbulb className="text-4xl mx-auto mb-4 text-amber-300" />
              <h3 className="text-xl font-semibold mb-2">Right Knowledge</h3>
              <p className="text-gray-200 text-sm">
                Sharing wisdom rooted in truth, experience, and clarity.
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-center shadow-xl">
              <FaSeedling className="text-4xl mx-auto mb-4 text-emerald-300" />
              <h3 className="text-xl font-semibold mb-2">Personal Growth</h3>
              <p className="text-gray-200 text-sm">
                Encouraging continuous growth in purpose, discipline, and
                mindset.
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-center shadow-xl">
              <FaUsers className="text-4xl mx-auto mb-4 text-indigo-200" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-200 text-sm">
                Building a safe space for learning, sharing, and transformation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shape Your Mind. Shape Your Life.
          </h2>
          <p className="max-w-3xl mx-auto text-gray-200 text-lg">
            Mindset Shift is more than a platform—it’s a movement to help you
            live intentionally, think clearly, and walk confidently in your
            purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
