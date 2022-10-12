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
            <Ionicons name="ios-notifications" size={32} color="#0058AB" />
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    headerstyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        alignItems:'center',
        marginTop:30,
        height:50
       
        
    },
    image:{
        width:80,
        height:50,
        resizeMode:"contain"
    },

    
})
export default header;