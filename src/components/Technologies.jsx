import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

// 🟡 Corrección: función flecha bien definida
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologías
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div className="p-4" variants={iconVariants(2.5)} initial="initial" animate="animate">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(3)} initial="initial" animate="animate">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(5)} initial="initial" animate="animate">
          <FaJs className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(4)} initial="initial" animate="animate">
          <FaPython className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(3)} initial="initial" animate="animate">
          <FaHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(5)} initial="initial" animate="animate">
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(4)} initial="initial" animate="animate">
          <FaDatabase className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(6)} initial="initial" animate="animate">
          <SiTypescript className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(3)} initial="initial" animate="animate">
          <FaJava className="text-7xl text-red-600" />
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(5)} initial="initial" animate="animate">
          <div className="text-7xl text-gray-400 font-bold">C</div>
        </motion.div>
        <motion.div className="p-4" variants={iconVariants(2)} initial="initial" animate="animate">
          <FaGitAlt className="text-7xl text-orange-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
