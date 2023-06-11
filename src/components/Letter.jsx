import { motion } from "framer-motion";

const Letter = () => {
  const boxVariant = {
    hidden: {
      opacity: 0, //move out of the site
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1, //apply stagger on the parent tag
      },
    },
  };

  const meow = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 75 },
  };

  const bg = [
    "bg-orange-500",
    "bg-amber-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500",
  ];

  function applyBg() {
    var copy = bg.slice(0);
    return function () {
      if (copy.length < 1) {
        copy = bg.slice(0);
      }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

  return (
    <motion.ol
      variants={boxVariant}
      animate="visible"
      initial="hidden"
      className="pb-20 relative min-h-screen h-auto flex flex-col px-4 space-y-4 justify-center items-center"
    >
      {data.map((message, i) => {
        {
        }
        return (
          <motion.li
            variants={meow}
            className={`${applyBg()()} text-center text-white backdrop-blur-md py-1 px-3 font-medium font-['Instrument_Sans'] list-none`}
          >
            <h1>{message}</h1>
          </motion.li>
        );
      })}
    </motion.ol>
  );
};

export default Letter;

const data = [
  "It already has been a year",

  "Ever since we've started",

  "Getting close to each other.",

  "It also has been a year",

  "Since those days that you went offline, xD.",

  "Well, this also marks the first time",

  "We celebrate your birthday as partners",

  "Time flies so fast, doesn't it?",

  "I hope you enjoy this day of yours.",

  "Sige, hindi muna kita aawayin :O",

  "Happy Birthday, Love!",

  "Your existence have brought joy to me",

  "Ever since you came to my life,",

  "My life had even more meaning",

  "You gave me a reason to strive further",

  "And made me a new man that I am today.",

  "I swear to love you each and every day.",

  "I hope to finally see you one day",

  "And celebrate your birthday together, in person.",

  "I always want to remind you",

  "That I am always here with you",

  "I love your attitude",

  "I love your face",

  "Especially your eyes",

  "I hope I get to wipe them when they cry. Just kidding xD (or not? hehehe)",

  "I love how you easily get mad to everything I say, and do :P",

  "I love how you communicate with me when things are not good for us",

  "I love how you update me on everything",

  "To be honest, I love everything about you",

  "I know I always say these things",

  "But it's because I really mean it",

  "Love",

  "If you are going through some problems",

  "I will be always here, by your side",

  "You can share it with me",

  "It's okay to open up",

  "I will not judge",

  "Nor invalidate your feelings",

  "Though I am not good with responses",

  "I'm pretty sure a pair of ears to listen, and an empathetic person is enough for those problems",

  "But I would like you to know that",

  "I'm really proud of you, even if you aren't with yourself",

  "I know, I am not the ideal man you've dreamt of",

  "That's why I'm trying my best, to atleast, be the man you can be proud of",

  "I'd like to share more experiences with you, love",

  "I hope this would go on forever",

  "I appreciate you so much for reading this",

  "May we celebrate your birthdays together from now on.",

  "I love you so, so much",

  "Again, Happy Birthday, My Love.",
];
