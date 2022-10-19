import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import color from "../theme/color";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
export default function RvContact({ scrImage, textName , textLocation }) {
  return (
    <View style={styles.parent}>
      <View style={styles.DottedBorder}>
        <View style={{ flexDirection: "row", width: "60%" }}>
          <View style={styles.logo}>
            <Image style={styles.image} source={scrImage} />
          </View>
          <View style={styles.textView}>
            <Text>{textName}</Text>
            <Text>{textLocation}</Text>
          </View>
        </View>

        <View style={styles.iconGroup}>
          <View style={[styles.icon2, { backgroundColor: color.orange }]}>
            <Ionicons name="heart-sharp" size={13} color="white" />
          </View>
          <View style={styles.icon2}>
            <FontAwesome name="envelope" size={13} color="white" />
          </View>
          <View style={styles.icon2}>
            <Ionicons name="call-sharp" size={13} color="white" />
          </View>
          <View style={styles.icon2}>
            <FontAwesome5 name="globe" size={13} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    
  },
  logo: {
    borderWidth: 1,
    height: 40,
    width: 40,
    borderColor: color.blue,
    borderRadius: 20,
    
  },
  textView: {
    flexWrap: "wrap",
    paddingLeft:10,
    
  },
  iconGroup: {
    flexDirection: "row",
    justifyContent:'space-evenly',
    width:"40%",
    alignItems:'center',
    
  },
  icon1: {
    height: 25,
    width: 25,
    borderRadius: 13,

    backgroundColor: color.orange,
    justifyContent: "center",
  },
  icon2: {
    backgroundColor: color.blue,
    height: 25,
    width: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  DottedBorder: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: "grey",
    flexDirection: "row",
    marginHorizontal:10,
    marginVertical:10,
  },
  parent: {
   
  },
});
