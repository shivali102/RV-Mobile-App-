import { View, Text ,StatusBar,Image,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import color from '../theme/color';
import Header from "../component/Header"
import ItemPrice from '../component/ItemPrice';
import RvContact from '../component/RvContact';

export default function RvDetailpage() {
  return (
    <View>
      <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <Header />
        <View style={{ backgroundColor: "#E8E8E8" }}>
          <View>
            <Image
              style={styles.image}
              source={require("../Images/rvdetailpage.png")}
            />
          </View>
          <RvContact
            scrImage={require("../Images/Deatailcardpic.png")}
            textName="Harvey RVs"
            textLocation="Glenburn ,ME 04401"
          />
          <ItemPrice
            launchYear="2021 Palomina"
            model="BackPack Truck camper soft side SS-1200"
            price="$17,95"
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 395,
    height: 195,
  },
});