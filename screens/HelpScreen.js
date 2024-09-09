import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpScreen = () => {
  const helpTopics = [
    { title: 'Getting Started', icon: 'flag-outline' },
    { title: 'Account Management', icon: 'person-outline' },
    { title: 'Course Navigation', icon: 'compass-outline' },
    { title: 'Technical Support', icon: 'construct-outline' },
    { title: 'Billing and Payments', icon: 'card-outline' },
    { title: 'Privacy and Security', icon: 'shield-checkmark-outline' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Help & Support</Text>
      
      {helpTopics.map((topic, index) => (
        <TouchableOpacity key={index} style={styles.topicItem}>
          <Ionicons name={topic.icon} size={24} color="#007AFF" />
          <Text style={styles.topicText}>{topic.title}</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="#999" />
        </TouchableOpacity>
      ))}

      <View style={styles.contactSection}>
        <Text style={styles.contactHeader}>Can't find what you're looking for?</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Ionicons name="mail-outline" size={24} color="white" />
          <Text style={styles.contactButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  topicText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  contactSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  contactButton: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HelpScreen;