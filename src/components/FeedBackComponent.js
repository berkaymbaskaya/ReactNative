import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dialog } from '@rneui/themed';
import Icon from "react-native-vector-icons/FontAwesome";

function FeedBackComponent({ isVisible, closeFeedBack, title, content, iconName }) {
    const close = () => {
        closeFeedBack();
    }
    return (
        <>
            <Dialog
                isVisible={isVisible}
            // onBackdropPress={toggleDialog}
            >
                <Dialog.Title title={title} />
                <View style={{}}>
                    <Icon style={{ marginLeft: 100, marginBottom: 20, marginTop: 20 }} name={iconName} size={40} color="green" />
                </View>
                <Text>{content}</Text>
                <Dialog.Actions>
                    <Dialog.Button titleStyle={{ color: 'green' }} title="Tamam" onPress={close} />
                </Dialog.Actions>
            </Dialog>
        </>

    );
}
const styles = StyleSheet.create({

});
export default FeedBackComponent;