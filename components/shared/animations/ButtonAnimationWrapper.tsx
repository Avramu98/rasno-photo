import { motion } from 'framer-motion';
import React from 'react';

import { AnimationWrapperI } from '../../../types/misc';

const ButtonAnimationWrapper = ({
  children,
}: AnimationWrapperI) => {

  return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {children}
        </motion.div>
  );
};

export default ButtonAnimationWrapper;