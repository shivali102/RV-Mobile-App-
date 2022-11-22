import { View, Text, StatusBar ,StyleSheet} from 'react-native'
import React from 'react'
import color from '../theme/color';
import Header from '../component/Header';
import PageSubHeading from '../component/PageSubHeading';
export default function SellRvdetailpage() {
  return (
    <View>
      <StatusBar backgroundColor={color.blue}/>
      <Header/>
      <PageSubHeading
        heading="DETAIL"
        Subheading="New Listings"
        />
    </View>
  )
}