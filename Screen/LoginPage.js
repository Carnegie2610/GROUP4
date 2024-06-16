import { View, Text } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'

const LoginPage = () => {
  const {params} = useRoute();
  let item = params 
  return (
      <View>
          <Text>Login Page</Text>
      </View>
  );
};

export default LoginPage;