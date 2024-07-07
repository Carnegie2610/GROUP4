import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyle,textStyles,isLoading }) => {
  return (
    <TouchableOpacity className={`bg-white rounded-full min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : '' }`} 
        onPress={handlePress}
        activeOpacity={0.7 }
        disabled={isLoading}
    >
      <Text className={` font-bold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

