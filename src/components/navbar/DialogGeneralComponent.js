import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dialog } from '@rneui/themed';

function DialogGeneralComponent({ isVisible, onClose, title, content }) {

    const [baslik, setBaslik] = useState('')
    const [aciklama, setAciklama] = useState('')
    const toggleDialog = () => {
        onClose();
    }
    return (
        <>
            <Dialog
                isVisible={isVisible}
                // onBackdropPress={toggleDialog}

            >
                <Dialog.Title title={title} />
                <Text>{content}</Text>
                <Dialog.Actions>
                    <Dialog.Button title="Tamam" onPress={toggleDialog} />
                </Dialog.Actions>
            </Dialog>
        </>

    );
}
const styles = StyleSheet.create({

});
export default DialogGeneralComponent;