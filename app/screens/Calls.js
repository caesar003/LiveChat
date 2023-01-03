import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderText from "../components/HeaderText";
import Screen from "../components/Screen";
import Call from "./Call";

export default function Calls(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <HeaderText title="Calls" />
                <Call time="11.20" type="outgoing" />
                <Call time="10.12" type="incoming" />
                <Call time="10.03" type="incoming" />
                <Call time="8.22" type="missed" />
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
