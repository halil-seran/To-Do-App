import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  ToastAndroid
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
    ToastAndroid.show('Silmek için üzerine tıkla',800);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });      
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);  //Modalı kapatıyor
    alert('Çıkış Yapıldı');
  };
  
  return (
    <View style={styles.screen}>
      <View>
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
           <GoalItem
             id={itemData.item.id}
             onDelete={removeGoalHandler}
             title={itemData.item.value}
           />
        )}
      />
      </View>
      <View style={{marginBottom:20}}>
        <Button title="Yeni Not Ekleyin" onPress={() => setIsAddMode(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex:1,
    justifyContent:'space-between'
  }
});
