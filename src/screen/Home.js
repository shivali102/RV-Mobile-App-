import { StatusBar } from "expo-status-bar";
import React from "react";
import {View,Text, ScrollView, TouchableOpacity} from "react-native"
import color from "../theme/color";
import Header from "../component/Header";
import Homebackground from "../component/Homebackground";
import RV from "../component/RvCard"
import RvCard from "../component/RvCard";
import Statusbar from "../component/Statusbar";



const image1=require("../Images/demopic.png")
const Home=()=>{
    return (
      <View>
        <StatusBar backgroundColor="#0058AB" style="light" />
        <ScrollView>
          <Header />
          <Homebackground />
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
              }}
            >
              <RvCard imgSrc={image1} text="Drifter" amount="$17500" />
              <RvCard
                imgSrc={require("../Images/RVDC.png")}
                text="Rifter"
                amount="$15,500"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                paddingVertical:10,
                
              }}
            >
              <RvCard
                imgSrc={require("../Images/rvcardpic.png")}
                text="Drifter"
                amount="$17500"
              />
              <RvCard
                imgSrc={require("../Images/rvcardpic.png")}
                text="Drifter"
                amount="$17500"
              />
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#0058AB",
                width: 140,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Text
                  style={{ color: "white", padding: 10, paddingHorizontal: 0 }}
                >
                  SEE MORE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
};
export default Home;