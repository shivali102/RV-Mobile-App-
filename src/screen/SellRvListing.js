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
        <PageSubHeading
        heading="SELECT AND PLAN"
        Subheading="Select a photo package plan"
        
        />
        <View>
          <WhiteBox 
       PlanName="Basic"
       PlanPhotoes="4 photos/2 weeks"
       oldprice="$78.95"
        originalprice="$69.95"/>
          <WhiteBox   PlanName="Enhanced"
       PlanPhotoes="20 photos/8 weeks"
       oldprice="$178.95"
        originalprice="$134.95"/>
          <WhiteBox PlanName="Best"
       PlanPhotoes="50 photos/1 year"
       oldprice="$178.95"
        originalprice="$134.95"/>
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
