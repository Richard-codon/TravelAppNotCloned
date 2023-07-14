//import necessary dependencies for the development
import React from 'react';
import { TextInput, StyleSheet} from "react-native";

//function for the search bar(with parameters, placeHolder and onChangeText)
const SearchBar = ({placeholder, onChangeText}) => {
    //passing argument to the parameter (placeHolder and onChangeText)
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    );
};

//styles for the passed props
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
});
//exporting to the explore screen 
export default SearchBar;
