import React from "react";
import { View, StyleSheet,  ImageBackground } from "react-native";
import Button from "../components/Button";
import colors from "../lib/colors";

export default function Welcome(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/livechat.jpg")}
            imageStyle={styles.imageStyle}
        >
            <View style={styles.container}>
                <Button
                    title="Login"
                    style={{ backgroundColor: colors.chiliPepper }}
                />
                <Button
                    title="Register"
                    style={{ backgroundColor: colors.cyan }}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        overflow: "hidden",
    },

    imageStyle: {
        resizeMode: "cover",
        top: 0,
        left: -500,
    },
});
