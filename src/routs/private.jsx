import React from "react";
import { ActivityIndicator, View } from "react-native";

import { AuthProvider } from "../contents";
import { useContext } from "react";

import NavStack from "./stack";

import  Tab  from "./tab";

export default function Priver() {
    const { signed, loading } = useContext(AuthProvider);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#363636',
                }}
            >
                <ActivityIndicator size='large' color='white' />
            </View>
        )

    }

    return signed ? <Tab/> : <NavStack />;
}
