import { View, Text, Image } from 'react-native'
import {
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react'

export default function Home({navigation}) {
    const insets = useSafeAreaInsets();

    const [time, setTime] = useState(0)

    useEffect(() => {

        if(time === 3){
            navigation.navigate('Names');
        }
        const myTimeout = setTimeout(runTimer, 1000);

    }, [time])

    function runTimer() {
        setTime(time+1)
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
        <View style={{flex:.4,width:'100%',alignItems:'center',paddingTop:100}}>
            <View style={{height:100,width:100}}>
                <Text style={{position:'absolute',top:55,left:25,zIndex:2,transform: [{rotateZ: '-15deg'}],color:'white',fontSize:15}}>04:52:59</Text>
            <Image source={require('./castingLogo.png')} style={{height:100,width:100,resizeMode:'contain'}}/>
            </View>
            <Text style={{fontSize:25,color:'pink',marginTop:10,transform: [{rotateZ: '-8deg'}]}}>Casting call</Text>
            <Text style={{fontSize:25,color:'yellow',marginTop:50}}>The Results are in</Text>
        </View>

        <View style={{flex:.6,width:'100%',justifyContent:'center',alignItems:"center"}}>
            <Image source={require('./girlClap.png')} style={{height:"80%",width:'100%',resizeMode:'contain',marginBottom:'10%',zIndex:2}}/>
            <Image source={require('./awardPlatform.png')} style={{position:'absolute',bottom:0,height:"20%",width:'100%',resizeMode:'cover'}}/>
        </View>

    </View>
  )
}