import React from "react";
import { View, StyleSheet } from "react-native";

import MessageText from "./MessageText";

const messages = [
    {
        id: 1,
        text: "how are you doing?",
        sentAt: new Date(),
        type: "incoming",
    },
    {
        id: 88,
        text: "I am fine, thank you. What about you?",
        type: "outgoing",
    },
    {
        id: 124,
        text: "It's been so long since we last talk.",
        type: "outgoing",
    },
    {
        id: 159,
        text: "I've got a lot to talk about",
        type: "outgoing",
    },
    {
        id: 192,
        text: "sure",
        type: "incoming",
    },
];

export default function MessageList(props) {
    return (
        <View style={{ flex: 1 }}>
            {messages.map((message) => (
                <MessageText key={message.id} message={message} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    userName: {
        fontSize: 16,
        fontWeight: "bold",
    },
   
});

