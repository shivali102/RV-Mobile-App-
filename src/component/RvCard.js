import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Searchbox from './Searchbox';
import { Foundation } from "@expo/vector-icons";

const RvCard=()=> {
  return (
    <View
      style={{
        borderWidth: 1,
        width: "40%",

        borderRadius: 10,
        borderColor: "grey",
      }}
    >
      <View style={{}}>
        <ImageBackground
          style={{ height: 100, width: "100%" }}
          source={require("../Images/demopic.png")}
        >
          <View
            style={{
              position: "absolute",
              right: 0,
              backgroundColor: "#FF7700",
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderRadius: 3,
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 7 }}>PREMIUM</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 12.5,
          height: 25,
          width: 25,
          backgroundColor: "white",
          justifyContent: "center",
          marginLeft: 10,
          position: "absolute",
          bottom: 35,
          borderColor: "#FF7700",
          shadowColor: "#000000",
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
          <Text>Drifter</Text>
        </View>
        <View style={{}}>
          <Text>$17,500</Text>
        </View>
      </View>
    </View>
  );
};
export default RvCard;