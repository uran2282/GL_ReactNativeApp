import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


const RegularBtn = ( {navigation}: any ) => {
    return (
    <TouchableOpacity style={styles.Btn} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Btn: {
        width: "70%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        color: '#fff',
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "darkturquoise",
      },
      loginText:{
        color: '#fff',
        fontWeight: 'bold',
      },
});

export default RegularBtn;