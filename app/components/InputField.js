import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../lib/colors";

export default function InputField({ placeholder }) {
    return <TextInput style={styles.textInput} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
    container: {},
    textInput: {
        width: "90%",
        borderRadius: 8,
        backgroundColor: colors.lightGray,
        height: 48,
        padding: 5,
        marginVertical: 10,
    },
});
