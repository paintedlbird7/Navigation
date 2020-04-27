import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// HomeScreen = OrderScreen
// SettingsScreen = ProfileScreen
// ______Screen = OrdersScreen


function OrderScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Order!</Text>
      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      /> */}
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Button title="Go to Order" onPress={() => navigation.navigate('Order')} />
    </View>
  );
}

function OrdersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Orders!</Text>
      <Button title="Go to Order" onPress={() => navigation.navigate('Order')} />
    </View>
  );
}


const OrderStack = createStackNavigator();

function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Order" component={OrderScreen} />
      <OrderStack.Screen name="Orders" component={OrderScreen} />
      <OrderStack.Screen name="Profile" component={OrderScreen} />
    </OrderStack.Navigator>
  );
}

const OrdersStack = createStackNavigator();

function OrdersStackScreen() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Order" component={OrdersScreen} />
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen name="Profile" component={OrdersScreen} />
    </OrdersStack.Navigator>
  );
}


const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Order" component={ProfileScreen} />
      <ProfileStack.Screen name="Orders" component={ProfileScreen} />
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Order" component={OrderStackScreen} />
        <Tab.Screen name="Orders" component={OrdersStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />      
      </Tab.Navigator>
    </NavigationContainer>
  );
}
