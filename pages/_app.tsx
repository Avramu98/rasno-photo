import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { Permanent_Marker, Poppins, Prompt } from '@next/font/google';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';
import { SessionProvider } from 'next-auth/react';

import createEmotionCache from 'createEmotionCache';
import { useAppContext } from '@/lib/hooks/useAppContext';
// eslint-disable-next-line import/order
import { AppContext } from '@/lib/context/appContext';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

const CustomizedSnackbars = dynamic(import('@/components/shared/snackbar/Snackbar'));

const clientSideEmotionCache = createEmotionCache();

const marker = Permanent_Marker({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const prompt = Prompt({
  weight: ['400', '800'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const poppins = Poppins({
  weight: ['300'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, session } = props;
  const { contextValues } = useAppContext();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);

  return (
        <>
            <SessionProvider session={session}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                </Head>
                <style jsx global>
                    {`
                      :root {
                        --marker-font: ${marker.style.fontFamily};
                        --poppins-font: ${poppins.style.fontFamily};
                        --prompt-font: ${prompt.style.fontFamily};
                      }
                    `}
                </style>
                <ThemeProvider enableSystem={false} defaultTheme='dark' attribute='class'>
                    <AppContext.Provider
                        value={{ ...contextValues }}>
                        <CssBaseline/>
                        <Component {...pageProps} />
                        <Analytics/>
                        <CustomizedSnackbars/>
                    </AppContext.Provider>
                </ThemeProvider>
            </CacheProvider>
            </SessionProvider>
        </>
  );
}

export default MyApp;