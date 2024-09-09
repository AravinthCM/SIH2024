import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const FacultyHomeScreen = ({ navigation }) => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { weekday: 'short' })}, ${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getFullYear()}`;

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#0066cc', '#0099ff']} style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Welcome, Dr. Smith</Text>
            <Text style={styles.dateText}>{formattedDate}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ScheduleScreen')}>
            <Image source={{ uri: 'https://via.placeholder.com/60' }} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AddCoursesScreen')}>
          <Ionicons name="add-circle" size={24} color="#0066cc" />
          <Text style={styles.actionButtonText}>Add Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('GradeStudentsScreen')}>
          <Ionicons name="create" size={24} color="#0066cc" />
          <Text style={styles.actionButtonText}>Grade Students</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Courses</Text>
        <TouchableOpacity style={styles.courseItem}>
          <Text style={styles.courseName}>Advanced React Native</Text>
          <Text style={styles.courseDetails}>Mon, Wed 10:00 AM - 11:30 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.courseItem}>
          <Text style={styles.courseName}>Machine Learning Basics</Text>
          <Text style={styles.courseDetails}>Tue, Thu 2:00 PM - 3:30 PM</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <View style={styles.eventItem}>
          <Ionicons name="calendar" size={24} color="#0066cc" />
          <View style={styles.eventDetails}>
            <Text style={styles.eventName}>Department Meeting</Text>
            <Text style={styles.eventTime}>Tomorrow, 9:00 AM</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FacultyHomeScreen;