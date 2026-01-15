import { motion } from "framer-motion";

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">
          MindShift Login
        </h2>
        <input
          className="w-full mb-4 p-3 rounded-lg bg-slate-900"
          placeholder="Email"
        />
        <input
          className="w-full mb-4 p-3 rounded-lg bg-slate-900"
          placeholder="Password"
          type="password"
        />
        <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-yellow-400 rounded-lg font-bold text-slate-900">
          Login
        </button>
      </motion.div>
    </div>
  );
}
