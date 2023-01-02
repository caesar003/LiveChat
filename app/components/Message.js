import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function Message(props) {
    return (
        <View style={styles.message}>
            <Image
                source={{
                    uri: "https://randomuser.me/api/portraits/men/11.jpg",
                }}
                style={styles.profilePicture}
            />
            <View style={styles.messageInfo}>
                <Text style={styles.user}>John Smith</Text>
                <Text>I was wondering if you ....</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    message: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 8,
        marginVertical: 8,
    },
    messageInfo: {
        marginLeft: 8,
        flex: 1,
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    user: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
