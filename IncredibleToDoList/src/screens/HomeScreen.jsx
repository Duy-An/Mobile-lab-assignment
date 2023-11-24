import MainLayout from '../layouts/MainLayout';
import React from "react";
import {View,Button} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    
    const HomeScreen = () => {
        return (
          <MainLayout>
           <View>
            <ToDoForm addTask={addTask} />
            <ToDoList tasks={tasks} />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </View>
          </MainLayout>
        );
      };

}
export default HomeScreen;