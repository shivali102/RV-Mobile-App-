import { View, Text } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox'
import color from '../theme/color'


export default function CustomCheckbox({valueCheck,functionCheck}) {
  return (
    <View>
      <Checkbox
      value={valueCheck}
      onValueChange={functionCheck}
      color={valueCheck?color.theme:undefined}
      />
    </View>
  )
}