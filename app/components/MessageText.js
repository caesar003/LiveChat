import React from "react";
import { Text, View, StyleSheet } from "react-native";

import colors from "../lib/colors";

export default function MessageText({ message }) {
    return (
        <View style={{padding: 8}}>
            <Text style={styles[message.type]}>{message.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    outgoing: {
        textAlign: "right",
    },
    incoming: {
        textAlign: "left",
    },
});
