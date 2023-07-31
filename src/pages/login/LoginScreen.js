import react from 'react';
import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import DialogGeneralComponent from '../../components/navbar/DialogGeneralComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible,setisVisible]=useState(false)

  const handleLogin =async  () => {
    console.log(username,password);
    const User=JSON.parse(await AsyncStorage.getItem('user'))
    if(username == User.username && password==User.password){
      navigation.navigate('Home')
    }
    else{
      setisVisible(true)
    }
  }
  const Close=()=>{
    setisVisible(false)
  }
  return (
    <View style={styles.container}>
      <Ionicons size={100} name="person-circle-outline" color="#1e2936" />
        <Input
      placeholder='Kullanıcı Adı' onChangeText={text => setUsername(text)}
    />
      <Input placeholder="Şifre" secureTextEntry={true}  onChangeText={text => setPassword(text)} />
      <Button buttonStyle={{
        backgroundColor: 'rgb(30, 41, 54)',
      }} style={styles.button} radius="lg" title='Giriş' onPress={handleLogin} />
          <DialogGeneralComponent isVisible={isVisible} title={"Uyarı"} content={"Kullanıcı Adı veya Şifre Hatalı"} onClose={Close}/>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:250
  },
  userInfoInput: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  button: {
    width: 160,
    marginTop: 20,
  }
});
export default LoginScreen;