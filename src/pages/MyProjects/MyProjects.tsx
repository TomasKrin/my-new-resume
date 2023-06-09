import { motion } from "framer-motion";

const MyProjects = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>MyProjects</div>
    </motion.div>
  );
};

export default MyProjects;
