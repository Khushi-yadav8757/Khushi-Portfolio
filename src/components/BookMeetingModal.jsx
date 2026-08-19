import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

const BookMeetingModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xzepyeno",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();

        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 2500);
      } else {
        const data = await response.json();

        if (data?.errors) {
          setError(
            data.errors.map((err) => err.message).join(", ")
          );
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        "Unable to send your request. Please check your internet connection."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{
              scale: 0.95,
              opacity: 0,
              y: 20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
              y: 20,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
          >

            {/* Header */}
            <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center bg-[#121212]/50">

              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Book a Meeting
                </h2>

                <p className="text-xs text-gray-400 mt-1 font-mono">
                  Let's discuss your next project.
                </p>
              </div>

              <button
                onClick={onClose}
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            {/* Body */}
            <div className="p-6 relative">

              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Success */}
              {isSubmitted ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >

                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Request Sent!
                  </h3>

                  <p className="text-gray-400 text-sm max-w-[280px]">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>

                </motion.div>
              ) : (

                /* Form */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 relative z-10"
                >

                  {/* Name */}
                  <div className="space-y-1.5">

                    <label className="text-sm font-medium text-gray-300 ml-1">
                      Name
                    </label>

                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      autoComplete="name"
                      className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 focus:bg-[#222] transition-all"
                    />

                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">

                    <label className="text-sm font-medium text-gray-300 ml-1">
                      Email Address
                    </label>

                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 focus:bg-[#222] transition-all"
                    />

                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">

                    <label className="text-sm font-medium text-gray-300 ml-1">
                      Message / Topic
                    </label>

                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="What would you like to discuss?"
                      className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 focus:bg-[#222] transition-all resize-none"
                    />

                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-white text-black font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100"
                  >

                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Request
                        <Send className="w-4 h-4" />
                      </>
                    )}

                  </button>

                </form>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookMeetingModal;
