import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Icon({ size = 22, type }) {
    function getIcon() {
        const obj = {};
        switch (type) {
            case "outgoing": {
                obj.name = "arrow-top-right";
                obj.color = "green";
                break;
            }
            case "incoming": {
                obj.name = "arrow-bottom-left-thin";
                obj.color = "blue";
                break;
            }
            case "missed": {
                obj.name = "arrow-u-up-right";
                obj.color = "red";
                break;
            }
        }
        return obj;
    }

    const { name, color } = getIcon();
    return <MaterialCommunityIcons name={name} color={color} size={size} />;
}

export default function Call({ time, type }) {
    return (
        <View style={styles.call}>
            <Image
                source={{
                    uri: "https://randomuser.me/api/portraits/men/11.jpg",
                }}
                style={styles.profilePicture}
            />
            <View style={styles.callInfo}>
                <Text style={styles.userName}>John Smith</Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                    }}
                >
                    <Icon type={type} />
                    <Text>{time} am</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    call: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 8,
        marginVertical: 8,
    },
    callInfo: {
        marginLeft: 8,
        flex: 1,
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
