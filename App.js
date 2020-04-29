import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SingleMealScreen from '../Navigation/src/screens/SingleMealScreen';
// // HomeScreen = OrderScreen
// // SettingsScreen = ProfileScreen
// // DetailsScreen = OrdersScreen


// Home/ Order menu
function HomeScreen({ navigation }) {
  const meals = [
    { id: '1', title: 'Pancakes and Eggs' },
    { id: '2', title: 'Biscuits and Gravy' },
  ];

  return (
    <FlatList
      data={meals}
      renderItem={itemData => {
        return (
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                props.navigation.navigate('Single Meal', {
                  mealId: itemData.item.id,
                });
              }}>
              <Text style={styles.title}>{itemData.item.title}</Text>
              <Button
        title="You are @ Home Screen: Go to Single Meal"
        onPress={() => navigation.navigate('Orders')} // TODO: change Orders to Single Meal & handle it (add to stacks)
      />
            </TouchableOpacity>
            {/* <Text>Home - Order </Text> */}
   
          </View>
        );
      }}
    />
  );
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home - Order </Text>
    //   <Button
    //     title="You are @ Home Screen: Go to Single Meal"
    //     onPress={() => navigation.navigate('Orders')}
    //   />
    // </View>

}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    margin: 10,
    padding: 20,
  },
  title: {
    color: '#eee',
  },
});

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








// View All Orders that you ordered
// TODO:  maybe duplicate & change this below to Single Order 
function OrdersScreen({ navigation }) {
  // const meal = navigation.route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <Text>You ordered Pancakes & Eggs!</Text> 
            {/* <Text>{meal.title}</Text> */}

      {/* TODO: here is Single card when user clicks on card stack to show food list that was clicked */}
        
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








// User Profile
function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      {/* <Button
        title="You are @ Profile: Go to Single Meal"
        onPress={() => navigation.navigate('Orders')}
      /> */}
    </View>
  );
}
const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Orders" component={OrdersScreen} />
      {/* <ProfileStack.Screen name="Home" component={HomeScreen} /> */}
    </ProfileStack.Navigator>
  );
}







const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Orders" component={OrdersStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        {/* <Tab.Screen name="Single" component={SingleStackScreen} /> */}

      </Tab.Navigator>
    </NavigationContainer>
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
//       <SingleStack.Screen name="Home" component={HomeScreen} />
//       <SingleStack.Screen name="Orders" component={OrdersScreen} />
//       {/* <SingleStack.Screen name="Single" component={SingleScreen} /> */}
//     </SingleStack.Navigator>
//   );
// }

export default App;