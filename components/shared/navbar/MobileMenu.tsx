import React, { Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';

import { sidebar } from '@/components/shared/navbar/animations';
import DropDownMobile from '@/components/shared/navbar/mobile/DropDownMobile';
import { MenuToggle } from '@/components/shared/navbar/mobile/MenuToggle';

import { MobileMenuI } from '../../../types/misc';

const MobileMenu = ({ isOpen, toggleOpen }: MobileMenuI) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

  }, [isOpen]);

  return (
        <Fragment>
            <motion.div
                style={{ background: 'var(--color-bg-primary' }}
                className='absolute z-40 w-screen h-screen border-contrast'
                variants={sidebar}
            />
            {isOpen && <DropDownMobile/>}
            <MenuToggle toggle={() => toggleOpen()}/>
        </Fragment>
  );
};

export default MobileMenu;