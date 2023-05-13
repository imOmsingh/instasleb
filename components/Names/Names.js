import {Animated, View, Text, Image, TouchableOpacity } from 'react-native'
import {
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
import React, { useEffect, useRef, useState } from 'react'

export default function Names({navigation}) {
    const insets = useSafeAreaInsets();
    const fadeAnim = useRef(new Animated.Value(200)).current;
    const fadeAnim2 = useRef(new Animated.Value(200)).current;
    const [time, setTime] = useState(0)

    const [user, setUser] = useState(0)

    useEffect(() => {
        if(user == 2){
            navigation.navigate('Count');
        }
        if(user == 0){
            Animated.timing(fadeAnim, {
                // fromValue:200,
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }).start();
        }
        

        if(user == 1){
            
            Animated.timing(fadeAnim2, {
                // fromValue:200,
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }).start();
        }
        

      }, [fadeAnim,user]);

      const runFunction = () =>{
        Animated.timing(fadeAnim, {
            // fromValue:200,
          toValue: -400,
          duration: 500,
          useNativeDriver: true,
        }).start();


        const myTimeout = setTimeout(runTimer2, 1000);

      }

      function runTimer2() {
        setUser(user+1)
    }


    useEffect(() => {

        if(time === 20){
            navigation.navigate('Count');
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
        <View style={{flex:.5,width:'100%',alignItems:'center',justifyContent:'flex-end'}}>
            {user === 0 &&<Animated.View style={{marginBottom:10,width:'100%',flexDirection:'row',justifyContent:'center',transform: [{translateX: fadeAnim}]}}>
                <Image source={require('./avtar2.png')} style={{width:80,height:80,borderRadius:100,marginRight:50}}/>
                <View style={{justifyContent:'space-around',alignItems:'center'}}>
                    <Text style={{fontSize:30,color:'yellow'}}>D-Lister</Text>
                    <Text style={{fontSize:18,color:'white'}}>Sally</Text>
                </View>
            </Animated.View>}
            {user === 1 &&<Animated.View style={{marginBottom:10,width:'100%',flexDirection:'row',justifyContent:'center',transform: [{translateX: fadeAnim2}]}}>
                <Image source={require('./avtar2.png')} style={{width:80,height:80,borderRadius:100,marginRight:50}}/>
                <View style={{justifyContent:'space-around',alignItems:'center'}}>
                    <Text style={{fontSize:30,color:'yellow'}}>D-Lister</Text>
                    <Text style={{fontSize:18,color:'white'}}>Sally</Text>
                </View>
            </Animated.View>}
            <TouchableOpacity >
                <Text style={{fontSize:30,color:'yellow'}}>Gave you some love</Text>
                <View style={{alignItems:'center'}}>
                    <Text style={{position:'absolute',top:'40%',zIndex:2,fontSize:30,color:'yellow'}}>15000</Text>
                    <Image source={require('./main-heart.png')} style={{marginTop:10,height:150,width:150,resizeMode:'contain'}}/>
                </View>
                </TouchableOpacity>
        </View>

        <View style={{flex:.5,width:'100%',justifyContent:'center',alignItems:"center"}}>
            <TouchableOpacity onPress={runFunction} style={{zIndex:10,height:50,width:50,position:'absolute',top:'30%',left:'75%'}}>
                <Image source={require('./arrow.png')} style={{resizeMode:'contain',height:50,width:50}}/>
            </TouchableOpacity>
            <Image source={require('./girlClap.png')} style={{height:"80%",width:'100%',resizeMode:'contain',marginBottom:'10%',zIndex:2}}/>
            <Image source={require('./awardPlatform.png')} style={{position:'absolute',bottom:0,height:"20%",width:'100%',resizeMode:'cover'}}/>
        </View>

    </View>
  )
}