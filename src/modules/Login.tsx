import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import {ImageBackground, StyleSheet, Text, Image, View, TextInput, Button, TouchableOpacity, } from "react-native";
import Logo from '../components/Logo';

import LoginInput from '../components/LoginInput';
import PasswordInput from '../components/PasswordInput';
const imagebg = require("../../assets/images/bg.jpg");

 
const Login = ({ navigation}: any ) =>  {
  
  return (
    <View style={styles.container}>
       <ImageBackground source={imagebg} resizeMode="cover" style={styles.backimg}>
      <StatusBar style="auto" />
      <Logo/>
      <View style={styles.wrap}>
        <LoginInput/>
        <PasswordInput/>
        <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Home')}  >
        <Text style={styles.loginText}  >LOGIN</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: 'lightskyblue' ,
    },
    forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  wrap: {
    paddingTop: 35,
    paddingBottom:25,
    backgroundColor: '#FFF' ,
    width: '90%',
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  backimg: {
    width: '100%', height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
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

export default Login;