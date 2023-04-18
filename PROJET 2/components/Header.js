import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerText}>CHATY</Text>
            </View>
            <View style={styles.headerRight}>
                <Button title="Menu" onPress={() => { }} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 80,
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 36,
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
        backgroundColor: '#f44336',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 'auto',
    },
    headerLeft: {
        flex: 1,
    },
    headerRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
});