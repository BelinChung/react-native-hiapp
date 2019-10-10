import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class HeaderButton extends React.Component {
  render() {
    const { icon, text, onPressButton, ...props } = this.props
    if (icon) {
      if (text) {
        return (
          <TouchableOpacity onPress={() => onPressButton() }>
            <View style={styles.iconTextContainer}>
              <Icon name={icon} size={28} color="#fff"/>
              <Text style={styles.iconText}>{ text }</Text>
            </View>
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity style={styles.iconContainer} onPress={() => onPressButton() }>
            <Icon name={icon} size={28} color="#fff"/>
          </TouchableOpacity>
        )
      }
    } else {
      return (
        <TouchableOpacity onPress={() => onPressButton()}>
          <Text style={styles.rightButton}>{text}</Text>
        </TouchableOpacity>
      )
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
  },
  rightButton: {
    color: '#fff',
    fontSize: 18
  }
})
