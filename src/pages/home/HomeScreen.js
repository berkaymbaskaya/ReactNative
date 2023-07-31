import React,{useState} from 'react';
import { StyleSheet, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//pages
import GenelScreen from '../../pages/genel/GenelScreen';
import AnasayfaScreen from '../anasayfa/AnasayfaScreen';
//
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [modalVisible,setModalVisible]=useState(false);
  const addNew=()=>{
    setModalVisible(true);
    console.log(modalVisible)
  }
  const navigation = useNavigation();

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Genel') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Anasayfa') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }
        else if (route.name === 'Profil') {
          iconName = focused ? 'person' : 'person-outline';

        }

        // You can return any component that you like here!
        return <Ionicons  name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: '#1e2936'
      },
      tabBarActiveTintColor: 'white',
      headerShown: true,
      headerStyle: {
        backgroundColor: '#1e2936',
      }, headerTintColor: '#fff',
    })} >
      <Tab.Screen options={{
        title: 'İlanlar',
      }} name="Anasayfa" component={AnasayfaScreen} />
      <Tab.Screen name="Genel" component={GenelScreen} />
      <Tab.Screen name="Profil" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HomeScreen;
