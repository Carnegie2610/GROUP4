import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import React,{useState} from 'react'


const buttonNames = [{names: "create account"}, {names: "login"}]
const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.safewakaContainer}>
            <Text style= {styles.createaccount}>safewaka</Text>
            <Text style= {styles.pickupline}>Drive Smarter </Text>
            <Pressable
            onPress={() => {navigation.navigate('CreateAccount')}}
            key = {buttonNames.names}

            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'green' : 'white',
                borderRadius: 50,
                fontFamily: 'Courier New',
                color: '#29cb05',
                fontSize: 30,
                padding:10,
               
                borderColor: '#29cb05',
                borderWidth: 10,
                borderStyle:'solid',
                textDecoration: 'none',
                bottom: -200,
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <>
              <Text style={styles.createAccount}>Create account </Text>
              
              </>
              
            )}
           
          </Pressable>

          <Pressable
            // onPress={() => {}}
            key = {buttonNames.names}
            onPress={() => {navigation.navigate('LoginPage')}}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'green' : 'white',
                borderRadius: 50,
                fontFamily: 'Courier New',
                
                padding:10,
                opacity: pressed ? 0.5 : 1,
                borderColor: 'red',
                borderWidth: 2,
                borderStyle:'solid',
                textDecoration: 'none',
                bottom: -200,
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <>
              <Text style={styles.createAccount}>Login </Text>
              
              </>
              
            )}
           
          </Pressable>
            
            
            
        </View>
    );
  };

  const styles = StyleSheet.create({
    safewakaContainer: {
    flex: 1, 
    backgroundColor: '#2ACB05',
    alignItems: 'center',
    fontSize: 20,
    justifyContent: 'center',
    position: 'bottom',
  },
  createaccount: {
    fontSize: 90,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  pickupline: {
    color: 'gray',
  },
  createAccount: {
   
   
    color: '#29cb05',
    fontSize: 20,
    
    
  }


});

  export default LandingPage;

