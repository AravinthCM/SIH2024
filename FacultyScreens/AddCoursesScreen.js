import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const AddCoursesScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#0066cc', '#0099ff']} style={styles.header}>
        <Text style={styles.headerText}>Add New Course</Text>
      </LinearGradient>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Course Name</Text>
          <TextInput style={styles.input} placeholder="Enter course name" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Course Code</Text>
          <TextInput style={styles.input} placeholder="Enter course code" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={[styles.input, styles.textArea]} multiline numberOfLines={4} placeholder="Enter course description" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Schedule</Text>
          <TextInput style={styles.input} placeholder="Enter course schedule" />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Course</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddCoursesScreen;