import React, { useState } from 'react';
import { View, Text, TextInput, Button } from "react-native";

const UsernameInput = ({ onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = () => {
        if (username.trim()) {
            onSubmit(username.trim());
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Enter your username</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, marginRight: 8 }}>Username:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', height: 40, flex: 1, paddingHorizontal: 8 }}
                    placeholder="Type your username here..."
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <Button
                title="Submit"
                onPress={handleSubmit}
                disabled={!username.trim()}
            />
        </View>
    );
};

export default UsernameInput;