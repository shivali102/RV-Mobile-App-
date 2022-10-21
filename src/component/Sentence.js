import { View, Text } from 'react-native'
import React from 'react'

export default function Sentence() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 0.7 }}>
        <CustomCheckbox valueCheck={isChecked} functionCheck={setIsChecked} />
      </View>
      <View style={{ flex: 6 }}>
        <Text>Subscribe to Newsletter</Text>
      </View>
    </View>
  );
}