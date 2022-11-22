import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color'
export default function PageSubHeading({heading,Subheading}) {
  return (

        <View style={styles.headingView}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.Subheading}>{Subheading} </Text>
        </View>
            
  )
}
const styles = StyleSheet.create({
headingView:{
    marginHorizontal:15,
    paddingVertical:20,
  },
  heading: {
    fontWeight: "bold",
    color: color.blue,

  },
  Subheading:{
    color:'grey'
  }
})