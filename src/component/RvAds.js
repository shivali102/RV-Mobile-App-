import { View, Text, ScrollView, StatusBar, ImageBackground ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import color from '../theme/color'
import SmallButton from './SmallButton'
export default function RvAds({Heading,RvAds}) {
  return (
    
       

    <View style={styles.imageView}>
        <ImageBackground style={styles.BgImage}  source={require("../Images/AdvertisingPagePic.png")}>
            <Text style={styles.Headingtext}>{Heading}</Text>
            <View style={styles.adstextView}>
            <Text style={styles.adstext}>{RvAds}</Text>
            </View>
    <View style={styles.BothButtonStyle}>
    <SmallButton ButtonName="RV Dealers"/>
    <SmallButton ButtonName="PRIVATE SELLERS"/>
    </View>

        </ImageBackground>
     
    </View>

  )
}
const styles=StyleSheet.create({

BgImage:{
    height:hp(30),
   width:"100%",
},
imageView:{
    paddingHorizontal:15,
    paddingVertical:15,
},
Headingtext:{
    textAlign:'center',
    color:color.white,
    fontWeight:'800',
    paddingTop:30,
    paddingBottom:10,
},
adstext:{
  
    color:color.white,
    fontWeight:'400',
    fontSize:10,


},
adstextView:{
  
    paddingHorizontal:35,
},
ButtonView:{
    borderRadius:4,       
    backgroundColor:color.orange,

    padding:6,
    

},

BothButtonStyle:{
 flexDirection:'row',
 justifyContent:"space-between",
 paddingHorizontal:35,
 paddingTop:15,
},
ButtonoOuterView:{
      
 
} 
})