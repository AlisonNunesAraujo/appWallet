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
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as Animatable from "react-native-animatable";

import { useContext } from "react";
import { AuthProvider } from "../../contents";

export default function Login() {
  const navigation = useNavigation();
  const { Login, loading } = useContext(AuthProvider);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function RendleLogin() {
    if ((email === "") | (senha === "")) {
      Toast.error("O campo não pode ser vazio!");
    }
    Login(email, senha);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={s.conteiner}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Animatable.View animation="fadeInDown" style={s.form}>
          <Text style={s.title}>Entre na sua conta!</Text>

          <TextInput
            placeholder="E-Mail"
            placeholderTextColor="white"
            value={email}
            onChangeText={setEmail}
            style={s.input}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="white"
            value={senha}
            onChangeText={setSenha}
            style={s.input}
          />

          <TouchableOpacity style={s.bnt} onPress={RendleLogin}>
            {loading ? (
              <ActivityIndicator size={30} color="white" />
            ) : (
              <Text style={s.textbnt}>Entrar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={s.textcriar}>Criar conta!</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "90%",
    height: 300,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: "white",
    fontFamily: "Arial",
  },
  input: {
    width: "80%",
    height: 40,
    gap: 10,
    marginBottom: 10,
    color: "white",
  },
  bnt: {
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 5,
    marginBottom: 10,
  },
  textbnt: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Arial",
  },
  textcriar: {
    fontFamily: "Arial",
    color: "white",
  },
});
