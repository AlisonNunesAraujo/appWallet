import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import { deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseconection';
import { doc } from 'firebase/firestore';


import { AuthProvider } from '../../contents';
import { useContext } from 'react';



export default function RenderList({data}) {
  const {DeleteItemReceita} = useContext(AuthProvider)

  async function  Delete(id){
    DeleteItemReceita(id)
   
  }

 return (
   <View style={s.conteiner}>
    <Text style={s.texttype}>Entrada</Text>
    <Text style={s.text}>R$ {data.valor}</Text>
    <TouchableOpacity style={s.bnt} onPress={(id)=> Delete(data.id)}>
      <Text>Excluir</Text>
    </TouchableOpacity>
   </View>
  );
}

const s = StyleSheet.create({
  conteiner:{
    alignItems: 'center',
    marginBottom: 10,
    
  },
  text:{
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Arial',
    color: 'white',
  },
  texttype:{
    fontFamily: 'Arial',
    fontSize: 17,
    color: 'white',
    fontWeight: '700'
  },
  bnt:{
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,

  }
})