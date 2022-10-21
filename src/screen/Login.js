
import react from 'react'
import {View,Text, TouchableOpacity,StyleSheet, ScrollView,TextInput,StatusBar} from 'react-native'
import Email from '../component/Email';
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import color from '../theme/color';
import BlueButton from '../component/BlueButton';


const Login=()=>
{   return (
  <View>
    <StatusBar backgroundColor={color.blue} style="light" />
    <ScrollView>
      <View
        style={{
          flexDirection: "row",

          marginTop: 20,
        }}
      >
        <View style={styles.user}>
          <TouchableOpacity>
            <Text
              style={{
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              USER
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dealer}>
          <TouchableOpacity>
            <Text
              style={{
                alignItems: "center",
                color: "#0058AB",
                fontWeight: "bold",
              }}
            >
              DEALER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.subheader}>Log in to account</Text>
        <View style={styles.TextBox}>
          <View style={styles.icon}>
            <FontAwesome name="envelope" size={15} color="grey" />
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <TextInput style={styles.Text} placeholder="Email" />
          </View>
        </View>
        <View style={styles.TextBox}>
          <View style={styles.icon}>
            <Entypo name="lock" size={15} color="grey" />
          </View>
          <View style={{ flex: 6, justifyContent: "center" }}>
            <TextInput style={styles.Text} placeholder="Password" />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ color: "grey" }}>Forgot Password?</Text>
          </View>
        </View>
        <BlueButton
          buttonName="Login"
        />
      
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <View>
            <Text>Don't have an account?</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ color: "#0058AB", fontWeight: "bold" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
);
}
const styles = StyleSheet.create({
  button1: {
    marginTop: 30,
    borderWidth: 1,
    width: 90,
  },
  header: {
    marginHorizontal: 30,
  },
  subheader: {
    color: "#0058AB",
    marginTop: 80,
    fontWeight: "bold",
    fontSize: 20,
  },
  TextBox: {
    flexDirection: "row",

    borderWidth: 1,

    borderColor: "grey",
    marginTop: 20,
    height: 40,


    borderRadius: 8,
  },
  icon: {
    flex: 1,
    justifyContent:'center',
    borderRightWidth: 1,
    borderRightColor: "grey",
    alignItems: "center",
  },
  Text: {
   
    paddingLeft: 10,

  },
 
  dealer: {


    flex: 4,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#EBEBEB",
  },
  user: {
    flex: 4,
    alignItems: "center",
    
    paddingVertical: 20,
    backgroundColor: "#0058AB",
  },
});
export default Login;