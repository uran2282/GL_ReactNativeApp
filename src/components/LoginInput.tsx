import React, { useState } from "react";
import {StyleSheet, View, TextInput, Image} from "react-native";
const Iconpath = require("../../assets/images/icon_mail.png");

const LoginInput = (props: any) => {

    const [email, setEmail] = useState("");

    return (
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            />
            <Image source={Iconpath} style={ styles.InputIcon}/>
        </View>
    );
  };

  const styles = StyleSheet.create({

    inputView: {
      backgroundColor: "#fff",
      borderRadius: 4,
      borderWidth: 1,
      width: "70%",
      height: 50,
      marginBottom: 20,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      paddingLeft: 25,
      marginLeft: 20,
    },
    InputIcon:{
        position: 'absolute',
        top: '20%',
        left: 10,
        width: 25,
        height:25
    }
  });
  

export default LoginInput;