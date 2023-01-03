import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function MessageInput(props) {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Message..." />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});
