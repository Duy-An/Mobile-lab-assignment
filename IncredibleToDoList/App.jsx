import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; // Assuming ToDoList.jsx is in the same directory
import ToDoForm from './ToDoForm'; // Assuming ToDoForm.jsx is in the same directory

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

// The styles may need to be adjusted accordingly if they are used in the child components.
const styles = StyleSheet.create({
  // ... styles that are used within App component itself
});

export default App;
