import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import { workflowSteps } from '@/lib/contants/aboutPageConstants';
import WaterfallListAnimationWrapper from '@/components/shared/animations/WaterfallListAnimationWrapper';
import AnimatedCta from '@/components/shared/button/AnimatedCta';
import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';

const AboutWorkflow = () => {
  return (
      <Container maxWidth='sm'>
      <Box className='container gap-8'>
           <AnimatedHeader text='Workflow'/>
                {workflowSteps.map((step: string) => {
                  const stepName = step.split(':')[0];
                  const stepDefinition = step.split(':')[1];
                  return (
                        <WaterfallListAnimationWrapper key={step}>
                            <div className='text-left'>
                                <Typography
                                    className='font-poppins text-contrast text-xl font-bold italic '>🔶 {stepName}</Typography>
                                <Typography className='font-poppins text-contrast text-lg '>{stepDefinition}</Typography>
                            </div>
                        </WaterfallListAnimationWrapper>
                  );
                })}
                <AnimatedCta text='Contact' redirectLink='/contact'/>
        </Box>
      </Container>

  );
};

export default AboutWorkflow;