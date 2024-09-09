import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const GradeStudentsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#0066cc', '#0099ff']} style={styles.header}>
        <Text style={styles.headerText}>Grade Students</Text>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Course</Text>
        <TouchableOpacity style={styles.courseItem}>
          <Text style={styles.courseName}>Advanced React Native</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.courseItem}>
          <Text style={styles.courseName}>Machine Learning Basics</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Student List</Text>
        <View style={styles.studentItem}>
          <Text style={styles.studentName}>John Doe</Text>
          <TextInput style={styles.gradeInput} placeholder="Grade" keyboardType="numeric" />
        </View>
        <View style={styles.studentItem}>
          <Text style={styles.studentName}>Jane Smith</Text>
          <TextInput style={styles.gradeInput} placeholder="Grade" keyboardType="numeric" />
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Grades</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GradeStudentsScreen;