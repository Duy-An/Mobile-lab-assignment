"use client";

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  const addTask = (taskText) => {
    setTasks(prevTasks => [...prevTasks, taskText]);
  };
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;

