import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {RestaurantList} from './src/components/restaurant-list';
import {RestaurantInfo} from './src/components/restaurant-info';
import {About} from './src/components/about';
import {AddReview} from './src/components/add-review';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#de5c00',
        headerStyle: {
          backgroundColor: '#fff08c',
        },
        headerShown: false,
        headerTitleStyle: {
          color: 'black',
          fontSize: 22,
        },
      }}>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={RestaurantList}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="Info"
          component={RestaurantInfo}
          options={{
            title: 'Info',
            headerShown: true,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="AddReview"
          component={AddReview}
          options={{
            title: 'AddReview',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#fff08c',
          tabBarActiveTintColor: 'black',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={App}
          options={{
            tabBarIcon: () => <Icon name="home" color="black" size={30} />,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: () => <Icon name="info-circle" size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
