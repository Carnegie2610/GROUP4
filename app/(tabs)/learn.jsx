import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTabs from '../../components/HeaderTabs'

const Learn = () => {
  return (
   <SafeAreaView  className="">
      <HeaderTabs 
      title = "safewaka : road signs "
      />
      
      <ScrollView className="">
        
        <View className="h-9/12 w-full bg-red-300">
          <Text>
            safewaka:road signs and safety
          </Text>
        </View>
      </ScrollView>
   </SafeAreaView>
  )
}

export default Learn

const styles = StyleSheet.create({})