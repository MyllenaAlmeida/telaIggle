import React, {Component} from 'react';
import {StyleSheet, Text, View, Button,Alert} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textContainer}>Iggle</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Profissional</Text>
          </TouchableOpacity>
        </View>
         <View>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.btntext2}>Cliente</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    textAlign:'center',
    margin: 160,
    color:'#C7C7C7',
    fontSize: 18,
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 30,
    backgroundColor: '#3CB371',
  },
  button2: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 30,
    backgroundColor: '#D7D5D2',
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  },
  btntext2: {
    color: '#25272F',
    fontWeight: 'bold'
  }
});
