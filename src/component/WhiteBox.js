import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'


export default function WhiteBox() {
  return (
    <View
      style={{
        borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom:10,
      }}
    >
      <Text style={{ fontWeight: "bold", marginLeft: 10, paddingBottom: 5 }}>
        Basic
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      
          <View
            style={{
              backgroundColor: "#595A5A",
              width: 150,
              padding: 10,
              borderRadius: 5,
              marginLeft: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white" }}>4 Photos/2 Week</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 10 }}>
            <Text style={{ color: "#196A0C" }}>$69.95</Text>
          </View>
        </View>
      </View>

  );
}
const styles = StyleSheet.create({

})
