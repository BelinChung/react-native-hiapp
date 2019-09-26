import React from 'react'
import connect from 'redux-connect-decorator'
import config from '@Config'
import styles from '@Styles'
import t from '@Localize'
import HeaderButton from '@Components/HeaderButton'
import { fetchUserInfo, setModalVisibleStatus } from '@Store/Actions'

import {
  View,
  StyleSheet
} from 'react-native'

@connect(state => ({
  //
}), {
  setModalVisibleStatus,
  fetchUserInfo
})

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const onPressRightButtonFunc = params.openPublisher || function() {}
    return {
      ...config.defaultNavigation,
      title: t('global.home'),
      headerRight: (
        <HeaderButton
          isIcon
          text='feedback'
          onPressButton={ onPressRightButtonFunc }/>
      )
    }
  }

  componentDidMount () { //eslint-disable-line
    this.props.navigation.setParams({ openPublisher: () => this.openPublisher() })
    this.props.fetchUserInfo()
  }

  render() {
    return (
      <View style={viewStyles.container}>
      </View>
    )
  }

  openPublisher() {
    this.props.setModalVisibleStatus({
      name: 'publisher',
      status: true
    })
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
  },
})
