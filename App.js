import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#3c0a6b',
        },
        headerTintColor:'white',
      }}>
        <Tab.Screen name='Welcome' component={WelcomeScreen} options={{
          title: 'Welcome Screen',
          tabBarLabelStyle:{fontSize:11,fontWeight:'bold'},
          tabBarIcon:({size, color})=>{
           return <Ionicons name="home" color={color} size={size}/>
          }
        }}/>
        <Tab.Screen name='User' component={UserScreen} options={{
          title: 'User Screen',
          tabBarLabelStyle:{fontSize:11,fontWeight:'bold'},
          tabBarIcon:({size, color})=>{
           return <Ionicons name="person" color={color} size={size}/>
          }
        }}/>
        <Tab.Screen name='Favorite' component={UserScreen} options={{
          title: 'Favorite Screen',
          tabBarLabelStyle:{fontSize:11,fontWeight:'bold'},
          tabBarIcon:({size, color})=>{
           return <Ionicons name="star" color={color} size={size}/>
          }
        }}/>
        <Tab.Screen name='Car' component={UserScreen} options={{
          title: 'Car Screen',
          tabBarLabelStyle:{fontSize:11,fontWeight:'bold'},
          tabBarIcon:({size, color})=>{
           return <Ionicons name="car" color={color} size={size}/>
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

