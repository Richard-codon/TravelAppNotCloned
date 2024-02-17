//import necessary dependencies
import React, { useState, useEffect } from 'react';
import { TextInput, Button, Alert, Text, StyleSheet, ImageBackground } from 'react-native';
import { auth } from './firebase';
import { FIREBASE_API_KEY } from '@env';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform validation checks
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    // Validate the login credentials
    auth
    .signInWithEmailAndPassword(email, password)
    .then (() =>
    {
      //login successful
      Alert.alert('Login Successful', 'You have successfully logged in');
      // Navigate to the Home screen after successful login
      navigation.navigate('Home');

    }
    )
    .catch(error =>{
      Alert.alert('Login Failed', 'Invalid email or password');
    });
      
  };

  
  const handleCreateAccount = () => {
    // Navigate to the RegistrationScreen
    navigation.navigate('RegistrationScreen');
  };

  useEffect(() => {
    // Log the Firebase API key for testing
    console.log('Firebase API Key:', FIREBASE_API_KEY);
  }, []);


  //JSX, returning values of the defined functions
  return (
    <ImageBackground source={require('../../assets/PASS.jpg')} style={styles.container}>
      <Text style={styles.title}>SafeTravel</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="white" style={styles.button}  />
      <Button title="Create an Account" onPress={handleCreateAccount} color="white" style={styles.button} />
    </ImageBackground>
  );
};

//styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 58,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    fontStyle:'italic'
  },
  input: {
    backgroundColor: '#fff',
    opacity: 0.7,
    width: '100%',
    height: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  button:{
    fontWeight:'bold',
    fontSize:100
  },
  
});

export default LoginScreen;
