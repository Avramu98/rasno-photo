import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import { workflowSteps } from '@/lib/contants/aboutPageConstants';
import WaterfallListAnimationWrapper from '@/components/animations/WaterfallListAnimationWrapper';

const AboutWorkflow = () => {
  return (
        <Box>
            <Typography className='header pb-10'>
                Workflow
            </Typography>
            <Container maxWidth='sm' className='flex flex-col gap-4'>
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
            </Container>
        </Box>
  );
};

export default AboutWorkflow;