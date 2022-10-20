import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../theme/color';

export default function ItemPrice({launchYear,model,price}) {
  return (
    <View style={styles.parent}>
      <View style={styles.label}>
        <TouchableOpacity>
          <Text style={styles.labelText}>200 KM</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.detail}>
          <Text>{launchYear}</Text>
          <Text style={styles.model}>{model}</Text>
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          <Text style={styles.priceText}>PRICE:</Text>
          <Text style={styles.amount}>{price}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "#F2F6FB",
  },
  model: {
    fontWeight: "bold",
  },
  detail: {
    flexWrap: "wrap",
    paddingBottom: 15,
    paddingTop: 10,
  },
  parent: {
    backgroundColor: "#F2F6FB",
    marginTop: 10,
  },
  label: {
    backgroundColor: color.orange,
    width: "15%",

    alignItems: "center",
    justifyContent: "center",
  },
  labelText: {
    fontSize: 13,
    color: "white",
  },
  priceText:{
    fontWeight:'bold',
    color:color.orange,
    fontSize:15,
  },
  amount:{
    fontWeight:"bold",
  }
});