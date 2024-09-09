import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ExploreScreen = () => {
  const courses = [
    { name: "Advanced React Native", conductor: "Sarah Johnson", date: "Oct 15, 2024", time: "10:00 AM - 2:00 PM" },
    { name: "Machine Learning Basics", conductor: "Dr. Alex Chen", date: "Oct 20, 2024", time: "9:00 AM - 1:00 PM" },
    { name: "UI/UX Design Principles", conductor: "Emily Wright", date: "Oct 25, 2024", time: "11:00 AM - 3:00 PM" },
    { name: "Blockchain Fundamentals", conductor: "Michael Lee", date: "Nov 1, 2024", time: "2:00 PM - 6:00 PM" },
    { name: "Data Science with Python", conductor: "Dr. Lisa Rodriguez", date: "Nov 5, 2024", time: "1:00 PM - 5:00 PM" },
  ];

  const handleRegister = (courseName) => {
    // Implement registration logic here
    console.log(`Registering for ${courseName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Courses</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {courses.map((course, index) => (
          <LinearGradient
            key={index}
            colors={['#e6f2ff', '#b3d9ff', '#80bfff']}
            style={styles.card}
          >
            <View style={styles.cardContent}>
              <View style={styles.courseInfo}>
                <Text style={styles.courseName}>{course.name}</Text>
                <Text style={styles.courseDetail}>Conducted by: {course.conductor}</Text>
                <Text style={styles.courseDetail}>Date: {course.date}</Text>
                <Text style={styles.courseDetail}>Time: {course.time}</Text>
              </View>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => handleRegister(course.name)}
              >
                <Ionicons name="add-circle" size={36} color="#0066cc" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0066cc',
  },
  scrollView: {
    paddingBottom: 20,
  },
  card: {
    width: width - 40,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 10,
  },
  courseDetail: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  registerButton: {
    marginLeft: 10,
  },
});

export default ExploreScreen;