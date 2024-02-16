import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {auth} from './firebase';

// function for the user profile screen
const UserProfile = ({navigation}) => {
    //function for sign out
    const handleSignOut = () => {
        auth.signOut()
        .then(()=>{
            //navigate to the login screen after successful sign out
            navigation.navigate('LoginScreen');
        })
        //catching any error
        .catch(error => {
            //console log error
            console.log('An error occured', error);
        })
    };

    //the returning JSX values
    return(
        <View style={styles.container}>
            <Button  title='Sign-out'style ={styles.buttonText} onPress={handleSignOut}/>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:22,
        fontColor:'black'

    },

    

});

export default UserProfile;