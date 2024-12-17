import { View,Text,TouchableOpacity, StyleSheet } from 'react-native';

import { useContext } from 'react';
import { AuthProvider } from '../../contents';


export default function Perfil() {

  const {user, LogOut} = useContext(AuthProvider)

  async function Sair(){
    LogOut()
  }

 return (
   <View style={s.conteiner}>
      <View style={s.info}>
        <Text style={s.textEmail}>E-Mail: {user.email} </Text>
        <TouchableOpacity onPress={Sair} style={s.bnt}>
          <Text style={s.textBnt}>Sair</Text>
        </TouchableOpacity>
      </View>
   </View>

  );
}

const s = StyleSheet.create({
  conteiner:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },

  info:{
    backgroundColor: 'black',
    width: '80%',
    height: 200,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  textEmail:{
    color: 'white',
    fontSize: 18,
    fontFamily: 'Arial'

  },

  bnt:{
    width: '50%',
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  textBnt:{
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: '800'
  }
})