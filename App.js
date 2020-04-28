import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// // HomeScreen = OrderScreen
// // SettingsScreen = ProfileScreen
// // DetailsScreen = OrdersScreen

// View Orders that you ordered
function OrdersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>View Orders!</Text>
        <Button
        title="You are @ Orders Screen: Go to Single Meal"
        onPress={() => navigation.navigate('Orders')}
      />
    </View>
  );
}






// Home/ Order menu
function OrderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Order </Text>
      <Button
        title="You are @ Orders Screen: Go to Single Meal"
        onPress={() => navigation.navigate('Orders')}
      />
    </View>
  );
}







// User Profile
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="You are @ Profile: Go to Single Meal"
        onPress={() => navigation.navigate('Orders')}
      />
    </View>
  );
}




// function SingleScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Single Meal Screen</Text>
//       <Button
//         title="You are @ Single: Go to Single Meal"
//         onPress={() => navigation.navigate('Orders')}
//       />
//     </View>
//   );
// }

// const SingleStack = createStackNavigator();

// function SingleStackScreen() {
//   return (
//     <SingleStack.Navigator>
//       <SingleStack.Screen name="Order" component={OrderScreen} />
//       <SingleStack.Screen name="Orders" component={OrdersScreen} />
//       {/* <OrderStack.Screen name="Single" component={SingleScreen} /> */}
//     </SingleStack.Navigator>
//   );
// }







const OrderStack = createStackNavigator();

function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Order" component={OrderScreen} />
      <OrderStack.Screen name="Orders" component={OrdersScreen} />
      {/* <OrderStack.Screen name="Single" component={SingleScreen} /> */}
    </OrderStack.Navigator>
  );
}





const OrdersStack = createStackNavigator();

function OrdersStackScreen() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Order" component={OrderScreen} />
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      {/* <OrderStack.Screen name="Single" component={SingleScreen} /> */}
    </OrdersStack.Navigator>
  );
}





const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Orders" component={OrdersScreen} />
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
        {/* <Tab.Screen name="Single" component={SingleStackScreen} /> */}

      </Tab.Navigator>
    </NavigationContainer>
  );
}