import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";


import BackButton from "../BackButton";
import Box from "../Box";


const Login = () => {
  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor="#FF7700" />
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
            <View style={{ flex: 0.7 }}></View>
            <View style={{ flex: 6 }}>
              <Text>Subscribe to Newsletter</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Button title="SINGUP" color="#FF7700" />
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
    color: "#FF7700",
    fontSize: 20,
    marginTop: 30,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  boxView: {
    paddingVertical: 10,
  },
});
export default Login;
