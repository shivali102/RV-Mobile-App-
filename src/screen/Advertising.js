import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React from "react";
import Header from "../component/Header";
import color from "../theme/color";
import RvAds from "../component/RvAds";
import OrangeHeading from "../component/OrangeHeading";

export default function Advertising() {
  return (
    <View>
      <ScrollView>
        <StatusBar backgroundColor={color.blue} />

        <Header />
        <OrangeHeading headingText="Advertising" />
        <RvAds
          Heading="RV CLASSIFIED"
          RvAds="Most RV shoppers use a computer, phone, and/or tablet to find their next RV. Put your RV(s) in front of millions of potential RV buyers - wherever, whenever and on whatever device they use as they shop for an RV."
        />
          <RvAds
          Heading="RV CLASSIFIED"
          RvAds="Most RV shoppers use a computer, phone, and/or tablet to find their next RV. Put your RV(s) in front of millions of potential RV buyers - wherever, whenever and on whatever device they use as they shop for an RV."
        />
     
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
 
});
