import { StatusBar } from "expo-status-bar";
import React from "react";
import {View,Text, ScrollView, TouchableOpacity} from "react-native"
import color from "../theme/color";
import Header from "../component/Header";
import Homebackground from "../component/Homebackground";
import RV from "../component/RvCard"
import RvCard from "../component/RvCard";
import Statusbar from "../component/Statusbar";



const Home=()=>{
    return (
      <View>
        <StatusBar backgroundColor="#0058AB" style="light" />
        <ScrollView>
          <Header />
          <Homebackground />
          <View>
            <RvCard />
          </View>
          <View style={{alignItems:'center'}}>
          <View style={{backgroundColor: "#0058AB" ,width:140,borderRadius:5,marginTop:10}}>
            <TouchableOpacity style={{alignItems:'center'}}>
              <Text style={{color:"white",padding:10,paddingHorizontal:0}}>SEE MORE</Text>
            </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      </View>
    );
};
export default Home;