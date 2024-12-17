import React from "react";
import { ActivityIndicator, View } from "react-native";

import { AuthProvider } from "../contents";
import { useContext } from "react";

import NavStack from "./stack";

import NavTab from "./tab";

export default function Priver() {
    const { signed, loading } = useContext(AuthProvider);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                }}
            >
                <ActivityIndicator size='large' color='black' />
            </View>
        )

    }

    return signed ? <NavTab /> : <NavStack />;
}
