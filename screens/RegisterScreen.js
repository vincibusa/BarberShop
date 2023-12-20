import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';
export default function RegisterScreen() {

    const [text, setText] = React.useState("");
  return (
    <KeyboardAvoidingView
    style={styles.contenitore}
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} 
  >
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>Crea il tuo account</Text>
      <TextInput style={styles.inputMain}
      label="Nome"
      value={text}
      onChangeText={text => setText(text)}
    />
       <TextInput style={styles.input}
      label="cognome"
      value={text}
      onChangeText={text => setText(text)}
    />
       <TextInput style={styles.input}
      label="email"
      value={text}
      onChangeText={text => setText(text)}
    />
       <TextInput style={styles.input}
      label="numero cellulare"
      value={text}
      onChangeText={text => setText(text)}
    />
       <TextInput style={styles.input}
      label="password"
      value={text}
      onChangeText={text => setText(text)}
    />
       <TextInput style={styles.input}
      label="confermaPassword"
      value={text}
      onChangeText={text => setText(text)}
    />
    <TouchableOpacity style={styles.button}  mode="contained" >
<Text style={styles.textButton}>Conferma</Text>
  </TouchableOpacity>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    contenitore:{
        flex: 1,
        backgroundColor: '#03001C',
      },
    container: {
        flex: 1,
        borderRadius:30,
        backgroundColor: '#03001C',
        justifyContent:'start',
        alignItems:'center',
       
      },
      mainText:{
        marginTop:50,
        textAlign: 'center',
        fontFamily: 'Poppins', 
        fontSize: 32, 
        fontWeight: '600', 
        lineHeight: 40,
        color:'white'
      },
      inputMain:{
        marginTop:50,
        width:'78.632%',
        height:49,
        borderRadius:6,
        backgroundColor:'#120242'
      },
      input:{
        marginTop:20,
        width:'78.632%',
        height:49,
        borderRadius:6,
        backgroundColor:'#120242'
      },
      button:{
        width:'78.632%',
        height:40,
        borderRadius:30,
        backgroundColor:'#301E67',
     justifyContent:'center',
     alignItems:'center',
     marginTop:30,
        
    
      },
      textButton:{
        textAlign: 'center',
        fontFamily: 'Poppins', 
        fontSize: 20, 
        fontWeight: '600', 
        lineHeight: 40,
        color:'white'
      },
});
