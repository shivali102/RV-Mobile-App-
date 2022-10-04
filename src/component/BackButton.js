import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const BackButton= () => {
  return (
    <View style={{ marginTop: 40 }}>
      <TouchableOpacity>
        <Ionicons
          name="chevron-back"
          size={24}
          color="#0058AB"
        />
      </TouchableOpacity>
    </View>
  );
};
export default BackButton;
