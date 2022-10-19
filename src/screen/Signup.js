import React,{useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
  TouchableOpacity,

} from "react-native";
import CustomCheckbox from "../component/CustomCheckbox";
import BackButton from "../component/BackButton";
import Box from "../component/Box";
import color from "../theme/color";
export default function Signup () {
  const [isChecked,setIsChecked] = useState(false)
  return (
    <View style={styles.parent}>
    <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <BackButton />

        <Text style={styles.header}>Create an account </Text>
        <View style={{ flexDirection: "column" }}>
          <Box placeholder="First Name" />

          <Box placeholder="Last Name" />
          <Box placeholder="Email" />
          <Box placeholder="Password" />
          <Box placeholder="Re-entered Password" />
          <Box placeholder="Zip Code" />
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
          <View style={{ marginTop: 20 }}>
            <Button title="SINGUP" color="#0058AB" />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text>
              By signing up you are agree to the terms and conditions.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: 30,
  },
  header: {
    color: "#0058AB",
    fontSize: 20,
    marginTop: 30,
    fontWeight: "bold",
    paddingBottom: 20,
    fontFamily: "Montserrat-Bold",
  },
  boxView: {
    paddingVertical: 10,
  },
});

