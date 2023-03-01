import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

const FadeInAnimationWrapper = ({ children }: { children: ReactElement }) => {
  return (
        <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            {children}
        </motion.div>
  );
};

export default FadeInAnimationWrapper;