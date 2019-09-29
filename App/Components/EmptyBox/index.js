import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@Components/Icon'
import t from '@Localize'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class EmptyBox extends React.Component {
  render() {
    const { context, fontSize, color, style } = this.props
    return (
      <View style={[style, styles.container]}>
        <Icon name="wujieguoyangshi" size={fontSize} color={color}/>
        <Text style={{ color, ...styles.text }}>{context || t('global.emptyBox')}</Text>
      </View>
    )
  }
}

EmptyBox.defaultProps = {
  context: '',
  fontSize: 80,
  color: '#929292'
}

EmptyBox.propTypes = {
  context: PropTypes.string,
  fontSize: PropTypes.number
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    color: '#929292'
  }
})
