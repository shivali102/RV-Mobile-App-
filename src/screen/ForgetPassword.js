import React from 'react';
import {View,Text,Image,StyleSheet, ScrollView, TouchableOpacity,StatusBar} from 'react-native'
import color from '../theme/color'
import Email from '../component/Email'
import BackButton from '../component/BackButton'


const ForgetPassword=()=>{
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor={color.blue} style="light" />
        <ScrollView>
          <View style={{ paddingLeft: 30 }}>
            <BackButton />
          </View>
          <View>
            <Image
              style={styles.image}
              source={require("../Images/forgetPassword.png")}
            />
          </View>
          <Text
            style={{
              color: "#0058AB",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginLeft: 30,
            }}
          >
            Forgotten Password?
          </Text>
          <Email />
          <View>
            <TouchableOpacity style={styles.Button}>
              <Text style={{ color: "white" }}>SEND</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  header: {
    backgroundColor: "white",
  },
  Button: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#0058AB",
  
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    height: 45,
  },
});
export default ForgetPassword;