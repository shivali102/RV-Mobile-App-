
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import BackButton from "../component/BackButton";
import color from "../theme/color";
import BlueButton from "../component/BlueButton";


const Checkemail=()=>{
    return (
      <View>
        <StatusBar backgroundColor={color.blue} style="light" />
        <View style={{ paddingLeft: 30 }}>
          <BackButton />
        </View>
        <View>
          <Image
            style={styles.image}
            source={require("../Images/Checkemail.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text1}>Check your email</Text>
        </View>
        <View style={{ alignSelf: "center", width: 250 }}>
          <Text style={styles.text2}>
            We have sent a Password recovery instruction to your email
          </Text>
        </View>
        <View style={styles.button}>
          <BlueButton buttonName="OKAY" />
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
    marginBottom: 8,
  },
  text2: {
    marginHorizontal: 10,
    textAlign: "center",
  },
   button:{
  
   marginHorizontal: 10,
  padding: 20,
  
   },
});
export default  Checkemail;