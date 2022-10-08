import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Signup from './src/screen/Signup'
import ForgetPassword from './src/screen/ForgetPassword'; 
import Checkemail from './src/screen/CheckeMail';
import Login from './src/screen/Login';


const App=()=> {
  return (
    <View>
 {/* <Checkemail/> */}
  {/*<ForgetPassword/>*/}
 
 <Signup/>
 {/*<Login/>*/}
    </View>
  );
}
export default App;