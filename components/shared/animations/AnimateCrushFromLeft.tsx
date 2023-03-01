import { motion } from 'framer-motion';
import React from 'react';

import { AnimationWrapperI } from '../../../types/misc';

const AnimateCrushFromLeft = ({ children }: AnimationWrapperI) => {
  return (
        <motion.div
            className='md:w-[50%]'
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 10, stiffness: 50, delay: 0.5 }}
        >
            {children}
        </motion.div>
  );
};

export default AnimateCrushFromLeft;