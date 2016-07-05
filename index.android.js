import React, { 
    Component,
    PropTypes         
} from 'react'

import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native'

import NavigatorComp from './App/Components/Navigator'

AppRegistry.registerComponent('RN_HiApp', () => NavigatorComp)