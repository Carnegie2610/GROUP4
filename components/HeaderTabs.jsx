import { View, Text } from 'react-native'
import React from 'react'

const HeaderTabs = ({title,otherStyles,textStyles}) => {
  return (
    <View className={`h-2/5 w-full bg-secondary justify-center items-center mb-2 ${otherStyles}`} >
        <Text className={`${textStyles} text-3xl text-gray-700 font-bold`}>
          {title}
        </Text>
      </View>
  )
}

export default HeaderTabs