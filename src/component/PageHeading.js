import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import RvHeading from './RvHeading';
import color from '../theme/color';

export default function PageHeading({heading,count}) {
  return (
    <View>
      <Text style={styles.heading}>
        <Text style={styles.text}>{heading}</Text>
        <Text>({count})</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: color.blue,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    
  },
  heading:{
    marginLeft:15,
  }
});