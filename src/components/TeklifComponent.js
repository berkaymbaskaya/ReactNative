import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, TextInput, ScrollView, Text } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

function TeklifComponent({ }) {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };
    return (
        <View>
        <Button title="Open Overlay" onPress={toggleOverlay} />
        <Overlay isVisible={true} onBackdropPress={toggleOverlay}>
          <Text>Hello from Overlay!</Text>
        </Overlay>
      </View>
    );
}
const styles = StyleSheet.create({

});
export default TeklifComponent;