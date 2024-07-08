import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from '../../components/TextInputComponent'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router';
import { signIn } from '../../lib/appwriteConfig';

const sign_up = () => {
  const [form, setform] = useState({
    Name:'',
    password:''
  })

  const [isSubmitting, setIsSubmitting] = useState()


  const submit = async () => {
    if(!form.Name || !form.email || form.telephone || !form.matricule)
      Alert.alert('Error', 'please fill all the fields')
        setIsSubmitting(true)
      
        //set to global state 

        router.replace('/waka')
        try {
          await signIn(form.email,form.password)
        } catch (error) {
          Alert.alert('Error', error.message)
        }finally{
          setIsSubmitting(false)
        }
  }
  return (
    <SafeAreaView>
      <ScrollView>
      <View className="w-full justify-center min-h-[85vh] px-4 my-6">
        <Text className="text-green-700 font-bold text-4xl">
          Welcome Back!
        </Text>

        <TextInputComponent 
          title="Username"
          value={form.Name}
          handleChangeText={(e) => setform({ ...form, Name:e})}
        />

        <TextInputComponent 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setform({ ...form, password:e})}

        />

        <CustomButton 
        title="Sign-in"
        handlePress={submit}
        containerStyle="bg-primary mt-14"
        textStyles="text-white"
        isLoading={isSubmitting}
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