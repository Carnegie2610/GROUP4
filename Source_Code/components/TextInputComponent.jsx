import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState }  from 'react'
import { useLinkProps } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'



const TextInputComponent = ({title,value,placeholder,handleChangeText,otherStyles,iconname, ...useLinkProps}) => {

  const [showPassword, setshowPassword] = useState(false )

  return (
    <View className={`space-y-2 $otherStyles`}>
      <Text className="">{title}</Text>
      <View className="border-2 border-x-blue-950 w-full h-12 px-4 bg-white-400 rounded-2xl focus:border-secondary items-center flex-row ">
      <TextInput
        className="flex-1 w-full h-10 bg-transparent"
        value= {value}
        placeholder={placeholder}
        placeholderTextColor="#000"
        onChangeText={handleChangeText}
        secureTextEntry= {title === 'Password' && !showPassword}
        
      />

       {title === 'Password' && (
        <TouchableOpacity onPress={() => 
          setshowPassword(!showPassword)}> 
          <Ionicons name={!showPassword ? "eye-off" : "eye" } size={24} color="black" res  />
          </TouchableOpacity>
       )}

       {title === 'confirmpassword' && (
        <TouchableOpacity onPress={() => 
          setshowPassword(!showPassword)}> 
          <Ionicons name={!showPassword ? "eye-off" : "eye" } size={24} color="black" res  />
          </TouchableOpacity>
       )}
      </View>
    </View>
  )
}

export default TextInputComponent