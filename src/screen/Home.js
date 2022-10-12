import { StatusBar } from "expo-status-bar";
import React from "react";
import {View,Text, ScrollView} from "react-native"
import color from "../theme/color";
import Header from "../component/Header";
import Homebackground from "../component/Homebackground";
import RV from "../component/RV"

const Home=()=>{
    return (
        <View>
            <StatusBar backgroundColor={color.theme}/>
            <ScrollView>
           <Header/>
           <Homebackground/>
           <View>
           <RV/>
           </View>
            
            </ScrollView>
        </View>
    )
};
export default Home;