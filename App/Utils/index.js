import {
  PixelRatio,
  Dimensions,
  Platform
} from 'react-native'

export function getRemoteAvatar(id) {
  return `https://loremflickr.com/70/70/people?lock=${id}`
}

export function isIphoneX() {
  const screenW = Dimensions.get('window').width
  const screenH = Dimensions.get('window').height
  return (Platform.OS === 'ios' && (Number(((screenH / screenW) + '').substr(0, 4)) * 100) === 216)
}
