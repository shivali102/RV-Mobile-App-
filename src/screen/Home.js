import { StatusBar } from "expo-status-bar";
import React from "react";
import {View,Text, ScrollView, TouchableOpacity,Image} from "react-native"
import color from "../theme/color";
import Header from "../component/Header";
import Homebackground from "../component/Homebackground";
import RV from "../component/RvCard"
import RvCard from "../component/RvCard";
import Statusbar from "../component/Statusbar";
import InfoCard from "../component/InfoCard";
import SellRv from "../component/SellRv";
import Testimonial from "../component/Testimonial"






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
              <RvCard scrImage={require("../Images/rvcardpic.png")} title="Drifter" amount="$17500" />
              <RvCard
            
                title="Rifter"
                amount="$15,500"
                scrImage={require("../Images/rvcardpic.png")}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <RvCard
                scrImage={require("../Images/rvcardpic.png")}
                title="Drifter"
                amount="$17500"
              />
              <RvCard
                scrImage={require("../Images/rvcardpic.png")}
                title="Drifter"
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

          <View style={{ flexDirection: "row", flexWrap: "wrap",paddingHorizontal:10 }}>
            <InfoCard
              imgSrc={require("../Images/infocard1.png")}
              number="5000+"
              text="Client Benchmarks"
            />

            <InfoCard
              imgSrc={require("../Images/rvcard2.png")}
              number="10+ million $"
              text="Deals Values"
            />

            <InfoCard
              imgSrc={require("../Images/rvcard3.png")}
              number="20+ Years"
              text="Cumulative experience"
            />

            <InfoCard
              imgSrc={require("../Images/rvcard4.png")}
              number="100+"
              text="Best dealer"
            />
          </View>

          <SellRv />
          <Testimonial />
        </ScrollView>
      </View>
    );
};
export default Home;