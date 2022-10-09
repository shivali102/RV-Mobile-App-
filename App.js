import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Signup from './src/screen/Signup'
import ForgetPassword from './src/screen/ForgetPassword'; 
import Checkemail from './src/screen/CheckeMail';
import Login from './src/screen/Login';
import useFonts from './src/api/useFonts';



export default function App () {
  useEffect(()=> {
    useFonts();
  }, []);
  return (
    <View>
 {/* <Checkemail/> */}
  {/*<ForgetPassword/>*/}
 
 <Signup/>
 {/*<Login/>*/}
    </View>
  );
}
