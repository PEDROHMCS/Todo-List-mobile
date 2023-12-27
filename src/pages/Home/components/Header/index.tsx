import { Text, View, Image } from "react-native";
import {styles} from './style'

export function Header(){
  return(
    <View style={styles.headerContainer}>
      <Image resizeMethod="resize" style={styles.logoStyle} source={require('../../assets/rocket.png')}  />
      <Text style={styles.titleStyle}>
        <Text style={styles.blue}>to</Text>
        <Text style={styles.purple}>do</Text>
      </Text>
    </View>
  )
}