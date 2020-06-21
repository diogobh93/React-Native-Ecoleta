import React from 'react';
import {StatusBar, View} from 'react-native';
import { AppLoading } from "expo";

import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import {Roboto_400Regular,Roboto_500Medium} from "@expo-google-fonts/roboto";

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    <Routes/>
    </>
  );
}

