import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//SCREENS
import LoginScreen from './src/pages/login/LoginScreen';
import GenelScreen from './src/pages/genel/GenelScreen';
import HomeScreen from './src/pages/home/HomeScreen';
import NavbarBottom from './src/components/navbar/NavbarBottom';
import DetayScreen from './src/pages/detay/DetayScreen';
import AddNewScreen from './src/pages/addnew/AddNewScreen';
import { Ionicons } from '@expo/vector-icons';
import UserData from './src/data/user.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
//share
import ShareComponent from './src/components/ShareComponent';
const Stack = createStackNavigator();

const App =  () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(UserData);
    console.log(user)
    AsyncStorage.setItem('user', JSON.stringify(UserData[0])); // UserData doğrudan kullanılır.
    }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Kullanıcı Girişi',
            headerStyle: {
              backgroundColor: '#1e2936'
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: null,
            headerBackVisible: false,
            headerLeft: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detay"
          component={DetayScreen}
          options={{
            headerStyle: {
              backgroundColor: '#1e2936'
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: '#fff',
            title: "İlan Detayları",
            headerBackVisible: true,
            headerBackTitle: 'Geri',
            headerRight: () => (
              <Pressable onPress={ShareComponent}>
              <Ionicons size={25} style={{ marginRight: 10 }} name="share-social-outline" color="white" />
              </Pressable>

            ),
          }}
        />
        <Stack.Screen
          name="AddNewScreen"
          component={AddNewScreen}
          options={{
            headerStyle: {
              backgroundColor: '#1e2936'
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: '#fff',
            title: "İlan  Ekle",
            headerBackVisible: true,
            headerBackTitle: 'Geri',
          }}
        />
        <Stack.Screen
          name="NavbarBottom" // Yeni ekranı ekliyoruz
          component={NavbarBottom}
          options={{
            headerShown: false, // Navbar'ın kendi başlık çubuğunu gizliyoruz
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
