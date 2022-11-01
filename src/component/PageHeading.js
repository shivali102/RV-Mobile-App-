import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import RvHeading from './RvHeading';
import color from '../theme/color';

export default function PageHeading({heading,number}) {
  return (
    <View>
      <Text>
        <Text style={styles.text}>{heading}</Text>
        <Text>{number}</Text>
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
});