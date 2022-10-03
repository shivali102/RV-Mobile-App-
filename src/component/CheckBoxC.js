import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CheckBox from "react-native-check-box";

const CheckBoxC = ({ props }) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox
        onClick={() => {
          setChecked(!checked);
          console.log(!checked);
        }}
        isChecked={checked}
        // leftText={"CheckBox"}
        checkedCheckBoxColor={color.purple}
        checkBoxColor={color.purple}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
  },
});
export default CheckBoxC;
