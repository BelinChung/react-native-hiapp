import React from 'react'
import PropTypes from 'prop-types'
import iconfont from './iconfont'
import { Text } from 'react-native'

export default class Icon extends React.Component {
  render() {
    const { name, size, color, style, ...props } = this.props
    return (
      <Text style={{ fontFamily: 'iconfont', fontSize: size, color: color, ...style }}>{iconfont(name)}</Text>
    )
  }
}

Icon.defaultProps = {
  size: 26,
  color: '#000'
}
Icon.propTypes = {
  name: PropTypes.string.isRequired
}
