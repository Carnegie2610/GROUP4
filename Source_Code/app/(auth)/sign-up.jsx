import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from '../../components/TextInputComponent'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router';

const sign_up = () => {
  const [form, setform] = useState({
    Username:'',
    password:''
  })
  return (
    <SafeAreaView>
      <ScrollView>
      <View className="w-full justify-center min-h-[85vh] px-4 my-6">
        <Text className="text-green-700 font-bold text-4xl">
          Welcome Back!
        </Text>

        <TextInputComponent 
          title="Username"

        />

        <TextInputComponent 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setform({ ...form, name:e})}

        />

        <CustomButton 
        title="Sign-in"
        containerStyle="bg-primary mt-14"
        textStyles="text-white"
        />

        <View className="justify-center align-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-500  ">
          don't have an account??
          </Text>
          <Link href="/sign-up" className='text-lg text-secondary'>Sign-up</Link>

        </View>

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default sign_up