import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class HeaderButton extends React.Component {
  render() {
    const { icon, text, onPressButton, ...props } = this.props
    if (icon) {
      if (text) {
        return (
          <TouchableHighlight underlayColor='transparent' onPress={() => onPressButton() }>
            <View style={styles.iconTextContainer}>
              <Icon name={icon} size={28} color="#fff"/>
              <Text style={styles.iconText}>{ text }</Text>
            </View>
          </TouchableHighlight>
        )
      } else {
        return (
          <TouchableHighlight underlayColor='transparent' style={styles.iconContainer} onPress={() => onPressButton() }>
            <Icon name={icon} size={28} color="#fff"/>
          </TouchableHighlight>
        )
      }
    } else {
      return <Button title={text} color="#fff" onPress={() => onPressButton() }/>
    }
  }
}

HeaderButton.defaultProps = {
  icon: undefined
}

HeaderButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onPressButton: PropTypes.func
}

const styles = StyleSheet.create({
  iconText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 2,
    marginLeft: -4
  },
  iconTextContainer: {
    width: 50,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
