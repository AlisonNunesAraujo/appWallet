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
    
    Login(email, senha);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={s.conteiner}>
        <Animatable.View animation='fadeInDown' style={s.header}>
          <Text style={s.title}>Entre na sua conta!</Text>
        </Animatable.View>

        <StatusBar backgroundColor='#363636' barStyle="light-content" />
        <Animatable.View animation="fadeInUpBig" style={s.form}>
          

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
            secureTextEntry
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

          <TouchableOpacity onPress={() => navigation.navigate("Register")} style={s.bntCriar}>
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
    backgroundColor: '#363636',
    alignItems: "center",
    justifyContent: "center",
  },
  header:{
    flex: 1,
    width: '100%',
    backgroundColor: '#363636',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 3,
    width: "100%",
    height: 300,
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    borderRadius: 5,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: "Arial",
    fontWeight: 'bold'
  },
  input: {
    width: "80%",
    height: 40,
    gap: 10,
    marginBottom: 10,
    color: "white",
    marginTop: 30,
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
  bntCriar: {
    width: "50%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
  },
  textbnt: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Arial",
  },
  textcriar: {
    fontFamily: "Arial",
    color: "black",
    fontWeight: 'bold'
  },
});
