import { NavigationContainer } from '@react-navigation/native';
import Context from './src/contents';
import Priver from './src/routs/private';

// import Toast from 'toastify-react-native'

import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    
    <NavigationContainer>
      <Context>
        {/* <Toast/> */}
        <FlashMessage position='top'/>
        <Priver/>
      </Context>
    </NavigationContainer>
  );
}

