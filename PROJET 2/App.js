import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView } from 'react-native';
import Header from './components/Header';
import ChatInput from './components/ChatInput';
import UsernameInput from './components/UsernameInput';
import Message from './components/Message';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [connected, setConnected] = useState(false);


  const renderMessage = (item) => (
    <View key={item.id} style={styles.message}>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.messageText}>{item.message}</Text>
    </View>
  );
  const renderMessages = () => messages.map(renderMessage);

  const handleSendMessage = () => {
    if (inputValue && username) {
      setMessages([...messages, { author: username, text: inputValue }]);
      setInputValue('');
    }
  };


  const handleConnect = () => {
    if (username.trim()) {
      setConnected(true);
    }
  };

  const handleDisconnect = () => {
    setUsername('');
    setConnected(false);
  };

  if (connected) {
    return (<View style={styles.body}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.container}>
        <View style={styles.chat}>
        </View>
        <Button title="Se déconnecter" onPress={handleDisconnect} />
        <ChatInput />
        {renderMessages()}
      </View></View>
    );
  } else {
    return (<View style={styles.body} >
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.hub}>
          <Text style={styles.label}>Entrez votre pseudo :</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Pseudo"
            autoFocus={true}
          />
          <Button title="Se connecter" onPress={handleConnect} />
        </View>
      </View>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    marginTop: 0,
  },
  hub: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  chatContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  usernameContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  messageContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  author: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  message: {
    flex: 1,
  },
});