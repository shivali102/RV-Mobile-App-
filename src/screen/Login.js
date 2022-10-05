import { StatusBar } from 'expo-status-bar';
import react from 'react'
import {View,Text, TouchableOpacity,StyleSheet, ScrollView} from 'react-native'
const Login=()=>
{   return(
    <View>
        <StatusBar backgroundColor='#0058AB'/>
        <ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <View>
            <TouchableOpacity style={styles.button1}>
                <Text>user</Text>
            </TouchableOpacity>

        </View>
        <View>
            <TouchableOpacity style={styles.button1}>
                <Text>user</Text>
            </TouchableOpacity>

        </View>

        
        </View>
        </ScrollView>
    </View>
);
}
const styles =StyleSheet.create({

    button1:{
        marginTop:30,
        borderWidth:1,
        width:90

    }
 
}
);
export default Login;