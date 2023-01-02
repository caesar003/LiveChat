import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderText from "../components/HeaderText";
import Message from "../components/Message";
import Screen from "../components/Screen";

export default function Messages(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <HeaderText title="Messages" />
                <Message />
                <Message />
                <Message />
                <Message />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});
