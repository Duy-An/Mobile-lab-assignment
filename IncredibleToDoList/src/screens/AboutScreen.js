import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { View, Text } from 'react-native';

function AboutScreen() {
    const appName = 'My ToDo App';
    const developerName = 'Your Name';
    const currentDate = new Date().toLocaleDateString();

    return (
        <MainLayout>
        <View>
            <Text>{appName}</Text>
            <Text>Developed by: {developerName}</Text>
            <Text>Date: {currentDate}</Text>
        </View>
        </MainLayout>
    );
}

export default AboutScreen;
