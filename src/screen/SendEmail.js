import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  visible,
  Image,
  Modal,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import BlueButton from "../component/BlueButton";
import color from "../theme/color";
import Box from "../component/Box";
import Header from "../component/Header";
import CustomCheckbox from "../component/CustomCheckbox";

// const ModelPoup = ({ visible, children }) => {

// const scaleValue = React.useRef(new Animated.Value(0)).current;
//   toggleModel();
// // },[visible]
//  React.useEffect(()=>{
//   );
{
  /*const toggleModel=()=>{
    // if(visible){
      setShowModel(true);
      Animated.spring(scaleValue,{
        toValue:1,
        duration:300,
        useNativeDriver:true,
      }).start();
    }
    else{

      setTimeout(() => setShowModel(false) ,200);
      Animated.timing(scaleValue,{
      toValue:0,
      duration:300,
      useNativeDriver:true,
    
    }).start();
  }
  };*/
}
//   return(

//    <Modal
//    transparent
//    visible={showModal}
//    animationType="fade"
//    onRequestClose={()=>setShowModal(false)}
//    >

//     <View style={styles.modalBackground}></View>
//     <Animated.View style={[styles.modalContainer ,{transform:[{scale: scaleValue}]}]}>{children}</Animated.View>
//   </Modal>
//   )
// };

export default function SendEmail() {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  //   const [Visible, setVisible] = React.useState(false);
  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor={color.blue} style="light" />
      <ScrollView>
        <Header />
        <View style={styles.Heading}>
          <Text style={styles.text}>Send Email To Dealer</Text>
        </View>
        <View style={{ marginTop: 10, paddingHorizontal: 15 }}>
          <Box label="First Name" star="*" placeholder="Enter  first Name" />
          <Box label="Last Name" star="*" placeholder="Enter Last Name" />
          <Box label="Email" star="*" placeholder="Enter email" />
          <Box label="Phone" placeholder="Enter phone number" />
          <Box
            label="Message"
            multiline={true}
            numberOfLines={7}
            textAlignVertical={"top"}
            placeholder="Enter messages"
          />
        </View>
        <View style={styles.footer}>
          <View
            style={{ flexDirection: "row", marginLeft: 15, paddingBottom: 10 }}
          >
            <View style={{ flex: 0.7 }}>
              <CustomCheckbox
                valueCheck={isChecked}
                functionCheck={setIsChecked}
              />
            </View>
            <View style={{ flex: 6 }}>
              <Text>Subscribe to Newsletter</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Modal
              transparent
              visible={showModal}
              animationType="fade"
              onRequestClose={() => setShowModal(false)}
            >
              <View style={styles.modalContainer}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={styles.header}>
                    <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                      <Image
                        source={require("../Images/modelcross.png")}
                        style={{ width: 30, height: 30 }}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{ alignItems: "center" }}>
                    <Image
                      source={require("../Images/modeltick.png")}
                      style={{ width: 150, height: 150, marginVertical: 10 }}
                    />
                  </View>
                  <Text
                    style={{
                      marginVertical: 30,
                      fontSize: 20,
                      textAlign: "center",
                    }}
                  >
                    Your message was sent
                  </Text>
                </View>
              </View>
            </Modal>

            <Button title="SEND" onPress={() => setShowModal(!showModal)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Heading: {
    backgroundColor: color.orange,
    padding: 10,
  },
  text: {
    color: "white",
  },
  innerView: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  parent: {},
  outerView: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  footer: {
    paddingTop: 10,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  modalBackground: {
    flex:1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems:'center',
  },
  modalContainer: {
    
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    alignSelf: "center",
    borderRadius: 20,
    elevation: 20,
    

  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
