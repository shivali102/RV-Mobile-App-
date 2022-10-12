import React from "react";
import {View,Text, StyleSheet,Image, TextInput} from "react-native"
import { AntDesign } from '@expo/vector-icons';
const searchbox=()=>{
    return (
        <View style ={styles.searchstyle}>
            <View style={{flex:1,alignSelf:"center"}}>
            <AntDesign name="search1" size={24} color="#FF7700" />
            </View>
            <View style={{flex:7}}>
            <TextInput placeholder="Search"/>
            </View>
            <View style={{alignSelf:'center'}}>
            <Image style={{width:20,height:20}}source={require("../Images/filterimage.png")}/>
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    searchstyle:{
      flexDirection:'row',
      
      paddingVertical:8,
      paddingHorizontal:10,
      backgroundColor:'white',
      marginTop:20,
      marginHorizontal:20,
      borderRadius:20,
      borderColor:'#FF7700',
      borderWidth:1,
      
    },
      
})
export default searchbox;