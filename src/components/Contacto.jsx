import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contacto
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          Puedes contactarme a través de correo electrónico o visitar mis perfiles profesionales:
        </motion.p>

        <p className="my-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b border-stone-500 text-stone-300 hover:text-white"
          >
            {CONTACT.email}
          </a>
        </p>

        <p className="my-4">
          <a
            href={CONTACT.linkedin}
            className="border-b border-stone-500 text-stone-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <p className="my-4">
          <a
            href={CONTACT.github}
            className="border-b border-stone-500 text-stone-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacto;
