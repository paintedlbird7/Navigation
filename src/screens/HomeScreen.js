import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Home/ Ordering menu
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home - Order </Text>
      <Button
        title="You are @ Home Screen: Go to Single Meal"
        onPress={() => navigation.navigate('Orders')}
      />
    </View>
  );
}
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Orders" component={OrdersScreen} />
      {/* <HomeStack.Screen name="Single" component={SingleScreen} /> */}
    </HomeStack.Navigator>
  );
}

export default HomeScreen;