import { motion } from "framer-motion";
import React from "react";

const Transitions = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 right-0 bottom-full w-screen h-screen z-50 bg-primary"
        initial={{ y: "0%", height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="ring w-36 h-36 md:h-24 md:w-24 sm:h-20 sm:w-20"
          initial={{ opacity: "1" }}
          animate={{ opacity: "0" }}
          transition={{ duration: 2, delay: 1.6 }}
        >
          <span></span>
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed top-0 right-0 bottom-full w-screen h-screen z-40 bg-light"
        initial={{ y: "0%", height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 right-0 bottom-full w-screen h-screen z-10 bg-slate-700"
        initial={{ y: "0%", height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transitions;
