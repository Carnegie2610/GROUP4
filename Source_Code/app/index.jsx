import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link,router } from 'expo-router'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import {logocolor } from '../assets/images/logocolor.png'
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full" >
      <View className="w-full justify-center items-center h-full px-4"> 
        <Image 
          source={logocolor}
          resizeMode='contain'
        />

        <Text className=" font-bold text-white	 " style={{ fontFamily: 'PlaywriteDEGrund-VariableFont_wght', fontSize: 80 }} >safewaka</Text>
        <View className="relative mt-1">
          <Text className="text-x text-black  text-center">
            Navigate Smarter, Drive Safer
          </Text>
        </View>
         <Link href="/waka" className="" >Go to home</Link>
        
          <CustomButton 
          title="Login"
          handlePress={() => router.push('/sign-up')}
          containerStyle="w-full top-40"
          />

        <CustomButton 
          title="Create Account"
          handlePress={() => router.push('/sign-in')}
          containerStyle="w-full top-40 mt-7 text-primary"
        />
        
            
      </View>
      
    </SafeAreaView>
    

  );
}

