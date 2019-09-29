import React from 'react'
import connect from 'redux-connect-decorator'
import config from '@Config'
import styles from '@Styles'
import t from '@Localize'
import ListTitle from '@Components/ListTitle'
import EmptyBox from '@Components/EmptyBox'
import { fetchContacts } from '@Store/Actions'
import { getRemoteAvatar } from '@Utils'

import {
  View,
  SectionList,
  StyleSheet,
  ActivityIndicator
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
      loading: true
    }
  }

  _renderItem({ item }) {
    return (
      <View>
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

  _renderListEmpty() {
    if (this.state.loading) {
      return (
        <View style={viewStyles.loadingBox}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
    return (
      <EmptyBox style={{ height: 250 }}/>
    )
  }

  _renderSectionHeader({ section: { title } }) {
    return (
      <ListTitle title={title}/>
    )
  }

  _keyExtractor(item, index) {
    return index.toString()
  }

  componentDidMount() {
    this.props.fetchContacts().then(_ => {
      this.setState({
        loading: false
      })
    })
  }

  render() {
    return (
      <SectionList
        style={viewStyles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={this._keyExtractor}
        sections={this.props.contacts}
        renderItem={this._renderItem.bind(this)}
        renderSectionHeader={this._renderSectionHeader.bind(this)}
        ListEmptyComponent={this._renderListEmpty.bind(this)}
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
  },
  loadingBox: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
