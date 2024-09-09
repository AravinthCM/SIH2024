import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { weekday: 'short' })}, ${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getFullYear()}`;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e6f2ff" />
      <LinearGradient
        colors={['#b3d9ff', '#e6f2ff']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.addButton}>
            <Ionicons name="add" size={24} color="#0066cc" />
          </TouchableOpacity>
        </View>
        <Text style={styles.greeting}>Hi, Username</Text>
        
        <View style={styles.noCoursesContainer}>
          <Image
            source={require('../assets/Empty.png')}
            style={styles.noCoursesImage}
          />
          <Text style={styles.noCoursesText}>No Courses Available</Text>
          <TouchableOpacity 
            style={styles.exploreButton}
            onPress={() => navigation.navigate('ExploreScreen')}
          >
            <Text style={styles.exploreButtonText}>Explore Courses</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#0066cc" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ExploreScreen')}>
          <Ionicons name="search" size={24} color="#0066cc" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings" size={24} color="#0066cc" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ProfileScreen')}>
          <Ionicons name="person" size={24} color="#0066cc" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.floatingButton} 
        onPress={() => navigation.navigate('ChatbotScreen')}
      >
        <Ionicons name="chatbubbles" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3d9ff',
  },
  gradient: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  dateText: {
    fontSize: 16,
    color: '#0066cc',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 20,
    color: '#0066cc',
  },
  noCoursesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  noCoursesImage: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  noCoursesText: {
    fontSize: 20,
    color: '#0066cc',
    marginBottom: 20,
  },
  exploreButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#b3d9ff',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#0066cc',
    marginTop: 4,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0066cc',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default HomeScreen;