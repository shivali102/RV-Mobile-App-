import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color'

export default function ResourceLoan({ResourceHeading,ButtonName}) {
  return (

        <View style={styles.parent}>
        <View style={styles.TextView}>
     <Text style={styles.text}>{ResourceHeading}</Text>
     </View>
     <View style={styles.ButtonoOuterView}>
     <View style={styles.ButtonView}>
        <TouchableOpacity>
            <Text style={styles.ButtonText}>{ButtonName}</Text>
        </TouchableOpacity>
     </View>
     </View>
    </View>
  

  )
}
const styles=StyleSheet.create({
   
    text:{
        fontWeight:'bold',
        color:color.blue,
        textAlign:'center',
        fontSize:15,
    },
    TextView:{
        paddingHorizontal:40,
        paddingVertical:20,
    },
    ButtonText:{
        textAlign:'center',
        color:color.white,
        paddingVertical:5,
        fontSize:9,
     fontWeight:'600',
    },
    parent:{
        borderWidth:1,
        marginHorizontal:10,
        paddingVertical:10,
        marginVertical:10,
    },
   ButtonoOuterView:{
      
        paddingVertical:20,
    } 
})