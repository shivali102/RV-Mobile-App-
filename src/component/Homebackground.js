import React from "react";
import {View,Text, ImageBackground,StyleSheet,Image} from "react-native"
import Searchbox from "./Searchbox"

const Homebg=()=>{
    return(
        <View>
            <ImageBackground style={{height:400}}source={require("../Images/bgimage.png")}>
                 <Searchbox/>
                 <View style={{flexDirection:'row', marginTop:50}}>
                <View style={styles.textstyle}>
                    <Text style={styles.childtext1}>A NEW WAY TO</Text>
                    <Text style={styles.childtext2}>LIVE,A NEW WAY</Text>
                    <Text style={styles.childtext2}>TO MOVE.</Text>                  
                   </View>
                   <View style={{position:'absolute',right:1}}>
                    <View>
                      <Text style={styles.makes}>Makes</Text>
                    </View>
                    <View>
                      <Text style={styles.types}>Types</Text>
                    </View>

                   </View>
                  
                   </View>


            </ImageBackground>
            <View style={{alignItems:'center',padding:20}}>
                    <Text style={{fontWeight:'bold',color:'#0058AB'}}>RV SPOTLIGHT</Text>
                   </View>
                   <View style={{marginHorizontal:10}}>
                    <ImageBackground style={{height:200,width:340}} source={require("../Images/bgimage2.png")}>
                    </ImageBackground>
                   </View>
                   <View style={{padding:30}}>
                    <Text style={{alignSelf:'center',fontSize:10}}>FEATURED RVS</Text>
                    <Text style={styles.text2}>RECOMMENDED RVS</Text>
                    

                   </View>
                  
        </View>
    )
};
const styles=StyleSheet.create({
    textstyle:{
      
      
       
        flexWrap:'wrap',
        marginLeft:20
       
                


    },
    childtext1:{
        fontSize:30,
        fontWeight:'bold',
        color:'#FF7700',
    },
    childtext2:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',

    },
    types:{
        backgroundColor:'white',
        height:60,
        width:80,
        padding:10,
    },
    makes:{
        backgroundColor:'#FF7700',
       height:60,
       width:80,
       padding:10,

    },
    text2:{
        fontWeight:'bold',
    color:'#0058AB',
    alignSelf:'center',
    
    }
})
export default Homebg;