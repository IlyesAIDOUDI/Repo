import React from "react";
import { View, Text, ScrollView } from "react-native";
import messageStyles from "../styles/messageStyles";

const Message = ({ message, username }) => {
    const isCurrentUser = message.username === username;
    const sendMessage = () => {
        if (inputValue && usernameClicked) {
            setMessages([...messages, { id: messages.length + 1, message: inputValue, username }]);
            setInputValue('');
        }
    };
    return (
        <View style={isCurrentUser ? messageStyles.userContainer : messageStyles.otherContainer}>
            <Text style={isCurrentUser ? messageStyles.userMessageText : messageStyles.otherMessageText}>
                {message.text}
            </Text>
        </View>
    );
};

export default Message;


