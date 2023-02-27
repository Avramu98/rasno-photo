import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

import { sidebar } from '@/components/navbar/animations';
import DropDownMobile from '@/components/navbar/mobile/DropDownMobile';
import { MenuToggle } from '@/components/navbar/mobile/MenuToggle';

import { MobileMenuI } from '../../types/misc';

const MobileMenu = ({ isOpen, toggleOpen }: MobileMenuI) => {
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