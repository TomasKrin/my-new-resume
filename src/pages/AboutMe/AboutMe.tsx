import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>AboutMe</div>
    </motion.div>
  );
};

export default AboutMe;
