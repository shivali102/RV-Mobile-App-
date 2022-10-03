import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'
import color from '../theme/color'


const ForgetPassword=()=>{
    return (
      <View>
        <StatusBar backgroundColor={color.orange}/>
        <View>
          <Image source={require('../Images/forgottenPassword.png')} />
        </View>
      </View>
    );
};
const styles=StyleSheet.create({

});
export default ForgetPassword;