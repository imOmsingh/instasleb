import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import Names from './components/Names/Names';
import Count from './components/Count/Count';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Home',headerShown:false}}
                  />
          <Stack.Screen
                    name="Names"
                    component={Names}
                    options={{title: 'Home',headerShown:false}}
                  />
          <Stack.Screen
                    name="Count"
                    component={Count}
                    options={{title: 'Home',headerShown:false}}
                  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
