import { motion } from 'framer-motion';
import React from 'react';

import { AnimationWrapperI, SideType } from '../../types/misc';

const SidesAnimationWrapper = ({
  children,
  side,
}: AnimationWrapperI) => {

  return (
        <motion.div
            initial={{ opacity: 0, x: side === SideType.LEFT ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20, stiffness: 400 }}
        >
            {children}
        </motion.div>
  );
};

export default SidesAnimationWrapper;