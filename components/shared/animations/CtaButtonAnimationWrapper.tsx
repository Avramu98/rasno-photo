import React from 'react';
import { motion } from 'framer-motion';

import { AnimationWrapperI } from '../../../types/misc';

const CtaButtonAnimationWrapper = ({ children }: AnimationWrapperI) => {
  return (
        <motion.div
            initial={{ opacity:0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              rotate: { velocity: 5, duration: 2 },
              scale: { duration: 0.2 },
              opacity: { duration: 1 },
              delay: 1,
            }}
            whileInView={{ opacity:1, rotate: [20, -10, 5, 0] }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
  );
};

export default CtaButtonAnimationWrapper;