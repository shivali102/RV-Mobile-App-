import { View, Text,StatusBar,ScrollView ,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../component/Header';
import color from '../theme/color';
import RvCard from '../component/RvCard';
import BlueButton from '../component/BlueButton';
export default function ListingDetailPage() {
  return (
    <View>
      <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <Header />
        <View style={styles.Heading}>
          <Text style={styles.text}>RV Listings</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 10,
            marginTop: 30,
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
          <RvCard
            title="Rifter"
            amount="$15,500"
            scrImage={require("../Images/rvcardpic.png")}
          />
        </View>
        <BlueButton buttonName="OKAY" />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Heading: {
    backgroundColor: color.orange,
    padding: 10,
  },
  text: {
    color: "white",
  },
});