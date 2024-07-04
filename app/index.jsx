import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'; 
import RootLayout from './_layout';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white" >
      <Text className=" " style={{ fontFamily: 'PlaywriteDEGrund-VariableFont_wght', fontSize: 30 }} >safewaka</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="to-primary" >Go to profile</Link>
    </View>
    

  );
}

