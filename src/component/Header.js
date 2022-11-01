import React from "react";
import {View,Text,StyleSheet} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import {Image} from 'react-native'

const header=()=>
{
    return (
        <View style={styles.headerstyle}>
            <View>
               <Ionicons name="md-menu" size={35} color="#0058AB"  />
            </View>
            <View>
                <Image style={styles.image} source={require("../Images/RVDC.png")}/>
            </View>
             <View>
            <Ionicons name="ios-notifications" size={28} color="#0058AB" />
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    headerstyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        alignItems:'center',
      paddingVertical:15,
        height:70,
      shadowOpacity:0.9,
      shadowColor:'black',
      shadowOffset:{width:0,height:5},
      shadowRadius:6,
    
    },
    image:{
        width:83,
        height:40,
    },

    
})
export default header;