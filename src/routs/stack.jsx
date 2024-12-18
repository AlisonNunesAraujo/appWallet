import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/login";
import Register from "../pages/register";

const Stack = createNativeStackNavigator();

export default function NavStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    
      <Stack.Screen 
        name="Register" 
        component={Register}
        options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

