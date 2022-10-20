import { useLinkProps } from "@react-navigation/native";
import react from "react"
import {View,Text,Image} from "react-native"
const InfoCard=(props)=>{

    return (
    
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 0,
            width: "40%",
          
            marginHorizontal:15,
            marginBottom:10,
            borderRadius: 5,
            padding:10,
            backgroundColor: "#e6e6fa",
          }}
        >
          <View style={{ alignItems: "center" ,paddingTop:10}}>
            <Image style={{ height: 50, width: 50 }} source={props.imgSrc} />
          </View>
          <View style={{ alignSelf: "center",marginTop:8 }}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", color: "#0058AB" }}
            >
              {props.number}
            </Text>
          </View>
          <View style={{ alignSelf: "center",marginTop:8 }}>
            <Text style={{fontSize:10,paddingBottom:10}}>{props.text}</Text>
          </View>
        </View>
      
    );
};
export default InfoCard;