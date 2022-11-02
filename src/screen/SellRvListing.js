import { View, Text, ScrollView, StatusBar,StyleSheet} from 'react-native'
import React from 'react'
import color from '../theme/color';
import Header from "../component/Header";
import { SearchBar } from 'react-native-screens';
import Searchbox from "../component/Searchbox";
import WhiteBox from '../component/WhiteBox.js';
import BlueButton from '../component/BlueButton';
export default function SellRvListing() {
  return (
    <View>
      <ScrollView>
        <StatusBar backgroundColor={color.blue} style="light" />
        <Header />
        <View style={styles.ListingBox}>
          <Text style={styles.ListingText}>
            <Text style={{ fontWeight: "bold" }}>NEW LISTING</Text>
            <Text>/What Are You Selling?</Text>
          </Text>

          <Searchbox />
        </View>
        <View style={styles.headingView}>
          <Text style={styles.heading}>SELECT AND PLANS</Text>
          <Text style={styles.Subheading}>Select a photo package plan </Text>
        </View>
        <View>
          <WhiteBox />
          <WhiteBox />
          <WhiteBox />
        </View>
        <View style={{marginHorizontal:10}}>
          <BlueButton buttonName="CONTINUE" />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  ListingBox: {
    backgroundColor: color.blue,
    paddingTop: 20,
    paddingBottom: 30,
  },
  ListingText: {
    color: color.white,
    marginHorizontal: 20,
    flexWrap: "wrap",
  },
  heading: {
    fontWeight: "bold",
    color: color.blue,
  },
  Subheading:{
    color:'grey'
  },
  headingView:{
    marginHorizontal:15,
    paddingVertical:20,
  }
});
