import React, { useState } from 'react';
import { StyleSheet, Linking, View, Text, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import { Button, Input } from '@rneui/themed';
import TeklifModalComponent from '../../components/TeklifModalComponent';
import FeedBackComponent from '../../components/FeedBackComponent';
const DetayScreen = (item) => {
  const [fiyat, setFiyat] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  //feedbackmodal
  const [feedbackVisible,setFeedbackVisible]=useState(false)
  const [fedTitle,setFedTitle]=useState('')
  const [fedContent,setFedContent]=useState('')
  const [ıconName,setIconName]=useState('')

  console.log("gelen veri:", item)
  const data = item.route.params.item;
  const Call = () => {
    const url = `tel:${data.tel}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log('Telefon araması desteklenmiyor.');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((error) => console.log('Bir hata oluştu:', error));
  }
  const TeklifVer = () => {
    setModalVisible(true)
  }
  const CloseModalF = () => {
    setModalVisible(false);
    setFeedbackVisible(true)
    setFedTitle('İşlem Başarılı')
    setFedContent('Teklifiniz İlan Sahibine Gönderildi')
    setIconName('check')
  }
  const closeFeedBack=()=>{
    setFeedbackVisible(false)

  }
  return (
    <>
      <View style={styles.container} >
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 30, }}>
          <Ionicons size={80} name="person-circle-outline" color="#dea63c" />
          <Text style={{ fontWeight: 'bold', fontFamily: 'Helvetica', color: '#5b5757' }}>{data.ad} {data.soyad}</Text>
        </View>
        <Divider />
        <View style={{ padding: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={{ fontSize: 17, fontFamily: 'Helvetica', fontWeight: 'bold', color: '#5b5757' }} >İlan Detayları</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
            <Ionicons name="pin-outline" size={20} color="black" />
            <Text style={{ fontSize: 14, marginLeft: 5 }}>
              {data.loc}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <Ionicons name="cash-outline" size={20} color="black" style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 14 }}>{data.fiyat}₺</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
            <TouchableHighlight onPress={Call} underlayColor="lightgray">
              <Ionicons o name="call-outline" size={20} color="black" style={{ marginRight: 5, }} />
            </TouchableHighlight>
            <Text style={{ fontSize: 14 }}>{data.tel}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          </View>
        </View>
        <Divider />
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 17, marginBottom: 10, fontFamily: 'Helvetica', fontWeight: 'bold', color: '#5b5757' }}>{data.baslik}</Text>
          <Text style={{ fontSize: 14, marginBottom: 10, }}>{data.aciklama}</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5b5757', fontFamily: 'Helvetica' }}>Detay</Text>
          <Text style={{ fontSize: 14, padding: 10 }}>{data.detay}</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#5b5757', fontFamily: 'Helvetica', marginBottom: 10 }}>Tercih Edilen Dil/Diller</Text>
          <Text style={{ fontSize: 14 }}> {data.diller}</Text>
          <Divider />
          <Button  onPress={TeklifVer} buttonStyle={{
            backgroundColor: 'rgb(30, 41, 54)',
            width: 300, marginTop: 40
          }} titleStyle={{ color: 'white' }} iconPosition='left'  radius="lg">
            <Ionicons style={{marginRight:5}} name="cash-outline" size={22} color="whitesmoke" />
            Teklif Ver
          </Button>
        </View>
      </View>
      {/* <View style={{position:'absolute',backgroundColor:'rgb(30, 41, 54)',bottom:0,height:150,flex:1,width:'100%',alignItems:'center',justifyContent:'center',paddingBottom:20}}>
    <Input inputStyle={{color:'white'}} leftIcon={<Ionicons name="cash-outline" size={20} color="white" style={{  }} />} style={{width:50}}
        placeholder='Teklif Fiyatı' onChangeText={text => setFiyat(text)} 
      />
    <Button buttonStyle={{
        backgroundColor: 'white',
      }} style={{width:200}} radius="lg" title='Teklif Ver' titleStyle={{color:'black'}} />
    </View> */}
      <TeklifModalComponent modalVisible={modalVisible} CloseModalF={CloseModalF} />
      <FeedBackComponent isVisible={feedbackVisible} title={fedTitle} content={fedContent} iconName={ıconName} closeFeedBack={closeFeedBack}/>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default DetayScreen;