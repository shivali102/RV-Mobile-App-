import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Searchbox from './Searchbox';

const RV=()=> {
  return (
    <View>
     <ImageBackground styles={{height:400}}source={require("../Images/demopic.png")}>
        <Text>this is a pic</Text>
      
        
     </ImageBackground>
    </View>
  )
};
export default RV;