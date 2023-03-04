import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';


const DropAnimationHeaderWrapper = ({ children }: { children: ReactElement }) => {
  return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', velocity: 5, damping: 30, delay: 0.2 }}
        >
            {children}
        </motion.div>
  );
};

export default DropAnimationHeaderWrapper;