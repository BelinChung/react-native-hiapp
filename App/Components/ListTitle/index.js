import React from 'react'
import PropTypes from 'prop-types'

import {
  Text,
  StyleSheet
} from 'react-native'

export default class ListTitle extends React.Component {
  render() {
    const { title, fontSize, color, style, ...props } = this.props
    return (
      <Text style={{ ...styles.container, fontSize, color, ...style }}>{title}</Text>
    )
  }
}

ListTitle.defaultProps = {
  fontSize: 13,
  color: '#858585'
}

ListTitle.propTypes = {
  title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6
  }
})
