import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import { workflowSteps } from '@/lib/contants/aboutPageConstants';
import WaterfallListAnimationWrapper from '@/components/animations/WaterfallListAnimationWrapper';

const AboutWorkflow = () => {
  return (
        <Box>
            <Typography className='text-2xl md:text-4xl text-contrast text-center font-prompt font-bold p-10'>
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