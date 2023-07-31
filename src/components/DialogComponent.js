import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, TextInput, ScrollView, Text } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { Dialog } from '@rneui/themed';
import Icon from "react-native-vector-icons/FontAwesome";

function DialogComponent({ isVisible, onClose, title, content, Okey }) {

    const [baslik, setBaslik] = useState('')
    const [aciklama, setAciklama] = useState('')
    const toggleDialog = () => {
        onClose();
        Okey()
    }

    return (
        <>
            <Dialog
                isVisible={isVisible}
            // onBackdropPress={toggleDialog}
            >

                <Dialog.Title title={title} />
                <View style={{}}>
                    <Icon style={{marginLeft:100,marginBottom:20,marginTop:20}} name="check" size={40} color="green"  />
                </View>
                <Text>{content}</Text>
                <Dialog.Actions>
                    <Dialog.Button titleStyle={{color:'green'}} title="Tamam" onPress={toggleDialog} />
                </Dialog.Actions>
            </Dialog>
        </>

    );
}
const styles = StyleSheet.create({

});
export default DialogComponent;