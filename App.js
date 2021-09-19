import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import useFonts from './src/hooks/useFonts';

import colors from './src/res/colors';

import Navigation from './Navigation';

import FilmState from './src/context/Film/FilmState';

const App = () => {

  const [isReady, setIsReady] = useState(false);

  const loadedFonts = async() => {
    await useFonts();
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadedFonts}
        onFinish={() => setIsReady(true)}
        onError={() => {
          return null;
        }}
      />
     );
  }

  return (
    <FilmState>
      <Navigation/>
      <StatusBar backgroundColor={colors.red} />
    </FilmState>
  );
}

export default App;
