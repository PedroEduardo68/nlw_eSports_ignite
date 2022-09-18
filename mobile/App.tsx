
import { StatusBar, SubscribableMixin } from 'react-native';
import { useRef, useEffect } from 'react';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Background } from './src/components/Background';
import {Routes} from './src/Routes'
import { Loading } from './src/components/Loading';
import {Subscription} from 'expo-modules-core'
import * as Notifications from 'expo-notifications'
import './src/services/notificationsConfigs'
import {getPushNotificationToken} from './src/services/getPushNotificationToken'


export default function App() {

  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()


  useEffect(()=>{
    getPushNotificationToken();
  })


  useEffect(()=>{
    getNotificationListener.current = Notifications.addNotificationResponseReceivedListener(notification =>{
      console.log(notification)
    })

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(resposne =>{
      console.log(resposne)
    })


    return () =>{
      if (getNotificationListener.current && responseNotificationListener.current){
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  })




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

