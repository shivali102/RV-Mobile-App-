
import React from "react";
import {
  Text,
  View,
  StyleSheet,
 Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import BackButton from "../component/BackButton";


const Login=()=>{
    return (
      <View>
        <StatusBar backgroundColor="#0058AB" />
        <BackButton />
        <View>
          <Image
            style={styles.image}
            source={require("../Images/Checkemail.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text1}>Check your email</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={styles.text2}>We have sent a Password recovery instruction to your email</Text>
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  image: {
    width: 267,
    height: 272,
    marginTop: 60,
    marginHorizontal: 50,

    resizeMode: "contain",
  },
  text1: {
    color: "#0058AB",
    fontSize: 20,
    marginTop: 30,
    fontWeight: "bold",
    marginBottom:8,
   
  },
  text2:{
    marginHorizontal:50
  }
});
export default  Login;