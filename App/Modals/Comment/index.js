import React from 'react'
import connect from 'redux-connect-decorator'
import config from '@Config'
import styles from '@Styles'
import t from '@Localize'
import Editor from '@Components/Editor'
import HeaderButton from '@Components/HeaderButton'
import { setModalVisibleStatus } from '@Store/Actions'

import {
  View,
  Alert,
  Platform,
  StyleSheet
} from 'react-native'

import {
  Header
} from 'react-native-elements'

@connect(state => ({
  //
}), {
  setModalVisibleStatus
})

export default class CommentModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={viewStyles.container}>
        <Header
          leftComponent={<HeaderButton icon="ios7arrowleft" text={t('global.close')} onPressButton={ this.closeModal.bind(this) }/>}
          centerComponent={{ text: t('global.comment'), style: styles.modalHeader.center }}
          rightComponent={<HeaderButton text={t('global.send')} onPressButton={ this.sendComment.bind(this) }/>}
          containerStyle={{
            backgroundColor: config.mainColor,
            ...Platform.select({
              android: config.androidHeader
            })
          }}
        />
        <Editor
          text={this.state.text}
          onChangeText={this.onChangeText.bind(this)}
          enableTools={'camera, album, emotion'}
        />
      </View>
    )
  }

  closeModal() {
    this.props.setModalVisibleStatus({
      name: 'comment',
      status: false
    })
  }

  sendComment() {
    this.closeModal()
  }

  onChangeText(text) {
    this.setState({
      text
    })
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
  }
})
