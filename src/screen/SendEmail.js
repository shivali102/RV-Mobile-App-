import { View, Text,StatusBar,StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from "react";
import color from '../theme/color';
import Header from '../component/Header';
import Box from '../component/Box';
import CustomCheckbox from "../component/CustomCheckbox";
import BlueButton from '../component/BlueButton';

import { Alert, Modal,   Pressable } from "react-native";

export default function SendEmail() {
    const [isChecked, setIsChecked] = useState(false);
   const [modalVisible, setModalVisible] = useState(false);
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
            <Pressable>
              <BlueButton
                buttonName="SEND"
                onPress={() => setModalVisible(true)}
              />
            </Pressable>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </View>
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
    marginTop: 22
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
