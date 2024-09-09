import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import HomeScreen from './screens/HomeScreen';
import ChatbotScreen from './screens/ChatbotScreen';
import AddCoursesScreen from './FacultyScreens/AddCoursesScreen';
import FacultyHomeScreen from './FacultyScreens/FacultyHomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';
import GradeStudentsScreen from './FacultyScreens/GradeStudentsScreen';
import ScheduleScreen from './FacultyScreens/ScheduleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChatbotScreen" component={ChatbotScreen} />
        <Stack.Screen name="AddCoursesScreen" component={AddCoursesScreen} />
        <Stack.Screen name="FacultyHomeScreen" component={FacultyHomeScreen} />
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="GradeStudentsScreen" component={GradeStudentsScreen} />
        <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}