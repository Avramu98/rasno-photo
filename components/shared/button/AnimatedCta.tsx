import React from 'react';
import Link from 'next/link';

import CtaButtonAnimationWrapper from '@/components/shared/animations/CtaButtonAnimationWrapper';
import { CustomButton } from '@/components/shared/button/CustomButton';

const AnimatedCta = ({ text, redirectLink }: { text:string, redirectLink:string }) => {
  return (
        <CtaButtonAnimationWrapper>
            <CustomButton variant='outlined' className='custom-button'>
                <Link target='_blank'
                      href={redirectLink}>
                    {text}
                </Link>
            </CustomButton>
        </CtaButtonAnimationWrapper>
  );
};

export default AnimatedCta;