import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";

import { AuthProvider } from "../../contents";
import { useContext } from "react";
import { Toast } from "toastify-react-native";
export default function Register() {
  const { createUser } = useContext(AuthProvider);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function Create() {
    if ((email === "") | (senha === "")) {
      Toast.error("O campo não pode ser vazio!");
    }
    createUser(email, senha);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={s.conteiner}>
        <View style={s.form}>
          <Text style={s.title}>Crie sua conta!</Text>

          <TextInput
            keyboardType="email-address"
            placeholder="E-Mail"
            value={email}
            onChangeText={setEmail}
            style={s.input}
          />
          <TextInput
            keyboardType="password"
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            style={s.input}
          />

          <TouchableOpacity style={s.bnt} onPress={Create}>
            <Text style={s.text}>Cadatrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "90%",
    borderRadius: 5,
    backgroundColor: "white",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontFamily: "Arial",
  },
  input: {
    width: "90%",
    height: 50,
    borderRadius: 5,
  },
  bnt: {
    width: "50%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Arial",
  },
});
