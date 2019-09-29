import React from 'react'
import PropTypes from 'prop-types'
import { getRemoteAvatar } from '@Utils'
import { formatDistance } from 'date-fns'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {
  Avatar
} from 'react-native-elements'

export default class Comment extends React.Component {
  render() {
    const { comment } = this.props
    return (
      <View style={styles.container}>
        <Avatar rounded avatarStyle={styles.avatar} source={{ uri: getRemoteAvatar(comment.avatar) }}/>
        <View style={styles.details}>
          <Text style={styles.detailName}>{comment.name}</Text>
          <Text style={styles.detailTime}>{formatDistance(new Date(comment.time * 1000), new Date())}</Text>
          <Text style={styles.detailText}>{comment.text}</Text>
        </View>
      </View>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#dadada'
  },
  avatar: {
    width: 30,
    height: 30
  },
  details: {
    marginLeft: 5,
    flexDirection: 'column'
  },
  detailName: {
    color: '#333',
    fontSize: 13
  },
  detailTime: {
    fontSize: 11,
    color: '#929292'
  },
  detailText: {
    marginTop: 2,
    fontSize: 12,
    color: '#5d5d5d'
  }
})
