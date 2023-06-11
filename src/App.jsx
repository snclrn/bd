import { useState } from "react";
import Main from "./components/Main";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2 },
            }}
            exit={{ y: 50, opacity: 0, transition: { duration: 3 } }}
            className="flex flex-col items-center pt-20 bg-white"
          >
            <motion.img
              initial={{ opacity: 0, bottom: -100 }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { duration: 0.5 },
              }}
              src="/dog-1.png"
              className="w-40 pointer-events-none select-none"
            />
            {!start && (
              <motion.h1
                initial={{
                  color: "#84cc16",
                }}
                animate={{
                  color: "#a855f7",
                  transition: { duration: 3 },
                }}
                className="mt-10 text-2xl font-bold font-['Instrument_Sans']"
              >
                LOADING ...
              </motion.h1>
            )}
            {start && (
              <div className="flex justify-center">
                <div className="relative">
                  <motion.button
                    initial={{
                      opacity: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: 1,
                      x: -4,
                      y: 4,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    className="absolute w-max mx-auto py-2 mt-20 px-5 font-['Instrument_Sans'] font-bold text-lg bg-purple-900 text-purple-900"
                  >
                    Start
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                    onClick={() => setLoading(false)}
                    className="relative focus:-translate-x-1 focus:translate-y-1 w-max mx-auto py-2 mt-20 px-5 font-['Instrument_Sans'] font-bold text-lg bg-purple-500 text-white"
                  >
                    Start
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      ) : (
        <Main />
      )}
    </>
  );
}
