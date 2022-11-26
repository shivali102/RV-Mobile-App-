import { View, StatusBar,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import color from '../theme/color'
import Header from '../component/Header'
import OrangeHeading from '../component/OrangeHeading'
export default function PaymentMethod() {
  return (
    <View>
      
      <SafeAreaView>
        <StatusBar backgroundColor={color.blue} />
        <Header />
        <OrangeHeading headingText="Saved Payment Method" />
    
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({

});