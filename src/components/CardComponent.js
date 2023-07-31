import React from 'react';
import { View, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal'; 
import { useNavigation } from '@react-navigation/native';

const CardComponent = ({ data }) => {
    const navigation = useNavigation();

    const GoToDetail=(item)=>{
        navigation.navigate('Detay',{item});
        
    }
    return (
        <>
        {data.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => GoToDetail(item)}>
            <Card containerStyle={{ marginTop: 15 }}>
              {/* Başlık öğesi */}
              <Card.Title>{item.ad} {item.soyad}</Card.Title>
              <Card.Divider />
              <Text style={{ marginBottom: 10, fontSize: 17, fontFamily: 'Helvetica' }}>
                {item.baslik}
              </Text>
              <Text style={{ marginBottom: 10 }}>{item.aciklama}</Text>       
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="pin-outline" size={16} color="black" />
                <Text style={{ fontSize: 12, marginLeft: 5 }}>
                  {item.loc}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="cash-outline" size={16} color="black" style={{ marginRight: 5 }} />
                <Text style={{ fontSize: 12 }}>{item.fiyat}₺</Text>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default CardComponent;