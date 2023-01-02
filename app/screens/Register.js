import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import HeaderText from "../components/HeaderText";
import InputField from "../components/InputField";
import Button from "../components/Button";
import colors from "../lib/colors";

export default function Register(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <HeaderText title="Register" />
                <InputField placeholder="Name" />
                <InputField placeholder="Email" />
                <InputField placeholder="Password" />
                <InputField placeholder="Verify Password" />
                <Button
                    title="Register"
                    style={{ backgroundColor: colors.chiliPepper }}
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
