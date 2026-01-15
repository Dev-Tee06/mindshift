import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

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
      {/* Floating shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite] -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Get in Touch
          </h1>
          <p className="text-gray-200 mt-2 text-lg max-w-2xl mx-auto">
            Have questions, feedback, or ideas? We'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: FaEnvelope, title: "Email", value: "hello@mindshift.com" },
            { icon: FaPhone, title: "Phone", value: "+234 800 123 4567" },
            {
              icon: FaMapMarkerAlt,
              title: "Location",
              value: "Lagos, Nigeria",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition transform"
              >
                <Icon className="text-4xl text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.value}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              Send us a message
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-4 rounded-2xl transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
