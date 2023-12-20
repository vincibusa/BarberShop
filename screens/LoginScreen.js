import React from 'react';
import { View, Button, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform, Image  } from 'react-native'; // Assicurati di importare i componenti necessari
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import immagineLogin from '../assets/images/immagineLogin.svg'
import myInput from '../components/myInput';
import { TextInput } from 'react-native-paper';
import { Button as PaperButton } from 'react-native-paper';




export default function LoginScreen() {
    
  const navigation = useNavigation();

  const goToHome = () => {
    // Naviga verso la schermata Home
    navigation.navigate('MainTabs');
  };

  const goToRegister = () => {
    navigation.navigate('Register')
  }

  const [text, setText] = React.useState("");

  return (
    <KeyboardAvoidingView
      style={styles.contenitore}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} 
    >
    <SafeAreaView style={styles.container}>
 <View style={styles.immagine}>
 <Image
  source={require('../assets/images/princi.png')} // Sostituisci con il percorso corretto della tua immagine
  style={styles.image}
  resizeMode="contain"
/>
 </View>

 <View style={styles.form}>
    <Text style={styles.title}>Benvenuto</Text>
    <Text style={styles.description}>Entra con il tuo account</Text>
    <View style={styles.formInput}> 
 <TextInput style={styles.inputEmail}
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
     <TextInput style={styles.inputPass}
      label="Password"
      value={text}
      onChangeText={text => setText(text)}
    />
     <TouchableOpacity style={styles.button}  mode="contained" onPress={goToHome}>
<Text style={styles.textButton}>Entra</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={goToRegister}>
  <Text style={styles.footer}>Non hai un account? Registrati</Text>
  </TouchableOpacity>
    </View>
 </View>
  
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%', 
    height: '100%', 

  },

  contenitore:{
    flex: 1,
    backgroundColor: '#03001C',
  },
  container: {
    flex: 1,
    borderRadius:30,
    backgroundColor: '#03001C',
   
  },
  immagine :{
    width:'100%',
    height:'44.668%',

    borderRadius:12,
  
  },
  
  form:{
    width:'100%',
height:'55.332%',
flex: 1,
alignItems:'center',

  },
  inputEmail:{
    width:'78.632%',
    height:49,
    borderRadius:6,
    backgroundColor:'#120242'
  },
    inputPass:{
        marginTop:10,
    width:'78.632%',
    height:49,
    borderRadius:6,
    backgroundColor:'#120242'
  },
  title:{
    marginTop:10,
    textAlign: 'center',
    fontFamily: 'Poppins', 
    fontSize: 32, 
    fontWeight: '600', 
    lineHeight: 40,
    color:'white'
  },
  description:{
    textAlign: 'center',
    fontFamily: 'Poppins', 
    fontSize: 20, 
    fontWeight: '600', 
    lineHeight: 40,
    color:'white'
  },
  formInput:{
    width:'100%',
    height:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:'66.410%',
    height:58,
    borderRadius:40,
    backgroundColor:'#301E67',
 justifyContent:'center',
 alignItems:'center',
 marginTop:30,
    

  },
  textButton:{
    textAlign: 'center',
    fontFamily: 'Poppins', 
    fontSize: 30, 
    fontWeight: '600', 
    lineHeight: 40,
    color:'white'
  },
  footer:{
    textAlign: 'center',
    fontFamily: 'Poppins', 
    fontSize: 14, 
    fontWeight: '600', 
    lineHeight: 40,
    color:'white'
  }
});
