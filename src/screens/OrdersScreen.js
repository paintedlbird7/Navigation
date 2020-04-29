import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// View All Orders that you ordered
function OrdersScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>View Orders!</Text>
          {/* <Button
          title="You are @ Orders Screen: Go to Single Meal"
          onPress={() => navigation.navigate('Orders')}
        />       */}
      </View>
    );
  }
  const OrdersStack = createStackNavigator();
  
  function OrdersStackScreen() {
    return (
      <OrdersStack.Navigator>
        <OrdersStack.Screen name="Orders" component={OrdersScreen} />
        <OrdersStack.Screen name="Home" component={HomeScreen} />
        {/* <OrderStack.Screen name="Single" component={SingleScreen} /> */}
      </OrdersStack.Navigator>
    );
  }
  
  export default OrdersScreen;