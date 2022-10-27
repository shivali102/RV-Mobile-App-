import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function BlueButton({buttonName}) {
  return (
  
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>{buttonName}</Text>
        </TouchableOpacity>
      </View>
    
  );
}
const styles = StyleSheet.create({
  button: {
    
    alignItems: "center",

    padding: 10,
    borderRadius: 10,
    backgroundColor: "#0058AB",
  },
});