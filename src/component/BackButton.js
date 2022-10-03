import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const BackButton= () => {
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity>
        <Ionicons name="chevron-back" size={24} color="#FF7700" />
      </TouchableOpacity>
    </View>
  );
};
export default BackButton;
