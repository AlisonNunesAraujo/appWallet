import { createContext, useEffect, useState } from "react";

import { db } from "../firebase/firebaseconection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebaseconection";
import { deleteDoc, doc } from "firebase/firestore";

import { Toast } from "toastify-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";

export const AuthProvider = createContext({});

export default function Context({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function Storage() {
      try {
        const User = await AsyncStorage.getItem("@userData");
        if (User) {
          setUser(JSON.parse(User));
        }
      } catch (error) {
        console.error("Erro ao carregar usuário do storage:", error);
        setUser(null);
      }
    }
    Storage();
  }, []);

  async function createStorage(user) {
    try {
      await AsyncStorage.setItem("@userData", JSON.stringify(user));
    } catch (error) {
      console.error("Erro", error);
    }
  }

  async function createUser(email, senha) {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, senha);
      Toast.success("Conta criada com sucesso");
      setUser(response);
     
      await createStorage(response.user);
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  }

  async function Login(email, senha) {
    setLoading(true)
    try {
      const dado = await signInWithEmailAndPassword(auth, email, senha);
      Toast.success("Bem Vindo!");
      setUser([
        dado.user.uid
      ]);
      await createStorage(dado.user);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  async function DeleteItemReceita(id) {
    const ref = doc(db, "receita", id);

    await deleteDoc(ref)
      .then(() => {
       
        Toast.success("Item excluido com sucesso!");
      })

      .catch(() => {
        Toast.error("Algo deu errado!");
      });
  }

  async function DeleteItemGastos(id) {
    const ref = doc(db, "gastos", id);

    await deleteDoc(ref)
      .then(() => {
        userId: userId,
        Toast.success("Item excluido com sucesso!");
      })
      .catch(() => {
        Toast.error("Algo deu errado!");
      });
  }

  async function LogOut() {
    await AsyncStorage.removeItem("@userData");
    setUser(null);
    signOut();
  }

  return (
    <AuthProvider.Provider
      value={{
        signed: !!user,
        user,
        createUser,
        Login,
        DeleteItemGastos,
        DeleteItemReceita,
        LogOut,
        loading
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
}
