import * as React from 'react';
import { StyleSheet, Image } from 'react-native';


const logopath = require("../../assets/logo.png");


const Logo = () => {
    return (
        <Image style={styles.logomain} source={ logopath } />
    );
};

const styles = StyleSheet.create({
    logomain: {
        marginBottom: 40,
      },
});

export default Logo;