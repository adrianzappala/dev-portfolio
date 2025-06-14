import profilePic from '../assets/adrianzappalaprofile.jpg';
import { HERO_CONTENT } from "../constants";
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap items-center lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Adrián Zappala"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10 lg:mt-0"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-6xl"
            >
              Adrián Zappala
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-1 max-w-lg py-2 text-lg leading-snug tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
