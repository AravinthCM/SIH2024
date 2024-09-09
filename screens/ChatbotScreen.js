import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ChatbotScreen = () => {
  // Mocked chatbot messages for illustration
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage = { id: Date.now().toString(), text: inputText, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = { id: (Date.now() + 1).toString(), text: 'Thank you for your message. How else can I help you?', sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageBubble, item.sender === 'user' ? styles.userBubble : styles.botBubble]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <LinearGradient colors={['#e6f2ff', '#b3d9ff', '#80bfff']} style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.messageList}
        inverted
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  messageList: {
    flex: 1,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#0066cc',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#e6e6e6',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#b3d9ff',
  },
  sendButton: {
    backgroundColor: '#0066cc',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    elevation: 3,
  },
});

export default ChatbotScreen;
