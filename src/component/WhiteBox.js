import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  
} from "react-native";
import React from "react";
import color from "../theme/color";
// import { RadioButton } from 'react-native-paper';
export default function WhiteBox({PlanName, PlanPhotoes,oldprice, originalprice }) {
  return (
    <View style={styles.parent}>
      <View>
      {/* <RadioButton
              
      />  */}
        <Text style={styles.PlanName}>{PlanName}</Text>
      </View>

      <View style={styles.PlanDescritionView}>
        <View style={styles.TouchableOpacityView}>
          <TouchableOpacity>
            <Text style={{ color: "white" }}>{PlanPhotoes}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PriceView}>
          <Text
            style={styles.OldPriceText}
          >
            {oldprice}
          </Text>
        </View>
        <View style={styles.OriginalPriceView}>

          <Text style={styles.NewPriceText}>{originalprice}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    borderWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  PlanName: {
    fontWeight: "bold",
    marginLeft: 10,
    paddingBottom: 5,
  },
  TouchableOpacityView: {
    backgroundColor: "#595A5A",
    width: 150,
    padding: 10,
    borderRadius: 5,
  },
  PlanDescritionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  PriceView:{
  marginRight: 10,
   justifyContent: "flex-end"
  },

  OldPriceText:{
  color: color.grey, textDecorationLine: "line-through"
},
NewPriceText:{
  color: color.green 
},
OriginalPriceView:{
justifyContent: "flex-end"
},
});
