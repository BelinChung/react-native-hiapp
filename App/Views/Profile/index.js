import React from 'react'
import connect from 'redux-connect-decorator'
import config from '@Config'
import styles from '@Styles'
import { View, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import t from '@Localize'

@connect(state => ({
  user: state.app.user
}))

export default class ProfileScreen extends React.Component {
  static navigationOptions = _ => {
    return {
      ...config.defaultNavigation,
      title: t('global.profile'),
    }
  }

  render() {
    return (
      <View style={viewStyles.container}>
        <View>
          <ListItem
            topDivider
            bottomDivider
            title={t('settings.avatar')}
            rightAvatar={{
              size: 65,
              source: {
                uri: this.props.user.avatar_url
              }
            }}
          />
          <ListItem
            bottomDivider
            title={t('settings.nickname')}
            rightTitle={this.props.user.nick_name}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <ListItem
            topDivider
            bottomDivider
            title={t('settings.gender')}
            rightTitle={this.formatGender()}
          />
          <ListItem
            bottomDivider
            title={t('settings.location')}
            rightTitle={this.props.user.location}
            rightTitleStyle={{ width: 140 }}
          />
        </View>
      </View>
    )
  }

  formatGender() {
    return this.props.user.gender === 'm' ? t('settings.male') : t('settings.female')
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
    paddingTop: 20
  }
})
