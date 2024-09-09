import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const ScheduleScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#0066cc', '#0099ff']} style={styles.header}>
        <Text style={styles.headerText}>Weekly Schedule</Text>
      </LinearGradient>

      <View style={styles.scheduleContainer}>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
          <View key={index} style={styles.daySchedule}>
            <Text style={styles.dayText}>{day}</Text>
            <View style={styles.courseSchedule}>
              <Text style={styles.scheduleTime}>10:00 AM - 11:30 AM</Text>
              <Text style={styles.scheduleCourse}>Advanced React Native</Text>
            </View>
            <View style={styles.courseSchedule}>
              <Text style={styles.scheduleTime}>2:00 PM - 3:30 PM</Text>
              <Text style={styles.scheduleCourse}>Machine Learning Basics</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ScheduleScreen;