import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };


  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Notunuzu Yazın"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View  style={styles.buttonStyles}>
          <View style={styles.buttonSize} >
            <Button title = "ÇIKIŞ" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.buttonSize} >
            <Button title="EKLE" onPress={addGoalHandler} />
          </View>
        </View>  
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'red',
    borderWidth: 3,
    padding: 10,
    marginBottom:10
  },
  buttonStyles:{
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width:'80%'
  },
  buttonSize:{
    width:120,

  }
});

export default GoalInput;
