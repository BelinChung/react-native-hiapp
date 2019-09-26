import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

import {
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class HeaderButton extends React.Component {
  render() {
    const { isIcon, text, onPressButton, ...props } = this.props
    if (isIcon) {
      return (
        <TouchableHighlight underlayColor='transparent' style={styles.iconContainer} onPress={() => onPressButton() }>
          <Icon name={text} size={28} color="#fff"/>
        </TouchableHighlight>
      )
    } else {
      return <Button title={text} color="#fff" onPress={() => onPressButton() }/>
    }
  }
}

HeaderButton.defaultProps = {
  isIcon: false
}

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPressButton: PropTypes.func
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
