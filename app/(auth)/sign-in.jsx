import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputcomp from '../../components/TextInputComponent'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwriteConfig';


const sign_in = () => {
  const [form, setform] = useState({
    Name:'',
    email:'',
    telephone:'',
    matricule:'',
    password:'',
    confirmpassword:''

  })

  const [isSubmitting, setIsSubmitting] = useState()
  
  const submit = async () => {
    if(!form.Name || !form.email || form.telephone || !form.matricule)
      Alert.alert('Error', 'please fill all the fields')
        setIsSubmitting(true)

        //set to global state 

        router.replace('/waka')
        try {
          const result = await createUser(form.Name, form.email, form.telephone,form.matricule,form.password,form.confirmpassword)
        } catch (error) {
          Alert.alert('Error', error.message)
        }finally{
          setIsSubmitting(false)
        }
  }
  return (
    <SafeAreaView>
      <ScrollView> 
        <View className="w-full justify-center  min-h-[85vh] px-4 my-6">
        <Text className="text-green-700 font-bold text-4xl">
          Welcome back 
        </Text>
        <Text className="text-2xl">
          Enter your credidentials 
        </Text>
        <TextInputcomp
        title = "Name"
        value = {form.name}
        handleChangeText= {(e) => setform({ ...form, name: e})}
        otherStyles = "mt-7"
              
        />
        <TextInputcomp
        title = "Email"
        value = {form.email}
        handleChangeText= {(e) => setform({ ...form, email: e})}
        otherStyles = "mt-7"
        keyboardType = "email-address"
      
        />
        <TextInputcomp
        title = "Telephone"
        value = {form.telephone}
        handleChangeText= {(e) => setform({ ...form, telephone: e})}
        otherStyles = "mt-7"
      
        />
        <TextInputcomp
        title = "Matricule"
        value = {form.matricule}
        handleChangeText= {(e) => setform({ ...form, matricule: e})}
        otherStyles = "mt-7"
        
      
        />
        <TextInputcomp
        title = "Password"
        value = {form.password}
        handleChangeText= {(e) => setform({ ...form, password: e})}
        otherStyles = "mt-7"
        
      
        />
        <TextInputcomp
        title = "Confirm Password"
        value = {form.confirmpassword}
        handleChangeText= {(e) => setform({ ...form, confirmpassword: e})}
        otherStyles = "mt-7"
        />

        <CustomButton 
          title="Sign In"
          handlePress={submit}
          containerStyle="mt-7 bg-primary "
          textStyles="text-white"
          isLoading={isSubmitting}
        />
        
        <View className="justify-center content-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-500  ">
          already have an account??
          </Text>
          <Link href="/sign-up" className='text-lg text-secondary'>Sign-up</Link>

        </View>

        </View>
      </ScrollView>
      <Text></Text>
    </SafeAreaView>
  )
}

export default sign_in