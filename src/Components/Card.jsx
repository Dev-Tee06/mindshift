import { motion } from "framer-motion";

export default function Card({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl"
    >
      <h3 className="text-yellow-400 font-semibold mb-3">{title}</h3>
      {children}
    </motion.div>
  );
}
