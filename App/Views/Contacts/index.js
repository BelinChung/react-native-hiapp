import React from 'react'
import connect from 'redux-connect-decorator'
import config from '@Config'
import styles from '@Styles'
import t from '@Localize'
import ListTitle from '@Components/ListTitle'
import { fetchContacts } from '@Store/Actions'
import { getRemoteAvatar } from '@Utils'

import {
  View,
  FlatList,
  StyleSheet
} from 'react-native'

import {
  ListItem
} from 'react-native-elements'

@connect(state => ({
  contacts: state.contacts.contacts
}), {
  fetchContacts
})

export default class HomeScreen extends React.Component {
  static navigationOptions = _ => {
    return {
      ...config.defaultNavigation,
      title: t('global.contacts'),
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  renderItem = ({ item }) => {
    let listTitle = null
    if (item.isFirstHeader) {
      listTitle = <ListTitle title={item.header} />
    }
    return (
      <View>
        {listTitle}
        <ListItem
          chevron
          topDivider
          bottomDivider
          containerStyle={viewStyles.listItem}
          subtitleStyle={viewStyles.subtitleStyle}
          leftAvatar={{ source: { uri: getRemoteAvatar(item.avatar) } }}
          title={item.nickname}
          subtitle={item.location}
          onPress={_ => { this.props.navigation.navigate('Message', { user: item }) }}
        />
      </View>
    )
  }

  keyExtractor = (item, index) => index.toString()

  componentDidMount() {
    this.setState({
      refreshing: true
    })
    this.props.fetchContacts().then(_ => {
      this.setState({
        refreshing: false
      })
    })
  }

  render() {
    return (
      <FlatList
        style={viewStyles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={this.keyExtractor}
        data={this.props.contacts}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
      />
    )
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container
  },
  listItem: {
    paddingTop: 8,
    paddingBottom: 8
  },
  subtitleStyle: {
    fontSize: 14,
    color: '#858585'
  }
})
