import { View, Text, ScrollView,StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import Header from '../component/Header';
import { SearchBar } from 'react-native-screens';
import Searchbox from '../component/Searchbox';

import color from '../theme/color';
import DetailCard from '../component/DetailCard';

export default function Location() {
  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <Header/>
        <Searchbox/>
       
        <Text style={styles.text}>DEALERS</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap',marginHorizontal:10}}>
       <DetailCard/>
       <DetailCard/>
       <DetailCard/>
       <DetailCard/>
       <DetailCard/>
       <DetailCard/>

       </View>
      </ScrollView>
      </View>
      
  );
}
const styles=StyleSheet.create({
    parent:{
     
    },
 text:{
    color:color.blue,
    fontSize:20,
    fontWeight:'bold',
      marginHorizontal:20,
      marginTop:20,
    },
    
});