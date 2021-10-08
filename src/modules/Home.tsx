import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text } from "react-native";


 
const Home = ( ) =>  {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue' ,
    },
    
});

export default Home;