import React from 'react'
import WebView from 'react-native-webview'
import connect from 'redux-connect-decorator'
import config from '@Config'
import styles from '@Styles'
import t from '@Localize'
import HeaderButton from '@Components/HeaderButton'
import { setModalVisibleStatus } from '@Store/Actions'

import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet
} from 'react-native'

import {
  Header
} from 'react-native-elements'

@connect(state => ({
  modalParams: state.app.modalParams
}), {
  setModalVisibleStatus
})

export default class WebviewModal extends React.Component {
  render() {
    return (
      <View style={viewStyles.container}>
        <Header
          leftComponent={<HeaderButton icon="ios7arrowleft" text={ t('global.close') } onPressButton={ this.closeModal.bind(this) }/>}
          centerComponent={{ text: 'Webview', style: styles.modalHeader.center }}
          containerStyle={{
            backgroundColor: config.mainColor,
            ...Platform.select({
              android: config.androidHeader
            })
          }}
        />
        <SafeAreaView style={viewStyles.webview}>
          <WebView
            source={{ uri: this.props.modalParams.url }}
          />
        </SafeAreaView>
      </View>
    )
  }

  closeModal() {
    this.props.setModalVisibleStatus({
      name: 'webview',
      status: false
    })
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
    backgroundColor: '#fff'
  },
  webview: {
    flex: 1,
    height: '100%'
  }
})
