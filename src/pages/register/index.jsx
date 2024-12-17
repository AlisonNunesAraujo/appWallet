import { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import * as Animatable from 'react-native-animatable'



import { AuthProvider } from "../../contents";
import { useContext } from "react";
import { Toast } from "toastify-react-native";
export default function Register() {
  const { createUser,loading } = useContext(AuthProvider);

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
        <Animatable.View 
        animation='fadeInDown'
        
        style={s.form}>
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
            {loading ? (
                <ActivityIndicator size={30} color='white'/>
            ) : (
              <Text style={s.text}>Cadatrar</Text>
            )}
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
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "90%",
    borderRadius: 5,
    backgroundColor: "blue",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  title: {
    fontSize: 20,
    fontFamily: "Arial",
    color: 'white',
  },
  input: {
    width: "90%",
    height: 50,
    borderRadius: 5,
    color: 'white'
  },
  bnt: {
    width: "50%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Arial",
    color: 'white',
  },
});
