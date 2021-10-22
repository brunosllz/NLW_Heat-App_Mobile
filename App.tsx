import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './src/hooks/auth';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { Home } from './src/screens/Home';
import theme from './src/global/styles/theme';

export default function App() {
  const [ fontLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontLoaded) {
    return <AppLoading/>
  }

  return (
      <ThemeProvider theme={theme}>
        <AuthProvider>
            <>
              <StatusBar 
                style='light' 
                translucent
                backgroundColor="transparent"
              />
              <Home />
            </>
        </AuthProvider>
      </ThemeProvider>
  );
}