import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import color from "../theme/color";
import Header from "../component/Header";
import ItemPrice from "../component/ItemPrice";
import RvContact from "../component/RvContact";
import LabelButton from "../component/LabelButton";
import RvHeading from "../component/RvHeading";
import InfoCard from "../component/InfoCard";
import Description from "../component/Description";
import RvCard from "../component/RvCard";

export default function RvDetailpage() {
  return (
    <View>
      <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <Header />
        <View style={{}}>
          <View>
            <Image
              style={styles.image}
              source={require("../Images/rvdetailpage.png")}
            />
          </View>
          <RvContact
            scrImage={require("../Images/Deatailcardpic.png")}
            textName="Harvey RVs"
            textLocation="Glenburn ,ME 04401"
          />
          <ItemPrice
            launchYear="2021 Palomina"
            model="BackPack Truck camper soft side SS-1200"
            price="$17,95"
          />
          <LabelButton
            imgScr={require("../Images/offer.png")}
            text="Make an Offer"
          />
          <View style={{ marginVertical: 20 }}>
            <RvHeading heading="FLOOR PLAN" />
          </View>
          <View>
            <Image
              style={{ height: 195, width: 330 }}
              source={require("../Images/floorplan.png")}
            />
          </View>
          <RvHeading heading="POPULARITY STATS" />
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
            <InfoCard
              imgSrc={require("../Images/seen.png")}
              number="Seen 653 Times"
              text="Last 30 days"
            />
            <InfoCard
              imgSrc={require("../Images/review.png")}
              number="RV Reviews"
              text="Read and Write"
            />
          </View>
          <View style={{ marginVertical: 20 }}>
            <RvHeading heading="DETAILS" />
          </View>
          <Description />
          <View style={{ marginVertical: 20 }}>
            <RvHeading heading="DESCRIPTION" />
          </View>
          <View style={styles.description}>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              ullam reprehenderit, exercitationem dolor deserunt asperiores
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <RvHeading heading="MORE FROM DEALER" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <RvCard
              scrImage={require("../Images/rvcardpic.png")}
              title="Drifter"
              amount="$17500"
            />
            <RvCard
              scrImage={require("../Images/rvcardpic.png")}
              title="Drifter"
              amount="$17500"
            />
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
  description: {
    paddingVertical: 30,
    backgroundColor: "#F2F6FB",
  },
});
