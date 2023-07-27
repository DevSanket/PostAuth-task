import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../components/backButton';


interface IProp{
    body:string;
    userId:number;
    id:number;
    title:string;
} 
export default function Post_Details({navigation,route} : any) {
    const {userId,id,title,body} = route.params.item;
  return (
    <View style={styles.container}>
        <BackButton navigation={navigation} />
      <View style={styles.card}>
      <Text style={{fontWeight:"bold"}}>id :-  </Text><Text>
      {id}
      </Text>
      <Text style={{fontWeight:"bold"}}>User ID :-  </Text><Text>
      {userId}
      </Text>
      <Text style={{fontWeight:"bold"}}>Title :-  </Text><Text>
      {title}
      </Text>
      <Text style={{fontWeight:"bold"}}>Body :- </Text>
      <Text>{body}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    card:{
        backgroundColor:"#fff",
        elevation:2,
        padding:10,
        gap:10,
        borderRadius:10,
        overflow:"hidden"
    },
    backButton : {
        backgroundColor:"#fff",
        borderRadius:50,
        padding:2,
        position:"absolute",
        top:10,
        left:10
    }
})