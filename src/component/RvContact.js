import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color';
export default function RvContact() {
  return (
    <View>
  <View>
    <View style={styles.imageDecor}>
        <Image style={styles.image} source ={require("../Images/Deatailcardpic.png")}/>
    </View>
  </View>

    </View>
  )
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
