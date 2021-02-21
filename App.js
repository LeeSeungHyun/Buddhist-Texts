import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Texts from './screen/Texts';
import Explanation from './screen/Explanation';
import Detail from './screen/Detail';
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})
const ExplanationStack = createStackNavigator();

function ExplanationStackScreen() {
  return (
    <ExplanationStack.Navigator>
      <ExplanationStack.Screen name="해설" component={Explanation} />
      <ExplanationStack.Screen name="해석" component={Detail} />
    </ExplanationStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  if(fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#aaa"
        >
          <Tab.Screen 
            name="text" 
            component={Texts} 
            options={{
              tabBarLabel: '본문',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
            name="explanation" 
            component={ExplanationStackScreen} 
            options={{
              tabBarLabel: '해설',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
            )}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}