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

export default class FeedbackScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const onPressRightButtonFunc = params.sendFeedback || function() {}
    return {
      ...config.defaultNavigation,
      title: t('settings.feedback'),
      headerRight: (
        <HeaderButton
          text={t('global.send')}
          onPressButton={ onPressRightButtonFunc }/>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  componentDidMount () { //eslint-disable-line
    this.props.navigation.setParams({ sendFeedback: () => this.sendFeedback() })
  }

  render() {
    return (
      <View style={viewStyles.container}>
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
