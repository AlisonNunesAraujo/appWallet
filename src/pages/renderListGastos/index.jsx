import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { AuthProvider } from "../../contents";
import { useContext, useState } from "react";

import Feather from "@expo/vector-icons/Feather";

export default function RenderListGastos({ data }) {
  const { DeleteItemGastos } = useContext(AuthProvider);

  async function Delete(id) {
    DeleteItemGastos(id);
  }

  return (
    <View style={s.conteiner}>
      <Text style={s.texttype}>Gastos</Text>

      <Text style={s.text}>R$ {data.valor}</Text>

      <TouchableOpacity style={s.bnt} onPress={(id) => Delete(data.id)}>
        <Feather color="black" size={20} name="trash-2" />
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  conteiner: {
    alignItems: "center",
    marginBottom: 10,
  },

  text: {
    fontSize: 17,
    fontFamily: "Arial",
    fontWeight: "700",
    color: "white",
  },
  texttype: {
    fontFamily: "Arial",
    fontSize: 17,
    color: "white",
    fontWeight: "700",
  },
  bnt: {
    width: "50%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
