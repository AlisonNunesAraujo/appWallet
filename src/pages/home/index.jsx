import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { StatusBar } from "react-native";
import { Toast } from "toastify-react-native";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseconection";
import RenderListGastos from "../renderListGastos";
import RenderList from "../renderList";

import { AuthProvider } from "../../contents";
import { useContext } from "react";

import * as Animatable from "react-native-animatable";

export default function Home() {
  const { user, LogOut, DeleteItemDastos, DeleteItemReceita } =
    useContext(AuthProvider);

  const [dados, setDados] = useState("");
  const [lista, setLista] = useState([]);
  const [gastos, setGastos] = useState([]);

  async function addReceita() {
    if (dados === "") {
      Toast.error("O campo não pode ser vazio!", "Digite algo!");
      return;
    }

    try {
      const data = await addDoc(collection(db, "receita"), {
        valor: dados,
        uid: user.uid,
      });

      setDados("");
      Toast.success("Adicionado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  async function addGastos() {
    if (dados === "") {
      Toast.error("O campo não pode ser vazio", "Digite algo!");
      return;
    }

    try {
      const data = await addDoc(collection(db, "gastos"), {
        valor: dados,
        uid: user.uid,
      });

      setDados("");
      Toast.success("Adicionado com sucesso!");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function Rendle() {
      const ref = collection(db, "receita");
      const receitaQuery = query(ref, where("uid", "==", user.uid));

      getDocs(receitaQuery)
        .then((snapshot) => {
          let list = [];

          snapshot.forEach((doc) => {
            list.push({
              id: doc.id,
              valor: doc.data().valor,
            });

            setLista(list);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    Rendle();

    async function Push() {
      const ref = collection(db, "gastos");
      const gastosQuery = query(ref, where("uid", "==", user.uid));

      getDocs(gastosQuery)
        .then((snapshot) => {
          let list = [];

          snapshot.forEach((doc) => {
            list.push({
              id: doc.id,
              valor: doc.data().valor,
            });
            setGastos(list);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    Push();
  }, [DeleteReceita, DeleteGastos]);

  async function DeleteReceita() {
    DeleteItemReceita();
  }

  async function DeleteGastos() {
    DeleteItemDastos();
  }

  async function Sair() {
    LogOut();
  }

  return (
    <SafeAreaView style={s.conteiner}>
      <StatusBar backgroundColor="#363636" barStyle="light-content" />

      <View style={s.header}>
        <Animatable.Text animation="fadeInDown" style={s.title}>
          Bem Vindo!
        </Animatable.Text>

        <Animatable.Text animation="fadeInDown" style={s.textEmail}>
          E-Mail: {user.email}
        </Animatable.Text>
      </View>

      <Animatable.View animation="fadeInDown" style={s.area}>
        <TextInput
          placeholder="Gastos/Entrada"
          keyboardType="numeric"
          value={dados}
          onChangeText={setDados}
          style={s.input}
        />

        <View style={s.areaBnt}>
          <TouchableOpacity style={s.bnt} onPress={addReceita}>
            <Text style={s.textbnt}>Entradas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={s.bnt} onPress={addGastos}>
            <Text style={s.textbnt}>Gastos</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInDown" style={s.areaRender}>
        <FlatList
          style={s.flat}
          data={lista}
          renderItem={({ item }) => <RenderList data={item} />}
        />

        <FlatList
          style={s.flat}
          data={gastos}
          renderItem={({ item }) => <RenderListGastos data={item} />}
        />
      </Animatable.View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#696969",
  },

  header: {
    width: "100%",
    height: 120,
    backgroundColor: "#363636",
    borderEndEndRadius: 25,
    borderStartEndRadius: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginLeft: 20,
    color: "white",
    marginTop: 10,
  },
  textEmail: {
    color: "white",
    marginTop: 20,
    fontFamily: "Arial",
    marginLeft: 20,
    fontSize: 15,
  },
  email: {
    color: "white",
    marginTop: 10,
    marginLeft: 20,
    fontFamily: "Arial",
  },
  area: {
    width: "90%",
    height: 150,
    backgroundColor: "#363636",
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  areaBnt: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    boxShadow: " 1, 10 solid",
  },
  bnt: {
    width: "40%",
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textbnt: {
    color: "black",
    fontWeight: "700",
    fontFamily: "Arial",
  },

  areaRender: {
    width: "95%",
    flexDirection: "row",
    marginTop: 20,
  },

  flat: {
    width: 5,
    marginLeft: 10,
    height: 400,
    backgroundColor: "#363636",
    borderRadius: 5,
    padding: 10,
  },
});
