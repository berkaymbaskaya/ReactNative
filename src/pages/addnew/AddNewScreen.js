import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, TextInput, ScrollView, Text } from 'react-native';
import { Input, Button, Slider, Divider } from '@rneui/themed';
import DialogComponent from '../../components/DialogComponent';
import { useNavigation } from '@react-navigation/native';
import Dropdown from 'react-native-input-select';
import FontAwesome from "react-native-vector-icons/FontAwesome";
function AddNewScreen({ }) {
  const navigation = useNavigation()

  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  //form
  const [baslik, setBaslik] = useState('')
  const [aciklama, setAciklama] = useState('')
  const [detay, setDetay] = useState('')
  const [ad, setAd] = useState('')
  const [soyad, setSoyad] = useState('')
  const [diller, setDiller] = useState([])
  const [fiyat, setFiyat] = useState('')
  const [loc, setLoc] = useState('')
  const [tel, setTel] = useState('');
  //modal
  const [visible, setVisible] = useState(false);


  const Publish = () => {
    console.log(baslik)
    setVisible(true)
    Okey()
  }
  const Okey = () => {
    setBaslik('')
    setAciklama('')
    setDetay('')
    setAd('')
    setSoyad('')
    setDiller('')
    setFiyat('')
    setLoc('')
    setTel('')
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1250)

  }
  const toggleDialog = () => {
    setVisible(!visible); // Diyaloğun görünürlüğünü tersine çevirerek açma ve kapatma işlemini gerçekleştirir
  };
  return (
    <ScrollView style={{ flex: 1, padding: 15 }}>
      <Input
        placeholder='İlan Başlığı' onChangeText={text => setBaslik(text)} value={baslik}
      />
      <Input
        placeholder='Açıklama' onChangeText={text => setAciklama(text)} value={aciklama}
        multiline={true}
        numberOfLines={3} // 
      />
      <Input
        placeholder='Fiyat' keyboardType='numeric' onChangeText={text => setFiyat(text)} value={fiyat}
      />
      <View style={{ padding: 10 }}>
        <Dropdown dropdownStyle={{
          borderWidth: 0, // To remove border, set borderWidth to 0
          backgroundColor: 'transparent',
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderBottomColor: 'rgb(134, 147, 158)',
          borderRadius: 0,
        }}
          placeholder="Seçiniz"
          label="Lokasyon"
          onValueChange={(value) => setLoc(value)}
          selectedValue={loc}
          primaryColor={'#dea63c'}
          options={[
            { label: 'İstabul', value: 'İstabul' },
            { label: 'Ankara', value: 'Ankara' },
            { label: 'İzmir', value: 'İzmir' }]}
        />
      </View>
      <Input style={{ height: 70 }}
        placeholder='Detaylı Açıklama' onChangeText={text => setDetay(text)} value={detay}
        multiline={true}
        numberOfLines={5} // 
      />
      <View style={{ padding: 10 }}>
        <Dropdown dropdownStyle={{
          borderWidth: 0, // To remove border, set borderWidth to 0
          backgroundColor: 'transparent',
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderBottomColor: 'rgb(134, 147, 158)',
          borderRadius: 0
        }}
          label="Tercih Ettiğiniz Diller"
          placeholder="Seçiniz"
          onValueChange={(value) => setDiller(value)}
          selectedValue={diller}
          isMultiple
          primaryColor={'#dea63c'}

          options={[
            { label: 'Java', value: 'NG' },
            { label: 'Javascript', value: 'AX' },
            { label: 'C#', value: 'DZ' },
            { label: 'Python', value: 'AS' }]}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center', }}>
        <Button onPress={Publish} buttonStyle={{
          backgroundColor: 'rgb(30, 41, 54)',
          width: 200,
          marginTop: 20,
          height:40
        }} style={styles.button} radius="lg" title='Yayınla' />
      </View>
      <DialogComponent title={"İşlem Başarılı !"} content={"İlanınız Başarıyla Yayınlanmıştır"} isVisible={visible} onClose={toggleDialog} Okey={toggleDialog} />
    </ScrollView>


  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 160,
    marginTop: 20,
  },
  dropdown1BtnStyle: {
    backgroundColor: 'red'
  }
});
export default AddNewScreen;