import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

const WaterfallListAnimationWrapper = ({ children }: { children: ReactElement | any }) => {
  return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            {children}
        </motion.div>
  );
};

export default WaterfallListAnimationWrapper;