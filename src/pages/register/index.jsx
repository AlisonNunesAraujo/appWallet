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

import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const { createUser,loading } = useContext(AuthProvider);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  async function Create() {
    
    createUser(email, senha);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={s.conteiner}>
        <Animatable.View animation='fadeInDown' style={s.header}>
          <Text style={s.title}>Crie sua conta!</Text>
        </Animatable.View>

        <Animatable.View 
        animation="fadeInUpBig"
        
        style={s.form}>

          <TextInput placeholder="Nome" style={a.input}/>
          

          <TextInput
            keyboardType="email-address"
            placeholder="E-Mail"
            placeholderTextColor='white'
          
            value={email}
            onChangeText={setEmail}
            style={s.input}
          />
          <TextInput
            keyboardType="password"
            placeholder="Senha"
            placeholderTextColor='white'
            secureTextEntry
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

          <TouchableOpacity onPress={()=> navigation.goBack()}  style={s.bntVoltar}>
            <Text style={s.textVoltar}>Voltar</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  header:{
    width: '100%',
    backgroundColor: '#363636',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#1C1C1C",
    height: 300,
    alignItems: "center",
    borderRadius: 5,
    flex: 2,
    borderTopEndRadius: 35,
    borderTopLeftRadius: 35,
  },

  title: {
    fontSize: 30,
    fontFamily: "Arial",
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    width: "90%",
    height: 50,
    borderRadius: 5,
    color: 'white',
    marginTop: 30,

  },
  bnt: {
    width: "50%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  bntVoltar: {
    width: "50%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 30,
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontFamily: "Arial",
   
  },
  textVoltar: {
    color: "black",
    fontWeight: "700",
    fontFamily: "Arial",
    
  },
});
