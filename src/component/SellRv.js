import react from "react"
import {View,Text,Image, TouchableOpacity} from "react-native"
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const SellRv=()=>{
    return (
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 10,
          height: "15%",
          backgroundColor: "#e6e6fa",
        }}
      >
        <View style={{ alignItems: "center",marginTop:20 }}>
          <Text style={{ fontWeight: "bold", color: "#0058AB", fontSize: 20 }}>
            SELL YOUR RV
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 10 }}>
            Millions of buyers are looking for their next rv on their rv traders
            this month
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between",marginTop:20 }}>
          <View>
            <Image style={{}} source={require("../Images/tlrv.png")} />
          </View>
          <View style={{marginLeft:10,marginRight:10}}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 12,
                  height: 24,
                  width: 24,
                  backgroundColor: "#0058AB",
                  justifyContent: "center",
                }}
              >
                <View style={{alignSelf:'center'}}>
                  <FontAwesome name="thumbs-up" size={15} color="white" />
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>
                  Millions of buyers are looking for their next rv on their rv
                  traders this month
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 12,
                  height: 24,
                  width: 24,
                  backgroundColor: "#0058AB",
                  justifyContent: "center",
                }}
              >
                <View style={{ alignSelf: "center" }}>
                  <FontAwesome name="thumbs-up" size={15} color="white" />
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>
                  Millions of buyers are looking for their next rv on their rv
                  traders this month
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 12,
                  height: 24,
                  width: 24,
                  backgroundColor: "#0058AB",
                  justifyContent: "center",
                }}
              >
                <View style={{ alignSelf: "center" }}>
                  <FontAwesome name="thumbs-up" size={15} color="white" />
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>
                  Millions of buyers are looking for their next rv on their rv
                  traders this month
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 12,
                  height: 24,
                  width: 24,
                  backgroundColor: "#0058AB",
                  justifyContent: "center",
                }}
              >
                <View style={{ alignSelf: "center" }}>
                  <FontAwesome name="thumbs-up" size={15} color="white" />
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 12 }}>
                  Millions of buyers are looking for their next rv on their rv
                  traders this month
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",

            width: 120,
            backgroundColor: "#0058AB",
            borderRadius: 10,
            alignSelf: "center",
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginTop: 20,
            marginBottom:20,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white",fontWeight:'bold' }}>SELL NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
};
export default SellRv;