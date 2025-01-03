import { createContext, useEffect, useState } from "react";

import { db } from "../firebase/firebaseconection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebaseconection";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { showMessage } from "react-native-flash-message";

export const AuthProvider = createContext({});

export default function Context({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

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
      console.error(error);
    }
  }

  async function createUser(email, senha) {
    if ((email === "") | (senha === "")) {
     
      showMessage({
        message: 'Os campos não podem estar vazio!',
        type: 'success'
      })
    }
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, senha);
      showMessage({
        message: 'Conta criada!',
        description: 'Sua conta foi criada com sucesso!',
        type: 'success',
        duration: 3000
      })

      await createStorage(response.user);
      setUser(response.user);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      showMessage({
        type: 'info',
        message: 'Algo deu errado!',
        description: 'Não foi possivel criar a sua conta, Tente novamente!',
        duration: 3000,
      })
    }
  }


  



  async function Login(email, senha) {
    if ((email === "") | (senha === "")) {
      showMessage({
        type: 'info',
        message: 'Campos vazios',
        description: 'Os campos não podem estar vazios!'
      })
    }
    setLoading(true);
    try {
      const dado = await signInWithEmailAndPassword(auth, email, senha);

      setUser(dado.user);
      showMessage({
        message: 'Bem Vindo!'
      })
      await createStorage(dado.user);
      setLoading(false);
      return;
     
    } catch (err) {
      showMessage({
        type: 'warning',
        description: 'Não foi possivel Entrar em sua conta!',
        message: 'Algo deu errado!',
        duration: 3000,
      })
      setLoading(false);
    }
  }

  async function DeleteItemReceita(id) {
    const ref = doc(db, "receita", id);

    await deleteDoc(ref)
      .then(() => {
        showMessage({
          message: 'Item excluido com sucesso!',
          type: 'success',
          duration: 2000
        })
          
      })

      .catch(() => {
        showMessage({
          message: 'Algo deu errado!',
          type: 'warning',
          duration: 3000,
        })
      });
  }

  async function DeleteItemGastos(id) {
    const ref = doc(db, "gastos", id);

    await deleteDoc(ref)
      .then(() => {
        showMessage({
          message: 'Item excluido com sucesso!',
          type: 'success',
          duration: 2000
        })
      })
      .catch(() => {
        showMessage({
          message: 'Algo deu errado!',
          type: 'warning',
          duration: 3000,
        })
      
      });
  }

  async function LogOut() {
    auth.signOut().then(() => {
      showMessage({
        message: 'Voçe saiu da conta!',
        type: 'info',
        duration: 1000,
      })

      AsyncStorage.removeItem("@userData");
      setUser(null);
    });
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
        loading,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
}
