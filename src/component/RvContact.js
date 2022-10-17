import { View, Text,Image,StyleSheet, } from 'react-native'
import React from 'react'
import color from '../theme/color';
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
export default function RvContact() {
  return (
    <View>
      <View>
        <View style={styles.imageDecor}>
          <Image
            style={styles.image}
            source={require("../Images/Deatailcardpic.png")}
          />
        </View>
      </View>
      <View style={styles.iconGroup}>
        <View style={styles.icon1}>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="heart-sharp" size={13} color="white" />
          </View>
        </View>
        <View style={styles.icon2}>
          <View style={{ alignItems: "center" }}>
            <FontAwesome name="envelope" size={13} color="white" />
          </View>
        </View>
        <View style={styles.icon3}>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="call-sharp" size={13} color="white" />
          </View>
        </View>
        <View style={styles.icon4}>
          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="globe" size={13} color="white" />
          </View>
        </View>
      </View>
      ;
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius:20,
  },
  imageDecor:{
    borderWidth:1,
    height:40,
    width:40,
    borderColor:color.blue,
    borderRadius:20,
  }
});
