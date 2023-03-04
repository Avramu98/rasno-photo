import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

const HalfRotateAnimationWrapper = ({ children }: { children: ReactElement }) => {
  return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: [1, 0.6, 0.6, 1, 1], borderRadius: ['20%', '50%', '50%', '20%', '20%'], rotate: [0, 0, 60, 60, 0] }}
            transition={{ duration: 1.3, delay: 0.1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
  );
};

export default HalfRotateAnimationWrapper;