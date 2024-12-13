import { NavigationContainer } from '@react-navigation/native';
import Context from './src/contents';
import Priver from './src/routs/private';

import  Toastify from 'toastify-react-native'

export default function App() {
  return (
    
    <NavigationContainer>
      <Context>
        <Toastify/>
        <Priver/>
      </Context>
    </NavigationContainer>
  );
}

