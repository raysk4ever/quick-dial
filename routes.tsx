/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './pages'
import { Alert, Button } from 'react-native'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Quick Dial',
          headerRight: () => (
            <Button
              onPress={() => Alert.alert('This is a button!')}
              title="+ Dial"
            />
          ),
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
