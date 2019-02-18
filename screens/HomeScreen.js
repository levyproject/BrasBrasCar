import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    let pic = {
      uri: 'https://image.noelshack.com/fichiers/2019/08/1/1550485662-logo.png'
    };
    return (
      <Image source={pic} style={{width: 410, height: 430}}/>
    );
  }
}
