import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet, Alert, Text} from 'react-native';
import {auth} from './firebase';
import LoginScreen from './LoginScreen';

//function for user profile
const UserProfile = ({navigation, route}) => {
    const [userEmail, setUserEmail] = useState('');

    

    useEffect(() => {
        setUserEmail(route.params?.userEmail?? '');
        //fetching the currently signed in user
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
            }

        },(error) => {
            console.log('Authentication error:', error);
        }
        );

        return unsubscribe;
    },[route.params?.userEmail]);

    //function to handle sign out
    const handleSignOut = () => {
        auth.signOut()
        .then(() =>{
            //navigate user to login screen after succesful
            navigation.navigate('LoginScreen');
        })
        .catch(error=>{
            //log an error message to screen
            Alert.alert('An error occured', error);
            //console.log('An error occured', error)//want to see error message for testing
        });
    };
//returning JSX value
    return(
        <View style = {styles.container}>
            <Text style = {styles.emailText}>Signed in as: {userEmail}</Text>
            <Button title = "Sign-out" onPress={handleSignOut}/>
        </View>
    )
};

//styles
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    emailText:{
        fontSize:15,
        fontWeight:'bold',
    },
});
export default UserProfile;