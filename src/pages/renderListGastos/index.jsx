import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';

import { AuthProvider } from '../../contents';
import { useContext } from 'react';


export default function RenderListGastos({data}) {

    const {DeleteItemGastos} = useContext(AuthProvider)

    async function Delete(id){
        DeleteItemGastos(id)
    }

 return (
   <View style={s.conteiner}>
    <Text style={s.texttype}>Gastos</Text>
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
        fontFamily: 'Arial',
        fontWeight: '700',
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
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

    }
})