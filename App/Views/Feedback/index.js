import React from 'react'
import config from '@Config'
import styles from '@Styles'
import t from '@Localize'
import Editor from '@Components/Editor'
import HeaderButton from '@Components/HeaderButton'

import {
  View,
  Alert,
  StyleSheet
} from 'react-native'

import {
  Header
} from 'react-native-elements'

export default class FeedbackScreen extends React.Component {
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
          leftComponent={<HeaderButton text={ t('global.back') } icon={ 'ios7arrowleft' } onPressButton={ _ => { this.props.navigation.goBack() } }/>}
          centerComponent={{ text: t('settings.feedback'), style: styles.modalHeader.center }}
          rightComponent={<HeaderButton text={t('global.send')} onPressButton={ _ => { this.sendFeedback() }}/>}
          containerStyle={{
            backgroundColor: config.mainColor,
          }}
        />
        <Editor
          text={this.state.text}
          placeholder={t('settings.feedbackPlaceholder')}
          enableTools={'camera, album, emotion'}
          onChangeText={this.onChangeText.bind(this)}
        />
      </View>
    )
  }

  sendFeedback() {
    Alert.alert(
      t('settings.feedbackSuccess'),
      this.state.text,
      [{
        text: t('global.ok'),
        onPress: () => {
          this.setState({
            text: ''
          })
        }
      }]
    )
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
  },
})
