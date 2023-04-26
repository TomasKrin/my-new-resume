import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>Contacts</div>
    </motion.div>
  );
};

export default Contacts;
