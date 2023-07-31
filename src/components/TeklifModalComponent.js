import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, TextInput, ScrollView, Text, Pressable } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Input } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';

function TeklifModalComponent({ modalVisible, CloseModalF }) {
    // const [modalVisible, setModalVisible] = useState(false);
    const ToogleModal = () => {
        CloseModalF()
    };
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={ToogleModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Ionicons size={40} name="card-outline" color="rgb(227 152 13)" style={{ marginBottom: 20 }} />
                        <Text style={{ marginBottom: 10 }}>Teklif Tutarı</Text>
                        <Input
                            placeholder='₺'
                            keyboardType="numeric"
                        />
                        <Button buttonStyle={{
                            backgroundColor: 'rgb(30, 41, 54)',
                            borderRadius: 20,
                            width: 160
                        }} style={{ width: 160, }} radius="lg" title='Gönder' onPress={ToogleModal} />
                    </View>

                </View>

            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
export default TeklifModalComponent;