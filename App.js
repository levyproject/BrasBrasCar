import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, TextInput, Dimensions, Button } from 'react-native';
import firebase from 'firebase';

const {width: WIDTH } = Dimensions.get('window')

  var config = { 
    apiKey: "AIzaSyB2LKqCGbrIVbqX_2xo5Jw2cl5xg8AAcHY",
    authDomain: "brasbrascar-fb1c7.firebaseapp.com",
    databaseURL: "https://brasbrascar-fb1c7.firebaseio.com",
    projectId: "brasbrascar-fb1c7",
    storageBucket: "brasbrascar-fb1c7.appspot.com",
    messagingSenderId: "751862023145"
  };

  firebase.initializeApp(config);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', errorMessage: null };
  }


  render() {
    let logo = {
      uri: 'https://image.noelshack.com/fichiers/2019/08/1/1550485662-logo.png'
    };

    return (
       <View style = {styles.inputContainer}>
        <Image source={logo} style={styles.img}/>

    
        <TextInput 
            style= {styles.input} 
            placeholder={'Adresse mail'} 
            underlineColorAndroid='transparent' 
            placeholderTextColor = 'dimgrey' 
        />  
        

       
        <TextInput 
            style= {styles.input} 
            placeholder={'Mot de passe'} 
            underlineColorAndroid='transparent' 
            placeholderTextColor = 'dimgrey'
            secureTextEntry={true}
        />
        

        <Button style={styles.buttton}
            onPress={this.login}
            title= "Connexion"
            color="#99e265"
        /> 
      </View>
    );
  }
}



const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10
  },
  button: {
    marginTop: 40,
    borderRadius: 20,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 500,
  },
  input: { 
    alignItems: 'stretch',
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal: 25,
    backgroundColor: 'whitesmoke',
    color: 'dimgrey',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});
