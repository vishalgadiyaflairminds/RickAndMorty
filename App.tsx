/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './Services/graphQL/apolloClient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import Characters from './Screens/Characters';

const Stack = createStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  

  

  return (
    <ApolloProvider client={client as any}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Characters" component={Characters} options={{
         headerStyle: {
          backgroundColor: '#4B43B2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#FFFFFF'
        },
      }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   height: '100%'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
