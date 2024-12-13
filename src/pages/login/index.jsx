import { useState, useRef, use } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useContext } from "react";
import { AuthProvider } from "../../contents";

export default function Login() {
  const navigation = useNavigation();
  const { Login } = useContext(AuthProvider);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function RendleLogin() {
    if ((email === "") | (senha === "")) {
      Toast.error("O campo não pode ser vazio!");
      return;
    }
    Login(email, senha);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={s.conteiner}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={s.form}>
          <Text style={s.title}>Entre na sua conta!</Text>

          <TextInput
            placeholder="E-Mail"
            value={email}
            onChangeText={setEmail}
            style={s.input}
          />
          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            style={s.input}
          />

          <TouchableOpacity style={s.bnt} onPress={RendleLogin}>
            <Text style={s.textbnt}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={s.textcriar}>Criar conta!</Text>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: "90%",
    height: 300,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "black",
    fontFamily: "Arial",
  },
  input: {
    width: "80%",
    height: 40,
    gap: 10,
    marginBottom: 10,
  },
  bnt: {
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 5,
    marginBottom: 10,
  },
  textbnt: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Arial",
  },
  textcriar:{
    fontFamily: 'Arial'
  }
});
