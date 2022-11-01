import { View, Text ,StatusBar,StyleSheet} from 'react-native'
import React from 'react'
import color from '../theme/color';
import Header from "../component/Header"
import RvHeading from '../component/RvHeading';
import RvCard from '../component/RvCard';
import PageHeading from '../component/PageHeading';

export default function FavouriteListing() {
  return (
    <View>
      <StatusBar backgroundColor={color.blue} style="light" />
      <Header />
      <PageHeading heading="RV LISTINGS"
        number="4"
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginHorizontal: 10,
          marginTop:10,
        }}
      >
        <RvCard
          title="Rifter"
          amount="$15,500"
          scrImage={require("../Images/rvcardpic.png")}
        />
        <RvCard
          title="Rifter"
          amount="$15,500"
          scrImage={require("../Images/rvcardpic.png")}
        />
        <RvCard
          title="Rifter"
          amount="$15,500"
          scrImage={require("../Images/rvcardpic.png")}
        />
      
      </View>
    </View>
  );
}
const styles = StyleSheet.creae({
  text: {
    color: color.blue,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,

  },
});