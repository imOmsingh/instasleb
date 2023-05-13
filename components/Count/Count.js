import {Animated, View, Text, Image, TouchableOpacity } from 'react-native'
import {
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
import React, { useEffect, useRef, useState } from 'react'
import { Entypo } from '@expo/vector-icons';

export default function Count({navigation}) {
const insets = useSafeAreaInsets();

const [time, setTime] = useState(15)

useEffect(() => {
    if(time != 40){
        const myTimeout = setTimeout(runTimer, 30);
    }
}, [time])

function runTimer() {
    setTime(time+1)
}

const runFunction2 = () =>{
    navigation.navigate("Home")
}




  return (
    <View style={{
        flex:1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Image source={require('./award_bg.png')} style={{marginTop: insets.top,position:'absolute',top:0,height:'100%',width:'100%',resizeMode:'cover'}}/>
        <View style={{flex:.5,width:'100%',alignItems:'center',justifyContent:'flex-end'}}>
                <Text style={{fontSize:35,color:'yellow',textShadowOffset: { width: 2, height: 1 },textShadowRadius: 1}}>4 Friends Gave U</Text>
                <Text style={{fontSize:35,color:'yellow'}}>some love</Text>
                <View style={{alignItems:'center'}}>
                    <Text style={{position:'absolute',top:'40%',zIndex:2,fontSize:30,color:'yellow'}}>{time}000</Text>
                    <Image source={require('./main-heart.png')} style={{marginTop:10,height:150,width:150,resizeMode:'contain'}}/>
                </View>
        </View>

        <View style={{flex:.5,width:'100%',justifyContent:'center',alignItems:"center"}}>
        <View style={{zIndex:10,height:40,position:'absolute',top:'0%',left:'60%',backgroundColor:'white',borderRadius:10,paddingHorizontal:20,justifyContent:'center'}}>
                {/* <Image source={require('./arrow.png')} style={{resizeMode:'contain',height:50,width:50}}/> */}
                <Entypo name="triangle-down" size={40} style={{position:'absolute',bottom:-25}} color="white" />
                <Text style={{fontSize:20,color:'#ff99cc'}}>Congrats</Text>
            </View>
            <TouchableOpacity onPress={runFunction2} style={{zIndex:10,height:50,width:50,position:'absolute',top:'30%',left:'75%'}}>
                <Image source={require('./arrow.png')} style={{resizeMode:'contain',height:50,width:50}}/>
            </TouchableOpacity>

            <Image source={require('./girlClap.png')} style={{height:"80%",width:'100%',resizeMode:'contain',marginBottom:'10%',zIndex:2}}/>
            <Image source={require('./awardPlatform.png')} style={{position:'absolute',bottom:0,height:"20%",width:'100%',resizeMode:'cover'}}/>
        </View>

    </View>
  )
}