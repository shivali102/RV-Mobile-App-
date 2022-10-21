import { View, Text,StatusBar,StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from "react";
import color from '../theme/color';
import Header from '../component/Header';
import Box from '../component/Box';
import CustomCheckbox from "../component/CustomCheckbox";
import BlueButton from '../component/BlueButton';

export default function SendEmail() {
    const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <Header />
        <View style={styles.Heading}>
          <Text style={styles.text}>Send Email To Dealer</Text>
        </View>
        <View style={{ marginTop: 10, paddingHorizontal: 15 }}>
          <Box label="First Name" star="*" placeholder="Enter  first Name" />
          <Box label="Last Name" star="*" placeholder="Enter Last Name" />
          <Box label="Email" star="*" placeholder="Enter Email" />
          <Box label="Phone" star="*" placeholder="Enter phone number" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.7 }}>
            <CustomCheckbox
              valueCheck={isChecked}
              functionCheck={setIsChecked}
            />
          </View>
          <View style={{ flex: 6 }}>
            <Text>Subscribe to Newsletter</Text>
          </View>
        </View>
        <View style={{marginHorizontal:10}}>
          <BlueButton buttonName="SEND" />
        </View>
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
  innerView: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  parent: {},
  outerView: {
    marginTop: 20,
    marginHorizontal: 10,
  },
});
