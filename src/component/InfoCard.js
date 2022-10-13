import { useLinkProps } from "@react-navigation/native";
import react from "react"
import {View,Text,Image} from "react-native"
const InfoCard=(props)=>{

    return (
      <View
        style={{
          marginTop: 20,
          marginHorizontal:0,
          width: "45%",
        
          borderRadius: 10,
          padding: 20,
          backgroundColor: "#e6e6fa",
        }}
      >
     
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ height: 90, width: 90 }}
              source={require("../Images/infocard1.png")}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#0058AB" }}
            >
            {props.number}
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text>{props.text}</Text>
          </View>
        </View>
     
    );
};
export default InfoCard;