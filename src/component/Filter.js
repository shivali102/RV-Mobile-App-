import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'

export default function Filter() {
  return (
    
    <View style={styles.parent}>
      <View>
      <Text>FILTER</Text>
      </View>
      <View>
      <Image  style={{width:30,height:30}}source={require("../Images/filterimage.png")}/>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  parent:{
    flexDirection:'row',
    justifyContent:'center',
    borderWidth:1,
    width:100
  }

})