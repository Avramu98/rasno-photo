import React from 'react';
import { Box, Container } from '@mui/material';

import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import AnimatedSubheader from '@/components/shared/animatedTypography/AnimatedSubheader';
import AnimatedCta from '@/components/shared/button/AnimatedCta';

const Intro = () => {
  return (
            <Container maxWidth='lg'>
                <Box className='container'>
                    <AnimatedHeader moreStyles='px-16 pt-16' text='Hai să-ți spun mai multe despre serviciile pe care le ofer.'/>
                    <AnimatedSubheader text='Sunt un fotograf pasionat si ofer o varietate de servicii pentru a captura cele mai speciale momente. Indiferent daca esti in cautarea unor fotografii de majorat, ședințe foto sau a oricărui alt tip de fotografie, sunt aici pentru a-ți oferi cele mai bune servicii. Verifică portofoliul meu pentru a vedea mai multe despre fiecare categorie si dacă vei crede că ne potrivim,  putem lucra împreună pentru a crea niște amintiri de durată.'/>
                    <AnimatedCta text='Portofoliu' redirectLink='/portfolio'/>
                </Box>
            </Container>
  );
};

export default Intro;