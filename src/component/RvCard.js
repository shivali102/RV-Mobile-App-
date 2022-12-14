import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Searchbox from "./Searchbox";
import { Foundation } from "@expo/vector-icons";

export default function RvCard({ title, amount, scrImage }) {
  return (
    <View style={styles.parent}>
      <ImageBackground style={{ height: 100, width: "100%" }} source={scrImage}>
        <View style={styles.premiumLabel}>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 7 }}>PREMIUM</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View
        style={{
          borderWidth: 1,
     
          borderRadius: 12.5,
          height: 25,
          width: 25,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          marginLeft: 10,
          position: "absolute",
          bottom: 35,
          borderColor: "#FF7700",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Foundation name="heart" size={20} color="#C0C0C0" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 5 }}>
          <Text>{title}</Text>
        </View>
        <Text>{amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    borderWidth: 1,
    width: "47%",
    borderRadius: 10,
    borderColor: "grey",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    borderColor: "rgba(158, 150, 150, .6)",
  },
  premiumLabel: {
    position: "absolute",
    right: 0,
    backgroundColor: "#FF7700",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 3,
    marginTop: 10,
  },
});
