import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const studentInfo = {
    name: "Jane Doe",
    id: "ST12345",
    major: "Computer Science",
    gpa: "3.8",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
  };

  const enrolledCourses = [
    { name: "Advanced React Native", progress: 60 },
    { name: "Machine Learning Basics", progress: 30 },
    { name: "UI/UX Design Principles", progress: 80 },
  ];

  const renderProgressBar = (progress) => (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#0066cc', '#0099ff']}
        style={styles.header}
      >
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{studentInfo.name}</Text>
        <Text style={styles.id}>Student ID: {studentInfo.id}</Text>
      </LinearGradient>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Ionicons name="school" size={24} color="#0066cc" />
          <Text style={styles.infoText}>{studentInfo.major}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="star" size={24} color="#0066cc" />
          <Text style={styles.infoText}>GPA: {studentInfo.gpa}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail" size={24} color="#0066cc" />
          <Text style={styles.infoText}>{studentInfo.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="call" size={24} color="#0066cc" />
          <Text style={styles.infoText}>{studentInfo.phone}</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Enrolled Courses</Text>
        {enrolledCourses.map((course, index) => (
          <LinearGradient
            key={index}
            colors={['#e6f2ff', '#b3d9ff', '#80bfff']}
            style={styles.courseCard}
          >
            <Text style={styles.courseName}>{course.name}</Text>
            {renderProgressBar(course.progress)}
            <Text style={styles.progressText}>{course.progress}% Complete</Text>
          </LinearGradient>
        ))}
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="create" size={24} color="#ffffff" />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  header: {
    alignItems: 'center',
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  id: {
    fontSize: 16,
    color: '#e6f2ff',
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  sectionContainer: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 15,
  },
  courseCard: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    marginBottom: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0066cc',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066cc',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ProfileScreen;