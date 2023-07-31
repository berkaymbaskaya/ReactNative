import React from 'react';
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

const GenelScreen = () => {
    
  return (

      <View style={styles.container} >
        <Text>GENELL</Text>
      </View>

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
export default GenelScreen;