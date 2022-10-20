import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color';

export default function RvHeading({heading}) {
  return (
    <View style={styles.TextView}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: color.blue,
    fontSize: 15,
  },
  TextView: {
    alignSelf: "center",
    
  },
});