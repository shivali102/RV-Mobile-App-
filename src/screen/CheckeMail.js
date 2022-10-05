
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


const Checkemail=()=>{
    return (
      <View>
        <StatusBar backgroundColor="#0058AB" />
        <View style={{paddingLeft:30}}>

      
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
        <View style={{alignSelf:'center',width:250}}>
            <Text style={styles.text2}>We have sent a Password recovery instruction to your email</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
           <Text style={{color:'white'}}>OKAY</Text> 
          </TouchableOpacity>
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
    marginHorizontal:10,
    textAlign:'center',
    
  },
  button:{
    alignItems:'center',
    marginTop:30,
    
    borderRadius:10,
    marginHorizontal:30,
    padding:10,
    backgroundColor:'#0058AB'
  }
});
export default  Checkemail;