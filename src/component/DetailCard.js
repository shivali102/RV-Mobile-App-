import { View, Text,Image ,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color';

export default function DetailCard() {
  return ( 
    <View style={{height:170,width:'43%',borderWidth:1,borderRadius:5,backgroundColor:'white',margin:10}}>
      <View style={{marginHorizontal:10}}>
     <View>
     <Image style={{height:87,width:127,justifyContent:'center',alignSelf:'center',marginTop:10}} source={require("../Images/Deatailcardpic.png")}/>
     </View>
     <View style={{paddingBottom:4}}>
      <Text style={{fontWeight:'bold',color:color.blue,paddingTop:3}}>Harveys RVs</Text>
     </View>
     <View>
      <Text style={{fontSize:10}}>Glenburn,ME 00441</Text>
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:4}}>
     <View>
      <Text style={{fontSize:10}}>180 Listing</Text>
     </View>
     <View>
      <Text style={{fontSize:10,fontWeight:'bold'}}>100KM</Text>
     </View>
     </View>
     </View>
    </View>

  );
  
}
const styles=StyleSheet.create({
 

})