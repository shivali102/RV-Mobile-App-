import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import BackButton from "../component/BackButton";
import Box from "../component/Box";
import {  
Montserrat_100Thin,
Montserrat_100Thin_Italic,
Montserrat_200ExtraLight,
Montserrat_200ExtraLight_Italic,
Montserrat_300Light,
Montserrat_300Light_Italic,
Montserrat_400Regular,
Montserrat_400Regular_Italic,
Montserrat_500Medium,
Montserrat_500Medium_Italic,
Montserrat_600SemiBold,
Montserrat_600SemiBold_Italic,
Montserrat_700Bold,
Montserrat_700Bold_Italic,
Montserrat_800ExtraBold,
Montserrat_800ExtraBold_Italic,
Montserrat_900Black,
Montserrat_900Black_Italic,
} 
from '@expo-google-fonts/montserrat';
import { useFonts } from "expo-font";
// import AppLoading from 'expo-app-loading';

const Signup = () => {
  let [fontsload]=useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
    

});
// if (!fontsload){
//   return <AppLoading/>;
// }
  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor="#0058AB" />
      <ScrollView>
        <BackButton />

        <Text style={styles.header}>Create an account </Text>
        <View style={{ flexDirection: "column" }}> 
          <Box placeholder="First Name" />

          <Box placeholder="Last Name" />
          <Box placeholder="Email" />
          <Box placeholder="Password" />
          <Box placeholder="Re-entered Password" />
          <Box placeholder="Zip Code" />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.7 }}></View>
            <View style={{ flex: 6 }}>
              <Text>Subscribe to Newsletter</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Button title="SINGUP" color="#0058AB" />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text>
              By signing up you are agree to the terms and conditions.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: 30,
  },
  header: {
    color: "#0058AB",
    fontSize: 20,
    marginTop: 30,
    fontWeight: "bold",
    paddingBottom: 20,
    fontFamily:'Montserrat_900Black_Italic',
  },
  boxView: {
    paddingVertical: 10,
  },
});
export default Signup;
