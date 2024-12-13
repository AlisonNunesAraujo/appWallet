import { View,Text,TouchableOpacity } from 'react-native';

import { useContext } from 'react';
import { AuthProvider } from '../../contents';


export default function Perfil() {

  const {user, LogOut} = useContext(AuthProvider)

  async function Sair(){
    LogOut()
  }

 return (
   <View>
      <View>
        <Text>E-Mail: {user.email} </Text>
        <TouchableOpacity onPress={Sair}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
   </View>

  );
}