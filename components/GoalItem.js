import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text style={{fontSize:15}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 6,
    marginTop:10 ,
    backgroundColor: 'gainsboro',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;
