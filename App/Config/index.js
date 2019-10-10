import {
  Platform,
  StatusBar
} from 'react-native'

const Skin = {
  mainColor: '#ff9800',
  viewsBackgroundColor: '#f8f8f8',
  androidHeader: {
    height: 44,
    paddingTop: 0
  }
}

const App = {
  devBaseUrl: 'https://raw.githubusercontent.com/BelinChung/api-mock/master/HiApp',
  prodBaseUrl: 'https://raw.githubusercontent.com/BelinChung/api-mock/master/HiApp',
  defaultNavigation: {
    headerStyle: {
      ...Platform.select({
        android: {
          height: StatusBar.currentHeight + 44,
          paddingTop: StatusBar.currentHeight
        }
      }),
      backgroundColor: Skin.mainColor,
    },
    headerTintColor: '#fff'
  }
}

export default {
  ...App,
  ...Skin
}
