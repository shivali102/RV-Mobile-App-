import { View, StatusBar,Image,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Header from '../component/Header'
import RvContact from '../component/RvContact';


export default function LocationDetails() {
  return (
    <View>
      <StatusBar backgroundColor="#0058AB" style="light" />
      <ScrollView>
        <Header />
        <View>
          <Image
            style={styles.image}
            source={require("../Images/Deatailcardpic.png")}
          />
        </View>
        <RvContact/>
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