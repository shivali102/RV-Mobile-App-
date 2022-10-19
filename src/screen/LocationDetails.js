import { View, StatusBar,Image,StyleSheet, ScrollView,Text,TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../component/Header'
import RvContact from '../component/RvContact';
import color from '../theme/color';
import RvCard from '../component/RvCard';

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
        <RvContact />
        <View style={styles.TextView}>
          <Text style={styles.text}>180 RV'S</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 10,
          }}
        >
          <RvCard
            title="Rifter"
            amount="$15,500"
            scrImage={require("../Images/rvcardpic.png")}
          />
          <RvCard
            title="Rifter"
            amount="$15,500"
            scrImage={require("../Images/rvcardpic.png")}
          />
          <RvCard
            title="Rifter"
            amount="$15,500"
            scrImage={require("../Images/rvcardpic.png")}
          />
          <RvCard
            title="Rifter"
            amount="$15,500"
            scrImage={require("../Images/rvcardpic.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <View
            style={styles.button}
          >
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Text
                style={styles.ButtonText}
              >
                SEE MORE
              </Text>
            </TouchableOpacity>
          </View>
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
  text: {
    fontWeight: "bold",
    color: color.blue,
    fontSize: 15,
  },
  TextView: {
    alignSelf: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#0058AB",
    width: 140,
    borderRadius: 5,
    marginTop: 10,
  },
  ButtonText: {
    color: "white",
    padding: 10,
    paddingHorizontal: 0,
  },
});