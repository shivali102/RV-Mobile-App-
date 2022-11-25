import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import color from "../theme/color";
export default function SmallButton({ ButtonName }) {
  return (
    <TouchableOpacity>
      <View style={styles.ButtonoOuterView}>
        <View style={styles.ButtonView}>
          <Text style={styles.ButtonText}>{ButtonName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  ButtonText: {
    textAlign: "center",
    color: color.white,
    fontSize: 9,
    fontWeight: "600",
  },
  ButtonView: {
    borderRadius: 4,
    backgroundColor: color.orange,
    width: wp(33),
    height: hp(4),
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
