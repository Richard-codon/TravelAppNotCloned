import React, { useState } from 'react';
import {  TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Perform validation checks
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }

    const checkEmailAvailability = (email) => {
      // Simulate email availability check (I just used dummy data, no API calls)
      const registeredEmails = [
        'Richardasante263@gmail.com',
        'Richardasante765@gmail.com',
        'Richardasante000@gmail.com',
      ];
      return !registeredEmails.includes(email);
    };

    // Simulate the registration process (replace with your actual implementation)
    const simulateRegistration = () => {
      return new Promise((resolve, reject) => {
        // Simulate a delay to mimic an API call
        setTimeout(() => {
          const isEmailAvailable = checkEmailAvailability(email);
          if (isEmailAvailable) {
            // Registration successful
            resolve();
          } else {
            // Email already exists
            reject('Email already exists');
          }
        }, 2000);
      });
    };

    // Simulate the registration process
    simulateRegistration()
      .then(() => {
        Alert.alert('Registration Successful', 'You have successfully registered');
        // Navigate to the Home page after registration
        navigation.navigate('HomePage');
      })
      .catch((error) => {
        Alert.alert('Registration Failed', error);
      });
  };

  return (
    <ImageBackground source={require('../../assets/Password.jpg')} style={styles.container}>
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
      <Button title="Register" onPress={handleRegistration} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    opacity: 0.7,
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegistrationScreen;
