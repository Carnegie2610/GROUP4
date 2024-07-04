import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => 
  {
    const [fontsLoaded, error] = useFonts({
      'PlaywriteDEGrund-VariableFont_wght': require('../assets/fonts/PlaywriteDEGrund-VariableFont_wght.ttf')
    })
   
    useEffect(()=>{
      if(error) throw error 
      if (fontsLoaded) SplashScreen.hideAsync()

    },[fontsLoaded,error])

      if(!fontsLoaded && !error) return null 
    return (
      <>
          <Stack>
            <Stack.Screen name='index' options={{headerShown : false }}/>
            <Stack.Screen name='(auth)' options={{headerShown : false }}/>
            <Stack.Screen name='(tabs)' options={{headerShown : false }}/>
            
          </Stack> 
          
      </>
      
    )
  }

export default RootLayout