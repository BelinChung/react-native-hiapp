import React from 'react'
import connect from 'redux-connect-decorator'
import t from '@Localize'
import config from '@Config'
import styles from '@Styles'
import Icon from '@Components/Icon'
import { View, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import req from '@Network'

@connect(state => ({
  user: state.app.user
}))

export default class HomeScreen extends React.Component {
  static navigationOptions = _ => {
    return {
      ...config.defaultNavigation,
      title: t('global.settings'),
    }
  }

  constructor() {
    super()
    this.menuList = [
      {
        title: t('settings.language'),
        icon: 'language',
        color: '#09f',
        onPress() {
          this.props.navigation.navigate('Language')
        }
      },
      {
        title: t('settings.feedback'),
        icon: 'feedback2',
        color: '#0c9',
        onPress() {
          this.props.navigation.navigate('Feedback')
        }
      },
      {
        title: t('settings.about'),
        icon: 'about1',
        color: '#fc3',
        onPress() {
          this.props.navigation.navigate('About')
        }
      }
    ]
  }

  render() {
    return (
      <View style={viewStyles.container}>
        <ListItem
          chevron
          topDivider
          bottomDivider
          leftAvatar={{
            size: 65,
            source: {
              uri: this.props.user.avatar_url
            }
          }}
          title={this.props.user.nick_name}
          titleStyle={{ fontSize: 23 }}
          subtitle={t('settings.location') + ': ' + this.props.user.location}
          subtitleStyle={{ fontSize: 16, color: '#858585' }}
          onPress={_ => { this.props.navigation.navigate('Profile') }}
        />
        {
          this.menuList.map((item, i) => (
            <View style={viewStyles.list} key={i}>
              <ListItem
                containerStyle={viewStyles.listItem}
                chevron
                topDivider
                bottomDivider
                title={item.title}
                onPress={item.onPress.bind(this)}
                leftIcon={<Icon style={{ marginTop: 4 }} name={item.icon} color={item.color}/>}
              />
            </View>
          ))
        }
      </View>
    )
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
    paddingTop: 15
  },
  list: {
    marginTop: 10
  },
  listItem: {
    paddingTop: 8,
    paddingBottom: 8
  }
})
