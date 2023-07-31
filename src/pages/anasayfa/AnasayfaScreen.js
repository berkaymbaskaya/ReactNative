import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from '../../components/CardComponent';
import JsonData from '../../data/data.json'
import { Button, FAB } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AnasayfaScreen = () => {
  const navigation = useNavigation();
  //İLANLAR
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JsonData);
  }, []);
  //MODAL
  const AddNew = () => {
    navigation.navigate('AddNewScreen')
  }
  const CloseModal = () => {
    setModalVisible(false);
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1e2936"
      />
      <ScrollView>
        <CardComponent data={data} />
      </ScrollView>
      <FAB onPress={AddNew} color="#dea63c" size='small' icon={<Ionicons size={25} name="add-outline" color="#1e2936" />
      } placement='right' title="" />

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default AnasayfaScreen;