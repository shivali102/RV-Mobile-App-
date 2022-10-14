import { View, Text,Image ,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color';

export default function DetailCard() {
  return (
    <View>
      <View style={{ borderWidth: 1, width: 127, height: 100 }}>
        <Image
          style={styles.image}
          source={require("../Images/Deatailcardpic.png")}
        />
      </View>
      <View>
        <Text style={styles.name}>Harvey RVs</Text>
      </View>
      <View>
        <Text style={styles.description}>genburn ,ME</Text>
      </View>

      <View style={{flowDirection:'row',justifyContent:"space-between"}}>
        <View style={{flex:6}}>
          <Text style={{fontSize:6}}>180 Listenings</Text>
        </View>
        <View style={{flex:8}}>
          <Text style={{fontSize:7}}>100KM</Text>
        </View>
       
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
 image:{
  resizeMode:'center',
  Height:"20%",
  width:"100%",


 },
 name:{
  fontSize:15,
  fontWeight:'bold',
  color:color.blue,
 },
 description:{
  color:"grey",
 }


})