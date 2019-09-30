import React from 'react'
import config from '@Config'
import styles from '@Styles'
import HeaderButton from '@Components/HeaderButton'
import t from '@Localize'

import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native'

import {
  Header
} from 'react-native-elements'

import LOGO_IMG from '@assets/logo.png'

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={viewStyles.container}>
        <Header
          leftComponent={<HeaderButton text={ t('global.back') } icon={ 'ios7arrowleft' } onPressButton={ _ => { this.props.navigation.goBack() } }/>}
          centerComponent={{ text: t('global.about'), style: styles.modalHeader.center }}
          containerStyle={{
            backgroundColor: config.mainColor,
          }}
        />
        <View style={viewStyles.textContainer}>
          <View style={viewStyles.logoView}>
            <Image style={viewStyles.logo} source={LOGO_IMG} />
          </View>
          <View style={viewStyles.appNameView}>
            <Text style={viewStyles.appNameText}>HiApp</Text>
          </View>
          <View style={viewStyles.infoView}>
            <Text style={viewStyles.infoText}>GitHub: BelinChung</Text>
            <Text style={viewStyles.infoText}>Twitter: @BelinChung</Text>
            <Text style={viewStyles.infoText}>Email: belinchung@gmail.com</Text>
          </View>
          <View style={viewStyles.copyrightView}>
            <Text style={viewStyles.copyrightText}>Copyright © 2019 BelinChung.</Text>
          </View>
        </View>
      </View>
    )
  }
}

const viewStyles = StyleSheet.create({
  container: {
    ...styles.container,
  },
  textContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 35
  },
  logoView: {
    width: 90,
    height: 90,
    borderColor: '#dfdfdf',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center'
  },
  logo: {
    width: 75,
    height: 75,
    alignSelf: 'center'
  },
  appNameView: {
    marginTop: 15,
  },
  appNameText: {
    fontSize: 20,
    color: '#666'
  },
  infoView: {
    flexGrow: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  infoText: {
    marginTop: 10,
    color: '#666'
  },
  copyrightView: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0
  },
  copyrightText: {
    color: '#666',
    alignSelf: 'center'
  }
})
