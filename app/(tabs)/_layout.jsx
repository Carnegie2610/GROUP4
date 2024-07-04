import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from '../../constants/icons';


const TabsLayout = () => {
  const Tabicon = ({icon, color, focused, name}) =>
  {       
    return (
      <View className="items-center justify-center gap-0 ">
      
      <Ionicons name={icon} size={24} color={color} />
      <Text className={`text-xs`} style={{ color : color }}>
      {name}
      </Text>
      
      </View>


    )


  }
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor:'#64C178',
      tabBarInactiveTintColor:'#000',
      
    }}
    >
      <Tabs.Screen 
      name='waka'
      options= {{
        title:'', 
        headerShown:false,
        tabBarIcon: ({color,focused}) => (
          <Tabicon
          icon = "car"
          color={color}
          name="explore"
          focused={ focused }
          /> 
        )
      }}
      />
      <Tabs.Screen 
      name='learn'
      options= {{
        title:'learn', 
        headerShown:false,
        tabBarIcon: ({color,focused}) => (
          <Tabicon
          icon = "school"
          color={color}
          name="learn"
          focused={ focused }
          /> 
        )
      }}
      />
      <Tabs.Screen 
      name='notifications'
      options= {{
        title:'notifications', 
        headerShown:false,
        tabBarIcon: ({color,focused}) => (
          <Tabicon
          icon = "notifications-sharp"
          color={color}
          name="notifications"
          focused={ focused }
          /> 
        )
      }}
      />
      <Tabs.Screen 
      name='settings'
      options= {{
        title:'settings', 
        headerShown:false,
        tabBarIcon: ({color,focused}) => (
          <Tabicon
          icon = "settings"
          color={color}
          name="settings"
          focused={ focused }
          /> 
        )
      }}
      />
    </Tabs>
)}

export default TabsLayout

const styles = StyleSheet.create({})