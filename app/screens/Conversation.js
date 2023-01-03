import React from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import MessageInput from "../components/MessageInput";
import MessageList from "../components/MessageList";

import Screen from "../components/Screen";

export default function Conversation(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Image
                        source={{
                            uri: "https://randomuser.me/api/portraits/men/11.jpg",
                        }}
                        style={styles.profilePicture}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.userName}>John Smith</Text>
                    </View>
                </View>

                <MessageList />

                <MessageInput />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 8,
    },
    profileInfo: {
        flex: 1,
        marginLeft: 8,
    },
    profilePicture: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
});
