import { View, Text ,StatusBar,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import color from '../theme/color';
import Header from "../component/Header"
import RvHeading from '../component/RvHeading';
import RvCard from '../component/RvCard';
import PageHeading from '../component/PageHeading';
import DetailCard from '../component/DetailCard';

export default function FavouriteListing() {
  return (
    <View>
      <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <Header />
        <PageHeading heading="RV LISTINGS" count="4" />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 10,
            marginTop: 10,
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
        <View style={styles.TextView}>
          <Text style={styles.text}>Show More</Text>
        </View>
        <PageHeading heading="DEALER LISTINGS" count="4" />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 10,
          }}
        >
          <DetailCard />
          <DetailCard />
        </View>
        <View style={styles.TextView}>
          <Text style={styles.text}>Show More</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: color.blue,
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  TextView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight:15,
  },
  text:{
    color:color.blue,
  }
});