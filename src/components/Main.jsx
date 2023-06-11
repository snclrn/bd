import { motion } from "framer-motion";
import { useState } from "react";
import Letter from "./Letter";

const Main = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="app relative">
      <motion.img
        initial={{ opacity: 0, bottom: -100 }}
        animate={{
          opacity: 1,
          bottom: 0,
          transition: { delay: 1.75, duration: 0.5 },
        }}
        src="/dog-1.png"
        className="w-40 bottom-0 left-1/2 -translate-x-1/2 fixed pointer-events-none select-none"
      />
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 1.75, duration: 0.5 },
        }}
        src="/dog-2.jpg"
        className="w-16 bottom-0 left-10 fixed pointer-events-none select-none"
      />
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 1.75, duration: 0.5 },
        }}
        src="/dog-2.jpg"
        className="w-16 bottom-0 right-10 fixed pointer-events-none select-none"
      />
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 20,
          rotate: -60,
          transition: { delay: 1.25, duration: 0.5 },
        }}
        src="/dog-3.png"
        className="w-40 -rotate-90 top-1/2 -translate-y-1/2 -right-10 fixed pointer-events-none select-none"
      />
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: -20,
          rotate: 45,
          transition: { delay: 1, duration: 0.5 },
        }}
        src="/dog-3.png"
        className="w-40 rotate-90 top-1/2 -translate-y-1/2 -left-10 fixed pointer-events-none select-none"
      />
      <div className="z-50 relative">
        <img src="/cover.svg" className="w-full" />
        <motion.img
          src="/cute-pic.svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="h-[70%] right-[20%] -bottom-4 absolute"
        />
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.75, duration: 0.5 },
          }}
          src="/party-hat.svg"
          className="h-[50%] left-[50%] top-[10%] absolute"
        />
        <motion.img
          initial={{ opacity: 0, scale: 4 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 20,
            transition: { delay: 1.2, duration: 0.5 },
          }}
          src="/heart.svg"
          className="h-[15%] right-[24%] bottom-0 absolute"
        />
      </div>
      {start ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1 },
            }}
            className="z-30 sticky top-0 bg-white/60 backdrop-blur-md text-slate-600 text-center font-['Instrument_Sans'] pt-6 pb-2 mb-4"
          >
            From yours truly, <b className="text-purple-500">Aeron</b>
          </motion.div>
          <p className="text-sm font-['Instrument_Sans'] text-slate-500 w-max mx-auto mb-4">
            Scroll to continue
          </p>
          <Letter />
        </>
      ) : (
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
                transition: { delay: 2, duration: 0.5 },
              }}
              className="absolute w-max mx-auto py-2 mt-20 px-5 font-['Instrument_Sans'] font-bold text-lg bg-purple-900 text-purple-900"
            >
              Read
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.75, duration: 0.5 },
              }}
              onClick={() => setStart(true)}
              className="relative focus:-translate-x-1 focus:translate-y-1 w-max mx-auto py-2 mt-20 px-5 font-['Instrument_Sans'] font-bold text-lg bg-purple-500 text-white"
            >
              Read
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
