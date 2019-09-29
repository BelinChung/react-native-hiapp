import React from 'react'
import connect from 'redux-connect-decorator'
import PropTypes from 'prop-types'
import config from '@Config'
import Icon from '../Icon'
import t from '@Localize'
import ParsedText from 'react-native-parsed-text'
import { getRemoteAvatar } from '@Utils'
import { formatDistance } from 'date-fns'
import { setModalVisibleStatus, setModalParams } from '@Store/Actions'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {
  Avatar
} from 'react-native-elements'

@connect(state => ({
  //
}), {
  setModalVisibleStatus,
  setModalParams
})

export default class Post extends React.Component {
  render() {
    const { disableToolbar, post } = this.props
    const timeString = `#${post.id} ${
      formatDistance(new Date(post.created_at * 1000), new Date())
    }`
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar rounded avatarStyle={styles.headerAvatar} source={{ uri: getRemoteAvatar(post.avatar) }}/>
          <View style={styles.headerUser}>
            <Text style={styles.username}>{post.nickname}</Text>
            <Text style={styles.userTime}>{timeString}</Text>
          </View>
        </View>
        <View style={styles.details}>
          <ParsedText
            style={styles.postText}
            parse={
              [
                { type: 'url', style: styles.linkText, onPress: this._handleUrlPress.bind(this) },
                { type: 'phone', style: styles.linkText, onPress: this._handlePhonePress.bind(this) },
              ]
            }
            childrenProps={{ allowFontScaling: false }}
          >{post.text}</ParsedText>
          {this._renderPostImage()}
        </View>
        {this._renderToolbar()}
      </View>
    )
  }

  _renderPostImage() {
    const { post } = this.props
    if (post.original_pic) {
      return (
        <TouchableOpacity>
          <Image source={{ uri: post.original_pic }} style={styles.postImage} resizeMode={'cover'}/>
        </TouchableOpacity>
      )
    }
  }

  _renderToolbar() {
    const { post, disableToolbar } = this.props
    if (!disableToolbar) {
      return (
        <View style={styles.tools}>
          <TouchableOpacity style={[styles.toolItemContainer, styles.toolItemBorder]}>
            <View style={styles.toolItem}>
              <Icon name="comment" size={16} color="#6d6d78" style={{ marginTop: 2 }}/>
              <Text style={styles.toolItemText}>{ post.comment_count > 0 ? post.comment_count : t('global.comment') }</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolItemContainer}>
            <View style={styles.toolItem}>
              <Icon name="like" size={16} color="#6d6d78" style={{ marginTop: 1 }}/>
              <Text style={styles.toolItemText}>{ post.like_count > 0 ? post.like_count : t('global.like') }</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={{ marginBottom: 5 }}/>
      )
    }
  }

  _handleUrlPress(url) {
    if (url.indexOf('http') < 0) {
      url = `http://${url}`
    }
    this.props.setModalParams({
      url
    })
    this.props.setModalVisibleStatus({
      name: 'webview',
      status: true
    })
  }

  _handlePhonePress() {
    //
  }
}

Post.defaultProps = {
  disableToolbar: false
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  disableToolbar: PropTypes.bool,
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#dadada',
    borderWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    paddingBottom: 5
  },
  headerAvatar: {
    width: 40,
    height: 40
  },
  headerUser: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 6
  },
  username: {
    fontSize: 14,
    fontWeight: '700',
    color: config.mainColor
  },
  userTime: {
    fontSize: 12,
    color: '#8999a5'
  },
  details: {
    flexDirection: 'column'
  },
  postText: {
    fontSize: 12,
    color: '#000',
    padding: 10,
    paddingBottom: 5,
    paddingTop: 0
  },
  postImage: {
    height: 250,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#dadada'
  },
  tools: {
    flexDirection: 'row',
    borderTopColor: '#dadada',
    borderTopWidth: 1,
    marginTop: 5
  },
  toolItemContainer: {
    flex: 1
  },
  toolItem: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolItemBorder: {
    borderRightWidth: 1,
    borderColor: '#dadada'
  },
  toolItemText: {
    color: '#6d6d78',
    fontSize: 12,
    marginLeft: 3
  },
  linkText: {
    color: '#0366d6'
  }
})
