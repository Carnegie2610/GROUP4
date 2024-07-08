import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import HeaderTabs from '../../components/HeaderTabs';

const waka = () => {
  return (
    
    
    <SafeAreaView>
    
   
    <View>
      <Text>waka</Text>
      <MapView  className="w-full h-full"/>


    </View>


    </SafeAreaView>
  )
}

export default waka

const styles = StyleSheet.create({})