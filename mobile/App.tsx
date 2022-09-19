
import { StatusBar, SubscribableMixin } from 'react-native';
import { useRef, useEffect } from 'react';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Background } from './src/components/Background';
import {Routes} from './src/Routes'
import { Loading } from './src/components/Loading';

import './src/services/notificationsConfigs'


export default function App() {



  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black
  })
  return (
    <Background >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent />
        { fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}

