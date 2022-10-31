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
} from "react-native";
import React, { useState } from "react";
import color from "../theme/color";
import Header from "../component/Header";
import Box from "../component/Box";
import CustomCheckbox from "../component/CustomCheckbox";
import BlueButton from "../component/BlueButton";

import Modal from "react-native";
const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  return (
  <Modal transparent visible={true}>
    <View style={styles.modelBackground}></View>
    <View style={[styles.modelContainer]}>{children}</View>
  </Modal>
  );
};

export default function SendEmail() {
  const [isChecked, setIsChecked] = useState(false);
  const [Visible, setVisible] = React.useState(false);
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
          <View style={{  marginHorizontal: 10 }}>
            <ModalPoup visible={visible}>
              <View style={{alignItems:'center'}}>
                <View style={styles.header}>
                <Image source={require("../Images/modelcross.png")}/>

                </View>
              </View>
            </ModalPoup>
            <Button title="SEND" onPress={() => setVisible(true)} />
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

  modelBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modelContainer:{
    width:'80%',
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:30,
    borderRadius:20,
    elevation:20,
  }
});
