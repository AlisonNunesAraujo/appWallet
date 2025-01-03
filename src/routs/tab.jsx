import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/home";
import Perfil from "../pages/perfil";

const Tab = createBottomTabNavigator();

import Feather from "react-native-vector-icons/Feather";

export default function NavTab() {
  return (
    <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   headerShown: false,
        //   // tabBarIcon: ({ color, size }) => {
        //   //   return <Feather color="black" size={25} name="home" />;
        //   // },

        //   tabBarLabel: ()=> null,
          
        // }}
      />
      <Tab.Screen
      
        name="Perfil"
        component={Perfil}
        // options={{ headerShown: false,
        //     // tabBarIcon: (({color,size})=>{
        //     //     return <Feather color='black' size={25} name="user"/>
        //     // }),

        //     tabBarLabel: () => null,

        //  }}
      />
    </Tab.Navigator>
  );
}