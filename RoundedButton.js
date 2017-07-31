// @flow

import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


type RoundedButtonProps = {
  onPress: () => void,
  text?: string,
  children?: string,
  navigator?: Object
}

export default class RoundedButton extends React.Component {
  props: RoundedButtonProps

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#87ceeb',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'zilla',
    fontSize: 16
  }
});