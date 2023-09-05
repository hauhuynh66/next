"use client"

import { ColorScheme, ColorSchemeProvider, Container, Flex, MantineProvider, Stack, createStyles } from '@mantine/core';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { AppSideBar } from './components/Sidebar';
import { CustomFonts } from './fonts';

import { useViewportSize } from '@mantine/hooks';
import './global.css';
import { MyHeader } from './components/Header';

const useStyles = createStyles((theme)=>({
  main: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    overflow: 'hidden'
  },
  cc: {
    backgroundColor: theme.colorScheme=== 'dark' ? theme.colors.dark[2] : theme.colors.gray[5]
  }
}))

export default function App({
  children
}: {
  children: React.ReactNode
}) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const { width ,height } = useViewportSize();
  const {classes} = useStyles();

  const toggleColorScheme = () => {
    colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(colorScheme);
  };
  
  return (
    <html lang="en">
      <body>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme: 'dark',
            fontFamily: 'Pacifico sans-serif',
            spacing: { xs: '1rem', sm: '1.2rem', md: '1.8rem', lg: '2.2rem', xl: '2.8rem' },
          }}>
            <CustomFonts/>
            <Flex direction='row'>
              <AppSideBar/>
              <Stack w='100%' h={height} spacing="sm" className={classes.cc}>
                <MyHeader links={[]}/>
                <Container className={classes.main} m={0} maw="100%" p={0}>
                  {children}
                </Container>
                <Footer/>
              </Stack>
            </Flex>
          </MantineProvider>
        </ColorSchemeProvider>
      </body>
    </html>
  )
}