import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import color from "../theme/color";

const { height, width } = Dimensions.get("window");
export default function Testimonial() {
  return (
    <View style={styles.container}>
      {/* Left View */}
      <View style={styles.leftView}>
        <Text style={styles.leftHead}>Excellent</Text>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <View style={styles.star_comp}>
            <Entypo name="star" size={15} color={color.white} />
          </View>
          <View style={styles.star_comp}>
            <Entypo name="star" size={15} color={color.white} />
          </View>
          <View style={styles.star_comp}>
            <Entypo name="star" size={15} color={color.white} />
          </View>
          <View style={styles.star_comp}>
            <Entypo name="star" size={15} color={color.white} />
          </View>
          <View style={styles.star_comp}>
            <Entypo name="star" size={15} color={color.white} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Entypo name="star" size={15} color={color.orange} />
          <Text style={styles.trust_pilot}>Trustpilot</Text>
        </View>
      </View>

      {/* Right View */}
      <View style={styles.rightView}>
        <View>
          <Text style={styles.right_subHead}>Testimonial</Text>
          <Text style={styles.right_headLine}>WORDS FROM CLIENTS</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.client_container}>
            <Text style={styles.client_name}>Ray Sloan</Text>
            <Text style={styles.date}>28 Sep 2022</Text>
            <Text style={styles.feedback} numberOfLines={4}>
              Dolore et ut ipsum laboris voluptate cupidatat pariatur Lorem
              reprehenderit nisi sunt enim ut consectetur.
            </Text>
          </View>
          <View style={styles.client_container}>
            <Text style={styles.client_name}>Ray Sloan</Text>
            <Text style={styles.date}>28 Sep 2022</Text>
            <Text style={styles.feedback} numberOfLines={4}>
              Dolore et ut ipsum laboris voluptate cupidatat pariatur Lorem
              reprehenderit nisi sunt enim ut consectetur.
            </Text>
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", alignSelf: "center",marginVertical:10 }}>
          <View style={styles.arrow_button}>
            <Entypo name="chevron-left" size={13} color={color.white} />
          </View>
          <View style={styles.arrow_button}>
            <Entypo name="chevron-right" size={13} color={color.white} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: color.blue,
    borderRadius: 3,
    marginVertical: 10,
  },
  leftView: {
    // height: height / 5,
    backgroundColor: color.blue,
    width: "35%",
    justifyContent: "center",
    alignContent: "center",
  },
  rightView: {
    width: "65%",
    paddingHorizontal: 10,
  },
  star_comp: {
    width: 20,
    height: 20,
    backgroundColor: color.orange,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  leftHead: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "700",
    color: color.white,
  },
  trust_pilot: {
    fontSize: 12,
    fontWeight: "600",
    color: color.white,
  },
  arrow_button: {
    height: 15,
    width: 15,
    borderRadius: 5,
    backgroundColor: color.blue,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  right_subHead: {
    alignSelf: "center",
    fontSize: 14,
    color: "grey",
    marginTop:10
  },
  right_headLine: {
    fontSize: 20,
    fontWeight: "700",
    color: color.blue,
    alignSelf: "center",
  },
  client_container: {
    width: width / 3.5,
    marginLeft: 10,
  },
  client_name: {
    fontSize: 12,
    color: color.blue,
    fontWeight: "700",
  },
  date:{
    fontSize:8
  },
  feedback:{
    fontSize:8,
  }
});
