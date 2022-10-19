import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Signup from './src/screen/Signup'
import ForgetPassword from './src/screen/ForgetPassword'; 
import Checkemail from './src/screen/CheckeMail';
import Login from './src/screen/Login';
import useFonts from './src/api/useFonts';
import Home from "./src/screen/Home";
import Location from './src/screen/Location';
import LocationDetails from './src/screen/LocationDetails';
import RvDetailpage from './src/screen/RvDetailpage';


export default function App () {
  useEffect(()=> {
    useFonts();
  }, []);
  return (
    <View>
      {/* <Checkemail/> */}
      {/*<ForgetPassword/>*/}
      {/* <Signup/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Location/> */}
      {/* <LocationDetails/>  */}
      <RvDetailpage/>
    </View>
  );
}
