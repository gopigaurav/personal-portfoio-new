import { motion } from "framer-motion";
import React from "react";

const Transitions = () => {
  return (
    <>
      <div>
        <div className="ring w-36 h-36 text-lg text-black md:h-24 md:w-24 md:text-sm sm:h-20 sm:w-20 sm:text-xs">
          WELCOME
          <span></span>
        </div>
      </div>
      <motion.div
        className="fixed top-0 right-0 bottom-full w-screen h-screen z-50 bg-primary"
        initial={{ y: "0%", height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 right-0 bottom-full w-screen h-screen z-40 bg-light"
        initial={{ y: "0%", height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 right-0 bottom-full w-screen h-screen z-10 bg-slate-700"
        initial={{ y: "0%", height: "100%" }}
        animate={{ height: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transitions;
