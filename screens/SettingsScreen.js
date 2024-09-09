import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Preferences</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Push Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Email Updates</Text>
          <Switch
            value={emailUpdates}
            onValueChange={setEmailUpdates}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account</Text>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="person-outline" size={24} color="#007AFF" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="lock-closed-outline" size={24} color="#007AFF" />
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
          <Text style={[styles.buttonText, { color: '#FF3B30' }]}>Log Out</Text>
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
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 10,
  },
});

export default SettingsScreen;