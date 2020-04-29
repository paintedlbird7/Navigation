// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // User Profile
// function ProfileScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Profile Screen</Text>
//         {/* <Button
//           title="You are @ Profile: Go to Single Meal"
//           onPress={() => navigation.navigate('Orders')}
//         /> */}
//       </View>
//     );
//   }
//   const ProfileStack = createStackNavigator();
  
//   function ProfileStackScreen() {
//     return (
//       <ProfileStack.Navigator>
//         <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//         <ProfileStack.Screen name="Orders" component={OrdersScreen} />
//         {/* <ProfileStack.Screen name="Home" component={HomeScreen} /> */}
//       </ProfileStack.Navigator>
//     );
//   }
  
//   export default ProfileScreen;