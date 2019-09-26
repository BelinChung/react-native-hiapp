import React from 'react'
import config from '@Config'
import t from '@Localize'
import { Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from '@Components/Icon'
import HomeScreen from '@Views/Home'
import ContactsScreen from '@Views/Contacts'
import SettingsScreen from '@Views/Settings'
import AboutScreen from '@Views/About'
import ProfileScreen from '@Views/Profile'
import LanguageScreen from '@Views/Language'
import FeedbackScreen from '@Views/Feedback'
import MessageScreen from '@Views/Message'

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen, }
})
const ContactsStack = createStackNavigator({
  Contacts: { screen: ContactsScreen }
})
const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Contacts: { screen: ContactsStack },
    Settings: { screen: SettingsStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case 'Home':
            return <Text style={{ color: tintColor, fontSize: 12 }}>{t('global.home')}</Text>
          case 'Contacts':
            return <Text style={{ color: tintColor, fontSize: 12 }}>{t('global.contacts')}</Text>
          case 'Settings':
            return <Text style={{ color: tintColor, fontSize: 12 }}>{t('global.settings')}</Text>
        }
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Home':
            iconName = `ios7home${focused ? '' : 'outline'}`
            break
          case 'Contacts':
            iconName = `ios7chatbubble${focused ? '' : 'outline'}`
            break
          case 'Settings':
            iconName = `ios7gear${focused ? '' : 'outline'}`
            break
        }
        return <Icon name={iconName} size={26} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: config.mainColor,
      inactiveTintColor: 'gray',
    }
  }
)

const AppStack = createStackNavigator({
  Tabs: TabNavigator,
  About: { screen: AboutScreen },
  Profile: { screen: ProfileScreen },
  Language: { screen: LanguageScreen },
  Feedback: { screen: FeedbackScreen },
  Message: { screen: MessageScreen }
}, {
  headerMode: 'none',
})

export default createAppContainer(AppStack)
