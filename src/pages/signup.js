import React, {Component} from 'react'
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'

export default class Signup extends Component {
    static navigationOptions = {
        title: "Cadastro"
    }
    render() {
        return (
            <View style={styles.form}>
              <Text style={styles.text}> Nome Completo </Text>
              <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}/>
              <Text style={styles.text}> CPF </Text>
              <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}/>
              <Text style={styles.text}> Profissão </Text>
              <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}/>
              <Text style={styles.text}> CRM/CRN/COFEF </Text>
              <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}/>
              <Text style={styles.text}> Email </Text>
              <TextInput style={styles.textinput} underlineColorAndroid={'transparent'}/>
              <Text style={styles.text}> Senha </Text>
              <TextInput style={styles.textinput} underlineColorAndroid={'transparent'} secureTextEntry={true}/>
              <Text style={styles.text}> Repita Senha </Text>
              <TextInput style={styles.textinput} underlineColorAndroid={'transparent'} secureTextEntry={true}/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}> Cadastrar </Text>
              </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:40,
    paddingVertical: 40
  },
  textinput: {
    alignSelf: 'stretch',
    height: 30,
    marginTop: 5,
    marginBottom: 7,
    color: '#000000',
    borderBottomColor: '#e0dbdb',
    borderBottomWidth: 1,
  },
  button: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 20,
      paddingVertical: 13,
      paddingHorizontal: 5,
      borderRadius: 30,
      backgroundColor: '#3CB371',
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  }
});
