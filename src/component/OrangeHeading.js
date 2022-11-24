import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color'

export default function OrangeHeading({headingText}) {
  return (
    
      <View style={styles.Heading}>
          <Text style={styles.text}>{headingText}</Text>
        </View>
    
  )
}
const styles = StyleSheet.create({
    Heading: {
      backgroundColor: color.orange,
      padding: 10,
    },
    text: {
      color: "white",
    },
})