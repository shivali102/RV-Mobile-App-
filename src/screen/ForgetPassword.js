import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,Text,Image} from 'react-native'


const ForgetPassword=()=>{
    return (
      <View>
        <StatusBar backgroundColor="#FF7700" />
        <View>
          <Image source={require('/src/Images/forgottenPassword.png')} />
        </View>
      </View>
    );
};
const styles=StyleSheet.create({

});
export default ForgetPassword;