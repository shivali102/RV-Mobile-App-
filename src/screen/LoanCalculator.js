import { View, Text, StatusBar,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import color from '../theme/color'
import Box from '../component/Box'
import OrangeHeading from '../component/OrangeHeading'
import BlueButton from '../component/BlueButton'
export default function LoanCalculator() {
  return (
    <View style={styles.parent}>
        <ScrollView>        
        <StatusBar backgroundColor={color.blue}/>
        <Header/>
        <OrangeHeading
        headingText="Loan Calcutor"/>
        <View style={styles.BoxView}>
        <Box label="Interest Rate"  placeholder="Enter  first Name" />
        <Box label="Loan Term(Year)"  placeholder="Enter  first Name" />
        <Box label="Loan Amount"  placeholder="Enter  first Name" />
        <Box label="Down Payment"  placeholder="Enter  first Name" />

        </View>
        <View style={styles.button}>
        <BlueButton 
        buttonName="CALCULATE"/>
            </View>
        <View style={styles.OuterView}>
            <Text style={styles.text}>MONTHLY PAYMENTS</Text>
            <View style={styles.PaymentView}>
                <View>
                <Text style={styles.Estpayment}>Est. Payment:</Text>
            </View>
            <View>
                <Text style={styles.amount}>$0.0</Text>
            </View>
            </View>
        </View>
        </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    BoxView:{
        marginTop: 20,
        paddingHorizontal: 15,
    
    },
    button:{
        paddingTop:30,
       paddingHorizontal:15,
    },
    parent:{
        backgroundColor:"E8E8E8",
    },
    OuterView:{
        backgroundColor:color.blue,
        marginTop:20,
        paddingVertical:30,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        marginLeft:10,
        paddingBottom:10,
    },
    PaymentView:{
        backgroundColor:'#B26E34',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        paddingVertical:10,
        paddingHorizontal:10,
        

    },
    Estpayment:{
        color:color.white,

    },
    amount:{
        color:color.white,
    }
})