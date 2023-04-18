import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Button } from "react-native";
import Message from './Message';






const ChatInput = ({ onSend }) => {
    const [message, setMessage] = useState('');
    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        if (inputValue && usernameClicked) {
            setMessages([...messages, { id: messages.length + 1, message: inputValue, username }]);
            setInputValue('');
        }
    };

    const handleSend = () => {
        if (message.trim()) {
            onSend(message.trim());
            setMessage('');
        }
    };

    const renderInput = () => (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Entrez votre message..."
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                onSubmitEditing={() => sendMessage()}
                returnKeyType="send"
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.sendButtonText}>Envoyer</Text>
            </TouchableOpacity>
        </View>
    );

    const [usernameClicked, setUsernameClicked] = useState(false);
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Entrez votre message..."
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                onSubmitEditing={() => sendMessage()}
                returnKeyType="send"
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.sendButtonText}>Envoyer</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChatInput;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    messagesContainer: {
        flex: 1,
        width: '100%',
    },
    message: {
        backgroundColor: '#eee',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    messageText: {
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#4caf50',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    usernameInput: {
        flex: 1,
        height: 40,
        marginRight: 10,
    },
    usernameButton: {
        backgroundColor: '#f44336',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    usernameButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    headeroContainer: {
        paddingVertical: 10,
        paddingHorizontal: 35,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    clearButton: {
        backgroundColor: '#f44336',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 'auto',
    },
    clearaButton: {
        backgroundColor: '#f44336',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 'auto',
    },
    clearButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    clearaButtonText: {
        fontWeight: 'bold',
        display: 'flex',
    },
});


