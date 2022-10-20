import { View, Text } from 'react-native'
import React from 'react'

export default function Description() {
  return (
    <View style={{ marginLeft: 10, backgroundColor: "#F2F6FB",paddingBottom:20,paddingTop:10 }}>
      <View style={{ flexDirection: "row", paddingVertical: 10 }}>
        <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>Condition:</Text>
        <Text>used</Text>

        <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>Year:</Text>
        <Text>2021</Text>
        <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>Make</Text>
        <Text>2021</Text>
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 5 }}>
        <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>Model:</Text>
        <Text>Backpack truck Soft Side SS-1200</Text>
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>Type:</Text>
          <Text>Truck Camper</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>Location:</Text>
          <Text>glenburn ,ME ,04401</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
            Stock Number:
          </Text>
          <Text>1506A3</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>Length:</Text>
          <Text>13</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 5 }}>
        <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>Vin:</Text>
        <Text>00000000000000000</Text>
      </View>
      <View style={{ flexDirection: "row", paddingVertical: 5 }}>
        <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
          WaterCapacity:
        </Text>
        <Text>15 gal</Text>
      </View>
    </View>
  );
}