import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import CustomButton from '../button';


interface Post_Props{
    body:string;
    userId:number;
    id:number;
    title:string;
}

interface IProps {
   item: Post_Props;
    navigation : NavigationProp<ParamListBase>;
}

export default function Card({item,navigation}:IProps) {
  return (
    <View style={styles.card}>
    
     <Text style={{fontWeight:"bold"}}>Title :-  </Text><Text>
      {item.title}
      </Text>
      <Text style={{fontWeight:"bold"}}>Body :- </Text>
      <Text>{item.body}</Text>
      <CustomButton title='See Details' onPress={() => {
        navigation.navigate('PostDetails', {item});
      }} /> 
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#fff",
        elevation:2,
        padding:10,
        gap:10,
        borderRadius:10,
        overflow:"hidden"
    },
    textContainer :{
        flexDirection:"row"
    }
})