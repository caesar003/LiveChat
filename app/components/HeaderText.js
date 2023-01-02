import React from "react";
import { Text, StyleSheet } from "react-native";

export default function HeaderText({ title }) {
    return <Text style={styles.headerText}>{title}</Text>;
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
