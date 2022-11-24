import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import color from '../theme/color'
import OrangeHeading from '../component/OrangeHeading'
import ResourceLoan  from '../component/ResourceLoan'
export default function Resource() {
  return (
    <View>
        <StatusBar backgroundColor={color.blue}/>       
         <ScrollView>

        
                 <Header/>
                 <OrangeHeading
                headingText="Resource"/>
                 <View style={{paddingTop:10}}>
                <ResourceLoan 
                 ResourceHeading="FINANCE YOU NEXT RV PURCHASE!"
                ButtonName="RV FINANCE"/>
                    <ResourceLoan 
                 ResourceHeading="MAKE SURE YOUR RV IS COVERED!"
                ButtonName="RV INSURANCE"/>
                    <ResourceLoan 
                 ResourceHeading="NEW 2019 RV MODELS FROM LEADING
                 MANUFACTURERS."
                ButtonName="NEW RV "/>
                    <ResourceLoan 
                 ResourceHeading="CHECK THE J.D. POWER VALUE OF YOUR RV."
                ButtonName="RV FINANCE"/>
                    </View>
  
        </ScrollView>

    </View>
  )
}