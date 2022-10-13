import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Searchbox from './Searchbox';
import { Foundation } from "@expo/vector-icons";

const RvCard=(props)=> {
  return (
    
      <View style={styles.parent}>
        <View style={{}}>
          <ImageBackground
            style={{ height: 100, width: "100%" }}
            source={props.imageSrc}
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
                marginHorizontal:10,
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "white", fontSize: 7 }}>PREMIUM</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View
          style=
          {{
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
            <Text>{props.text}</Text>
          </View>
          <View style={{}}>
            <Text>{props.amount}</Text>
          </View>
        </View>
        </View>
      
    
  );
};
const styles=StyleSheet.create({
  parent:{
    
        borderWidth: 1,
        width: "45%",
        borderRadius: 10,
        borderColor: "grey",
      
      },



})
export default RvCard;