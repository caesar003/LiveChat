import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";
import InputField from "../components/InputField";

import Screen from "../components/Screen";
import colors from "../lib/colors";

export default function Login(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <HeaderText title="Log In" />
                <InputField placeholder="Email" />
                <InputField placeholder="Password" />
                <Button
                    title="Login"
                    style={{ backgroundColor: colors.cyan }}
                />
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
