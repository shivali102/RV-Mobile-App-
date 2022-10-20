import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'

export default function LabelButton({imgScr,text}) {
  return (
    <View style={styles.parent}>
      <View style={styles.imageStyle}>
        <Image  style={styles.image}source={imgScr}/>
      </View>
      <View style={styles.textStyle}>
        <Text>{text}</Text>
      </View>
    </View>
  )
};
const styles=StyleSheet.create({
  image:{
    height:20,
    width:20,
  },
  imageStyle:{
    
  },
  parent:{
    flexDirection:'row',
    height:40,
    Width:200,
    borderWidth:1,
  }
})