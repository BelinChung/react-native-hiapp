import React from 'react'
import connect from 'redux-connect-decorator'
import req from '@Network'
import config from '@Config'
import styles from '@Styles'
import Icon from '@Components/Icon'
import t from '@Localize'
import Post from '@Components/Post'
import Comment from '@Components/Comment'
import HeaderButton from '@Components/HeaderButton'
import EmptyBox from '@Components/EmptyBox'
import { isIphoneX } from '@Utils'
import { setModalVisibleStatus } from '@Store/Actions'

import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import {
  Header
} from 'react-native-elements'

@connect(state => ({
  timeline: state.home.timeline
}), {
  setModalVisibleStatus
})

export default class PostScreen extends React.Component {
  constructor(props) {
    super(props)
    const { mid } = this.props.navigation.state.params
    const post = this.props.timeline.find(item => item.id === mid)
    this.state = {
      post,
      loadingComments: true,
      comments: []
    }
  }

  componentDidMount() {
    this._fetchComments()
  }

  render() {
    const { post } = this.state
    return (
      <View style={viewStyles.container}>
        <Header
          leftComponent={<HeaderButton text={ t('global.back') } icon={ 'ios7arrowleft' } onPressButton={ _ => { this.props.navigation.goBack() } }/>}
          centerComponent={{ text: t('global.post'), style: styles.modalHeader.center }}
          containerStyle={{
            backgroundColor: config.mainColor,
          }}
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={viewStyles.postCard}>
            <Post post={post} disableToolbar/>
          </View>
          <View style={[viewStyles.comments, isIphoneX() ? viewStyles.fixComments : {}]}>
            <View style={viewStyles.commentTitle}><Text style={viewStyles.commentTitleText}>{t('global.comment')}</Text></View>
            {this._renderComments()}
          </View>
        </ScrollView>
        <View style={[viewStyles.toolbar, isIphoneX() ? viewStyles.fixToolbar : {}]}>
          <TouchableOpacity style={[viewStyles.toolItemContainer, viewStyles.toolItemBorder]} onPress={this.openCommentModal.bind(this)}>
            <View style={viewStyles.toolItem}>
              <Icon name="comment" size={20} color="#6d6d78" style={{ marginTop: 2 }}/>
              <Text style={viewStyles.toolItemText}>{ post.comment_count > 0 ? post.comment_count : t('global.comment') }</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={viewStyles.toolItemContainer}>
            <View style={viewStyles.toolItem}>
              <Icon name="like" size={20} color="#6d6d78" style={{ marginTop: 1 }}/>
              <Text style={viewStyles.toolItemText}>{ post.like_count > 0 ? post.like_count : t('global.like') }</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _renderComments() {
    if (this.state.loadingComments) {
      return (
        <View style={viewStyles.loadingComments}>
          <ActivityIndicator size="large"/>
        </View>
      )
    } else if (!this.state.comments.length) {
      return (
        <EmptyBox style={{ height: 180 }}/>
      )
    } else {
      return this.state.comments.map((item, index) => {
        return (
          <Comment comment={item} key={index}/>
        )
      })
    }
  }

  _fetchComments() {
    req.get('/comments.json').then(res => {
      const random = Math.floor(Math.random() * 2)
      if (random) {
        const data = res.data
        this.setState({
          comments: data
        })
      }
    }).then(_ => {
      this.setState({
        loadingComments: false
      })
    })
  }

  openCommentModal() {
    this.props.setModalVisibleStatus({
      name: 'comment',
      status: true
    })
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
  },
  postCard: {
    marginTop: 5,
    marginBottom: 5
  },
  comments: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dadada',
    backgroundColor: '#fff',
    marginBottom: 60,
  },
  fixComments: {
    marginBottom: 96
  },
  commentTitleText: {
    height: 35,
    lineHeight: 35,
    paddingLeft: 5,
    fontSize: 12,
    color: '#5d5d5d'
  },
  loadingComments: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  toolbar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#dadada'
  },
  fixToolbar: {
    paddingBottom: 36
  },
  toolItemContainer: {
    flex: 1,
  },
  toolItem: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolItemBorder: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: '#dadada'
  },
  toolItemText: {
    color: '#6d6d78',
    fontSize: 14,
    marginLeft: 3
  },
})
