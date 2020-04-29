  
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleMealScreen = props => {
  console.log(props.route);
  // Grab the mealId and find that meal based on it's id in our data array

  return (
    <View style={styles.container}>
      <Text>This is my Single Meal Screen!</Text>
    </View>
  );
};

export default SingleMealScreen